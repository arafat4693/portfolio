import { useMutation } from "@apollo/client"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { AiOutlineSwapRight } from "react-icons/ai"
import guestBookOperations from "../../graphqlOperations/guestBook"

interface Inputs {
  name: string
  comment: string
}

interface CreateComment {
  createGuestBook: {
    id: string
    name: string
    comment: string
    createdAt: string
  }
}

export default function GuestForm() {
  const { register, handleSubmit, reset } = useForm<Inputs>()

  const [createComment, { loading }] = useMutation<CreateComment, Inputs>(
    guestBookOperations.Mutations.createComment,
    {
      onCompleted() {
        toast.success(`Thanks for your comment`, {
          duration: 5000,
        })
        reset({ name: "", comment: "" })
      },
      onError() {
        toast.error("Server error. Try again later")
      },
    }
  )

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    createComment({ variables: data })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("comment", { required: true })}
        placeholder="Comment"
        className="h-32 mb-4 formStyle"
      ></textarea>
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="Name"
        className="h-20 formStyle"
      />
      <fieldset className="flex items-center gap-4 mt-6 mb-8">
        <input id="reminder" type="checkbox" />
        <label htmlFor="reminder" className="text-xl font-medium text-gray-600">
          Save my name for the next time I comment.
        </label>
      </fieldset>
      <fieldset className="w-[22rem] h-20 bg-[#0e1422d9] flex justify-center items-center gap-3 text-gray-300 group mt-6 rounded-lg cursor-pointer">
        <button
          type="submit"
          className={`${
            loading ? "pointer-events-none" : "group-hover:text-main-orange"
          } uppercase text-2xl font-semibold group-hover:mx-2 transition-all duration-300`}
        >
          {loading ? "submitting..." : "submit"}
        </button>

        <AiOutlineSwapRight
          className={`text-4xl group-hover:text-main-orange transition-all duration-300 ${
            loading ? "hidden" : "block"
          }`}
        />
      </fieldset>
    </form>
  )
}
