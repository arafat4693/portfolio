import Title from "../Title"
import ContactForm from "./ContactForm"
import Location from "./Location"
import LocationSkeleton from "./LocationSkeleton"

export default function Contact() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="get in touch" />
      <Location />

      <Title name="contact form" />
      <ContactForm />
    </div>
  )
}
