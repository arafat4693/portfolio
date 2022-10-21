import Testimonial from "../Testimonial"
import Title from "../Title"
import MyResume from "./MyResume"

export default function Resume() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll about">
      <Title name="resume" />
      <MyResume />

      <Title name="quote" />
      <Testimonial />
    </div>
  )
}
