// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { BetaAnalyticsDataClient } from "@google-analytics/data"
import pk from "../../../GAPK"

// 👇 Setting PropertyId
const propertyId = process.env.NEXT_PUBLIC_GA_PROPERTY_ID

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_GA_CLIENT_EMAIL,
    // private_key: process.env.NEXT_PUBLIC_GA_PRIVATE_KEY?.replace(/\n/gm, "\n"), // replacing is necessary
    private_key: pk.replace(/\n/gm, "\n"), // replacing is necessary
  },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: `30daysAgo`, //👈  e.g. "7daysAgo" or "30daysAgo"
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "year", // data will be year wise
      },
    ],
    metrics: [
      {
        name: "activeUsers", // it returs the active users
      },
    ],
  })

  let totalVisitors = 0
  response.rows?.forEach((row: any) => {
    totalVisitors += parseInt(row.metricValues[0].value)
  })

  res.status(200).json(totalVisitors)
}
