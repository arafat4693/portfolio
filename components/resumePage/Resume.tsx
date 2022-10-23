import Testimonial from "../Testimonial"
import Title from "../Title"
import MyResume from "./MyResume"
import Skills from "./Skills"

export default function Resume() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="resume" />
      <MyResume />

      <Title name="skills" />
      <Skills />

      <Title name="quote" />
      <Testimonial />
    </div>
  )
}
