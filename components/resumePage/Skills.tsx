import { useQuery } from "@apollo/client"
import { FaReact } from "react-icons/fa"
import { SkillData } from "../../types"
import BackEnd from "./BackEnd"
import FrontEnd from "./FrontEnd"
import IconTitle from "./IconTitle"
import Knowledge from "./Knowledge"
import Languages from "./Languages"
import resumeOperations from "../../graphqlOperations/resume"

interface SkillQuery {
  skills: SkillData[]
}

export default function Skills() {
  const { data, error } = useQuery<SkillQuery>(
    resumeOperations.Queries.getSkills
  )

  if (error) console.log(error)

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        <li className="px-12 py-6">
          <IconTitle title="back-end" Icon={FaReact} />
          <BackEnd backend={data?.skills[0].backEnd} />
        </li>
        <li className="relative px-12 py-6 vCustomLine sm:before:block before:hidden before:left-0">
          <IconTitle title="knowledge" Icon={FaReact} />
          <Knowledge knowledge={data?.skills[0].knowledge} />
        </li>
      </ul>

      <ul className="grid grid-cols-1 sm:grid-cols-2">
        <li className="px-12 pt-6">
          <IconTitle title="front-end" Icon={FaReact} />
          <FrontEnd frontend={data?.skills[0].frontEnd} />
        </li>
        <li className="relative px-12 pt-6 vCustomLine before:left-0 sm:before:block before:hidden">
          <IconTitle title="languages" Icon={FaReact} />
          <Languages languages={data?.skills[0].languages} />
        </li>
      </ul>
    </>
  )
}
