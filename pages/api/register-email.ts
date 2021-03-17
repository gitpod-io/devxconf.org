import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';

type ErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

type SpreadsheetRow = {
  _rawData: string[]
}

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_ID = process.env.SHEET_ID;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse<{} | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(501).json({
      error: {
        code: 'method_unknown',
        message: 'This endpoint only responds to POST'
      }
    });
  }

  const email: string = ((req.body.email as string) || '').trim().toLowerCase();
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      error: {
        code: 'bad_email',
        message: 'Invalid email'
      }
    });
  }

  let statusCode = 200;

  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });

    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const rows = await sheet.getRows();
    let existingEmails: string[] = [];
    rows.map((row: SpreadsheetRow) => {
      existingEmails.push(row._rawData[0]);
    });

    if (existingEmails.includes(email)) {
      statusCode = 409;
    } else {
      await sheet.addRow({ Emails: email });
    }
  } catch (e) {
    console.error('Error: ', e);
  }

  return res.status(statusCode).end();
};