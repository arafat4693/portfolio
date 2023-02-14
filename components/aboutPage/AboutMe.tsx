import { useQuery } from "@apollo/client"
import MyInfo from "../MyInfo"
import profileOperations from "../../graphqlOperations/profile"
import AboutMeSkeleton from "./AboutMeSkeleton"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface GetUserBio {
  profiles: [{ bio: string }]
}

export default function AboutMe() {
  const { loading, error, data } = useQuery<GetUserBio>(
    profileOperations.Queries.getBio
  )

  if (error) {
    console.log(error)
    return <AboutMeSkeleton />
  }

  if (loading || data === undefined) return <AboutMeSkeleton />

  return (
    <div className="px-12 py-10">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[1.6rem] prose-p:text-2xl prose-p:leading-[1.65]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.profiles[0].bio}
        </ReactMarkdown>
      </article>

      <ul className="location grid grid-cols-1 sm:grid-cols-2 mt-6 gap-y-2">
        <MyInfo field="age" value="19" />
        <MyInfo field="residence" value="Sweden" />
        <MyInfo field="freelance" value="Available" />
        <MyInfo field="address" value="Stockholm, Sweden" />
      </ul>
    </div>
  )
}
