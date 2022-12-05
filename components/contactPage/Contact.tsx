import Title from "../Title"
import ContactForm from "./ContactForm"
import Location from "./Location"

export default function Contact() {
  return (
    <>
      <Title name="get in touch" />
      <Location />

      <Title name="contact form" />
      <ContactForm />
    </>
  )
}
