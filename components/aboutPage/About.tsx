import AboutMe from "./AboutMe"
import BrandLogos from "./BrandLogos"
import Facts from "./Facts"
import MyServices from "./MyServices"
import Prices from "./Prices"
import Testimonials from "./Testimonials"
import Title from "../Title"
import AboutMeSkeleton from "./AboutMeSkeleton"
import { useQuery, gql } from "@apollo/client"

export default function About() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="about me" />
      <AboutMe />
      {/* <AboutMeSkeleton /> */}

      <Title name="my services" />
      <MyServices />

      <Title name="pricing" />
      <Prices />

      <Title name="clients" />
      <BrandLogos />

      <Title name="testimonials" />
      <Testimonials />

      <Title name="fun facts" />
      <Facts />
    </div>
  )
}
