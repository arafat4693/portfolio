import { AiOutlineSwapRight } from "react-icons/ai"
import Title from "../Title"
import GuestComments from "./GuestComments"
import GuestForm from "./GuestForm"

const loading = false

export default function GuestBook() {
  return (
    <section
      className="lg:h-full h-[95rem] overflow-y-scroll myScroll"
      id="guestComments"
    >
      <Title name="guest book" />
      <section className="px-12 py-8">
        <GuestForm />
        <GuestComments />
      </section>
    </section>
  )
}
