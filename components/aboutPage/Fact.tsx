import MyIcon from "../MyIcon"

interface Props {
  Icon: any
  desc: string
  border?: boolean
}

export default function Fact({ Icon, desc, border }: Props) {
  return (
    <div
      className={`h-60 w-full flex flex-col items-center py-10 px-12 ${
        border && "relative vCustomLine"
      }`}
    >
      <MyIcon Icon={Icon} />
      <p className="text-2xl text-gray-300 leading-relaxed tracking-wide text-center mt-4">
        {desc}
      </p>
    </div>
  )
}
