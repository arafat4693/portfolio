import Title from "../Title"
import ContactForm from "./ContactForm"
import Location from "./Location"

export default function Contact() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="get in touch" />
      <Location />

      <Title name="contact form" />
      <ContactForm />
    </section>
  )
}
