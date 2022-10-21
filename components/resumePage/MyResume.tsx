import IconTitle from "./IconTitle"
import ResumeItem from "./ResumeItem"
import { FaReact } from "react-icons/fa"

export default function MyResume() {
  return (
    <ul className="grid grid-cols-2">
      <li className="relative vCustomLine py-6 px-12">
        <IconTitle title="experience" Icon={FaReact} />
        <ResumeItem
          year="2018 - present"
          subHeader="team leader"
          imageUrl="/images/lin.png"
          place="facebook inc."
          desc="Collaborate with creative and development teams."
          border
          present
        />

        <ResumeItem
          year="2016 - 2018"
          subHeader="team leader"
          imageUrl="/images/google.png"
          place="facebook inc."
          desc="Monitored technical aspects of the front-end delivery for projects."
          border
        />

        <ResumeItem
          year="2016 - 2018"
          subHeader="team leader"
          imageUrl="/images/lin.png"
          place="facebook inc."
          desc="Optimize website and apps performance using latest technology."
        />
      </li>
      <li className="py-6 px-12">
        <IconTitle title="education" Icon={FaReact} />
        <ResumeItem
          year="2016 - 2018"
          subHeader="team leader"
          place="facebook inc."
          desc="Stanford University Private university in Stanford, California"
          border
        />

        <ResumeItem
          year="2016 - 2018"
          subHeader="team leader"
          place="facebook inc."
          desc="Coursework - Git, WordPress, Javascript, iOS, Android."
          border
        />

        <ResumeItem
          year="2016 - 2018"
          subHeader="team leader"
          place="facebook inc."
          desc="Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript"
        />
      </li>
    </ul>
  )
}
