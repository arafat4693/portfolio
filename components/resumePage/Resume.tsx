import Testimonial from "../Testimonial"
import Title from "../Title"
import MyResume from "./MyResume"
import Skills from "./Skills"
import { quoteData } from "../../data"

export default function Resume() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="resume" />
      <MyResume />

      <Title name="skills" />
      <Skills />

      <Title name="quote" />
      <Testimonial testimonial={quoteData} />
    </section>
  )
}
