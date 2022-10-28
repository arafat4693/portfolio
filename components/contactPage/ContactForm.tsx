import { AiOutlineSwapRight } from "react-icons/ai"

export default function ContactForm() {
  return (
    <form className="p-12">
      <div className="grid grid-cols-2 mb-8 gap-8">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800"
        />

        <input
          type="text"
          placeholder="Email Address"
          className="w-full bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800"
        />
      </div>

      <textarea
        placeholder="Your Message"
        className="w-full resize-y h-60 bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800"
      ></textarea>

      <div className="w-[22rem] h-20 bg-[#0e1422d9] flex justify-center items-center gap-3 text-gray-300 group mt-6 rounded-lg cursor-pointer">
        <button
          type="submit"
          className="uppercase text-2xl font-semibold group-hover:mx-2 group-hover:text-main-orange transition-all duration-300"
        >
          send message
        </button>

        <AiOutlineSwapRight className="text-4xl group-hover:text-main-orange transition-all duration-300" />
      </div>
    </form>
  )
}
