import IconTitle from "./IconTitle"
import ResumeItem from "./ResumeItem"
import { FaGraduationCap, FaNetworkWired } from "react-icons/fa"
import ResumeSkeleton from "./ResumeSkeleton"
import resumeOperations from "../../graphqlOperations/resume"
import { ExperienceData } from "../../types"
import { useQuery } from "@apollo/client"

interface ExperienceQuery {
  resumes: ExperienceData[]
}

export default function MyResume() {
  const { data, loading, error } = useQuery<ExperienceQuery>(
    resumeOperations.Queries.getExperience
  )

  if (error) console.log(error)

  return (
    <ul className="grid grid-cols-2">
      <li className="py-8 px-12">
        <IconTitle title="experience" Icon={FaNetworkWired} />

        {(error || loading || data === undefined) && (
          <>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </>
        )}

        {data &&
          data.resumes.map((r) => {
            if (!r.experience) return null
            return <ResumeItem key={r.id} resume={r} border />
          })}
      </li>

      <li className="py-8 px-12 relative vCustomLine before:left-0">
        <IconTitle title="education" Icon={FaGraduationCap} />

        {(error || loading || data === undefined) && (
          <>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </>
        )}

        {data &&
          data.resumes.map((r) => {
            if (r.experience) return null
            return <ResumeItem key={r.id} resume={r} border />
          })}
      </li>
    </ul>
  )
}
