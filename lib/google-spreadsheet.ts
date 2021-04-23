import { GoogleSpreadsheet } from 'google-spreadsheet';
import { ro } from 'date-fns/locale';

const SPREADSHEET_ID: string = process.env.SPREADSHEET_ID || "";
const SHEET_ID: string = process.env.SHEET_ID || "";
const CLIENT_EMAIL: string = process.env.CLIENT_EMAIL || "";
const PRIVATE_KEY: string = process.env.PRIVATE_KEY || "";

export async function persistEmail(email: string) {
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
    rows.map((row) => {
      existingEmails.push(row._rawData[0]);
    });

    if (existingEmails.includes(email)) {
      return false;
    } else {
      await sheet.addRow({ Emails: email, Event: "DevX" });
    }
  } catch (e) {
    console.error('Could not persist email address in Google Sheet: ', e);
  }
  return true;
}

export async function updateVoteCount(projectTitle: string) {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });

    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Vote Count"];
    const rows = await sheet.getRows();
    let rowNumber= 0;

    rows.forEach((row, i) => {
      if (row._rawData[0] === projectTitle) {
        console.log(`${projectTitle} was voted.`)
        row._rawData[1] = `${parseInt(row._rawData[1]) + 1}`
        rowNumber = i
      }
    })

    await rows[rowNumber].save();
  } catch (e) {
    console.log(e)
  }
  return true;
}

export async function getVoteCount(projectTitle: string) {
  let count; 

  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });

    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Vote Count"];
    const rows = await sheet.getRows();

    rows.forEach(row => {
      if (row._rawData[0] === projectTitle) {
        count = row._rawData[1]
      }
    })
  } catch (e) {
    console.log(e)
  }
  return count;
}