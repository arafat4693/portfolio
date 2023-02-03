// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://dev.to/api/articles?username=arafat4693"
  )
  const articles = await response.json()
  // const totalArticles: number = articles.length
  res.status(200).json(articles.length)
}
