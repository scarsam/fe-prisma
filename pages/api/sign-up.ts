import type { NextApiRequest, NextApiResponse } from "next";

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
