import Link from "next/link"

interface Props {
  name: string
  border?: boolean
  Icon: any
}

export default function ProfileLink({ name, Icon, border }: Props) {
  return (
    <span
      className={`w-1/2 ${
        border ? "vCustomLine relative" : ""
      } h-full flex justify-center items-center gap-4 text-xl text-gray-300 font-semibold uppercase cursor-pointer group`}
    >
      <Link href="/">
        <span className="group-hover:mx-2 group-hover:text-main-orange transition-all duration-300">
          {name}
        </span>
      </Link>
      <Icon className="text-3xl group-hover:text-main-orange transition-all duration-300" />
    </span>
  )
}
