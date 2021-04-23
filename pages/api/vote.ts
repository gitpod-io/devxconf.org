import { NextApiRequest, NextApiResponse } from 'next';
import { getVoteCount, updateVoteCount } from '@lib/google-spreadsheet'

type ErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{} | ErrorResponse>
) {
  const projectTitle: string = ((req.body.title as string) || '')
  
  if(req.method === "GET") {
    return getVoteCount(projectTitle);
  }
  
  
  if (await updateVoteCount(projectTitle)) {
    return res.status(200).end();
  } else {
    return res.status(409).end();
  }
};