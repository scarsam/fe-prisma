import type { NextApiRequest, NextApiResponse } from "next";

/*
  This endpoint is needed because of CORS issue on the server
  - This api endpoint serves as proxy between the client and the server
  - Some of the error messages don't match up with the Google document but can be tweaked in here
*/

export default async function signUpAPI(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await fetch(
      `https://prisma-fe-dev-assignent.vercel.app/api/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(req.body),
      },
    );

    const json = await response.json();

    if (!response?.ok) {
      return res.status(response?.status).json({
        message: json?.message,
      });
    }

    res.status(200).json(json);
  } catch (error) {
    res.status(500).json(error);
  }
}
