import { NextApiRequest, NextApiResponse } from 'next';
import { getVoteCount, addVote } from '@lib/google-spreadsheet'

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
  
  if(req.method === "GET") {
    const projectTitle = req.query.title;
    // @ts-ignore
    const voteCount = await getVoteCount(projectTitle);
    return res.json(JSON.stringify({voteCount}));
  }

  const projectTitle: string = ((req.body.title as string) || '')
  const email: string = req.cookies['user-id']
  
  if (await addVote(projectTitle, email)) {
    return res.status(200).end();
  } else {
    return res.status(409).end();
  }
};