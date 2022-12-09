import { useMutation } from "@apollo/client"
import { useForm, SubmitHandler } from "react-hook-form"
import { AiOutlineSwapRight } from "react-icons/ai"
import contactOperations from "../../graphqlOperations/contact"
import toast from "react-hot-toast"

interface Inputs {
  fullName: string
  email: string
  message: string
}

interface ContactMutation {
  createContact: {
    fullName: string
  }
}

const isValidEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const [sendMessage, { loading }] = useMutation<ContactMutation, Inputs>(
    contactOperations.Mutation.sendMessage,
    {
      onCompleted({ createContact }) {
        toast.success(`Thanks for contacting me ${createContact.fullName}`, {
          duration: 5000,
        })
        reset({ fullName: "", email: "", message: "" })
      },
      onError() {
        toast.error("Server error. Try again later")
      },
    }
  )

  function handleEmailValidation(email: string) {
    const isValid = isValidEmail(email)
    if (!isValid) toast.error("Invalid Email")
    return isValid
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    sendMessage({ variables: data })
  }

  return (
    <form className="p-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 gap-8">
        <input
          {...register("fullName", { required: true })}
          type="text"
          placeholder="Full Name"
          className="w-full bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800"
        />

        <input
          {...register("email", {
            required: true,
            validate: handleEmailValidation,
          })}
          type="email"
          placeholder="Email Address"
          className="w-full bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800"
        />
      </div>

      <textarea
        {...register("message", { required: true })}
        placeholder="Your Message"
        className="w-full resize-y h-60 bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800"
      ></textarea>

      <div className="w-[22rem] h-20 bg-[#0e1422d9] flex justify-center items-center gap-3 text-gray-300 group mt-6 rounded-lg cursor-pointer">
        <button
          type="submit"
          className={`${
            loading ? "pointer-events-none" : "group-hover:text-main-orange"
          } uppercase text-2xl font-semibold group-hover:mx-2 transition-all duration-300`}
        >
          {loading ? "sending..." : "send message"}
        </button>

        <AiOutlineSwapRight
          className={`text-4xl group-hover:text-main-orange transition-all duration-300 ${
            loading ? "hidden" : "block"
          }`}
        />
      </div>
    </form>
  )
}
