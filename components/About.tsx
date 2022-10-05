import AboutMe from "./AboutMe"
import BrandLogos from "./BrandLogos"
import MyServices from "./MyServices"
import Prices from "./Prices"
import Title from "./Title"

export default function About() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll about">
      <Title name="about me" />
      <AboutMe />
      <Title name="my services" />
      <MyServices />
      <Title name="pricing" />
      <Prices />
      <Title name="clients" />
      <BrandLogos />
      <Title name="testimonials" />
    </div>
  )
}
