import Testimonial from "../Testimonial"
import TestimonialSkeleton from "../TestimonialSkeleton"
import Title from "../Title"
import MyResume from "./MyResume"
import Skills from "./Skills"
import { quoteData } from "../../data"

export default function Resume() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="resume" />
      <MyResume />

      <Title name="skills" />
      <Skills />

      <Title name="quote" />
      <Testimonial testimonial={quoteData} />
    </div>
  )
}
