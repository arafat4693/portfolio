// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { BetaAnalyticsDataClient } from "@google-analytics/data"

// 👇 Setting PropertyId
// const propertyId = process.env.GA_PROPERTY_ID
const propertyId = "352112044"

const pk =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2Nv7IegS4hyAq\nypw7yyiOFOdy/NHl63JwhW2zEyR5Y1Jmg++oVV1LSDkIatGARkdhr5NbF2B1RSx+\nd9T5mEro5dcwIEpWKWHV/s9Rniy6hGJBYvXboQrBwaesxpnvu1pi8qfb8xTYJhR8\nTHe8B28X8tN0xworDNLQc0V0vaLMmml0XD9cVMQaDgfYJIAm2KZV99c+EqxwQSeF\nKWKezUQuAxCheikChHq4u6iaZGVNTIQ8PSFKmGKNjnbpYABxONsFkd5YTAvR6rni\nLdumT3LnrDyOEGCs8PQzX3kV72SMyRlmbUTsYpwtStXLHpighcMSwow4GXEnMonJ\nrF9QRRtfAgMBAAECggEAFnG6u2XwO+yFBVBUozbYhXvEsJC8qAXy4DJHO2YRuZQG\n29LHi+QL7FB2mfdSW+sMMtemHnPIMVm2a9OF28KrA3oAIhDwJyHMx8etsL97gfP5\niFVQtF9nTEt2xFzoLDPXI9YA4CJWgHNcVZ0zqGkAAaKq8jjsIzZep0dzmDgdm/b5\no0pXi4TMp/JS5Rs6n2VI21C+oOY52CoFZIskxkNQdopjbc4qJtrQwoQbGpMYNpjE\n/SVlxj0cWfp1fwL0YTe4qGLxHG7Fs9vF4w94oBr9wxKKWdD8PEL60KLxKQ1Y5bS9\nGGxu1+dwT2TJXtsiUGWuXUyAr4KVJJxRhqe5E8BhzQKBgQDv3lX7E3WD27xoRbfy\n9OMumFuBtFH//Pq/uvDIAVeWG/O1d3wqP9EzyzDJdmzbgTfxioBzjKayrE7uqLhg\n28MOa1uUz/I6lf31TPRz8hkgEYTpcWkOGubdeluJJv7j2314hEj99v+QlNY6aeyN\ncC4eFixtXtv+L041nUJXwxar6wKBgQDCeBKTkhHXxjlOBnTebEwRHZHe6ZvMzPZo\nmLdxvZDdyWk/F5yba5IqXDU2S/9xAfn6ss2RczN84hg1nEYoe09V9k1j04uN42JR\nmSk921N0sA6jiiWFbf3ACFonhpbB9JXTjhIY7tA9qMCxZkkDm8jp4ggETgNg4tHy\nb6MStxM1XQKBgQCWOvQy2k8hlH/99pxtCD85MacuJxescm9Bof2n5l9K3prWrs0P\nUQTfoYUeyJMJL3cwSoSE2jSVdyHAi99emoUiBM9I9qxJUSPLfLUl4R0nXpGV+7fG\nY8bwM/AciFXfs9pznrZwiUAq92ztDOZg9z+LDGwq29yA6HPdVG72tHMAnQKBgCHj\nAnmsjmdnJz0tatgHTwn8eRq64mdBn/6B/hVXzxKWsjxIRQXgLMws3Sjk/VIX4hOJ\nbMDXrjUowMc2wBL1ydFU5g9rIXpMESne4ozg1x4SP7rHq9ogXINF8U/J6CNMF3+R\n1h16H9devJUtGbQDRXNb68G0Rmpvm93/Dg+Iz1QRAoGAVFRbCCRvvW8evbhAovcz\n3IWTWQUuePyWW5O2XAgYCQh/diggIHsrNVqT46Qk4BnKMK6EX8sS890ea86271Bh\np55C8lOI2Je2Uh43AJMb7qh1mPqmrC7l/GassfJvVXVkWoiriVgon/FlzqcapA1e\ntU2st9JSXDdAMSfWctU81kw=\n-----END PRIVATE KEY-----\n"

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email:
      "starting-account-pb4m12bs0l3l@portfolio-1675357922127.iam.gserviceaccount.com",
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
  //   res.status(200).json({
  //     response,
  //   })
}
