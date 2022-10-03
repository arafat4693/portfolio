import AboutMe from "./AboutMe"
import MyServices from "./MyServices"
import Title from "./Title"

export default function About() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full">
      <Title name="about me" />
      <AboutMe />
      <Title name="my services" />
      <MyServices />
    </div>
  )
}
