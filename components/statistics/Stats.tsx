import { useEffect, useState } from "react"
import { socialMedia, statisticsData } from "../../data"
import Title from "../Title"
import LinkListItem from "./LinkListItem"
import Statistic from "./Statistic"

async function fetchData(url: string) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default function Stats() {
  const [pageViews, setPageViews] = useState<number>(0)
  const [totalArticles, setTotalArticles] = useState<number>(0)
  const [articleReactions, setArticleReactions] = useState<number>(0)

  useEffect(() => {
    async function fetchApiData(): Promise<void> {
      const apiData = await Promise.allSettled<{
        status: "fulfilled" | "rejected"
        value?: number
        reason?: string
      }>([
        fetchData("/api/dev/totalArticles"),
        fetchData("/api/dev/reactions"),
        fetchData("/api/analytics/traffics"),
      ])

      apiData[0].status === "fulfilled" &&
        typeof apiData[0].value === "number" &&
        setTotalArticles(apiData[0].value)
      apiData[1].status === "fulfilled" &&
        typeof apiData[1].value === "number" &&
        setArticleReactions(apiData[1].value)
      apiData[2].status === "fulfilled" &&
        typeof apiData[2].value === "number" &&
        setPageViews(apiData[2].value)
    }
    fetchApiData()
  }, [])

  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="statistics" />
      <ul className="grid grid-cols-1 gap-5 px-12 py-8 sm:grid-cols-2 md:grid-cols-3">
        <Statistic title="page views" info={pageViews} />
        <Statistic
          title="articles"
          info={totalArticles}
          externalLink="https://dev.to/arafat4693"
        />
        <Statistic
          title="total reactions"
          info={articleReactions}
          externalLink="https://dev.to/arafat4693"
        />
        {statisticsData.map((s, i) => (
          <Statistic key={i} title={s.title} info={s.info} />
        ))}
      </ul>

      <Title name="links" />
      <ul className="px-12 py-8 mb-8 space-y-6">
        {socialMedia.map((sm) => (
          <LinkListItem key={sm.id} socialMedia={sm} />
        ))}
      </ul>
    </section>
  )
}
