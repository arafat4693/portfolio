import { IconType } from "react-icons"

interface Props {
  label: string
  Icon: IconType
  active: boolean
  last: boolean
}

export default function SideMenuBtn({ label, Icon, active, last }: Props) {
  return (
    <button
      className={`flex items-center w-full py-8 pl-14 hover:bg-[rgb(27,36,48)] transition-all duration-300 ${
        active ? "text-gray-300" : "text-gray-500"
      } text-2xl gap-6 border-0 ${
        last && "border-b-2"
      } border-t-2 border-[rgb(24,33,44)] border-solid capitalize font-medium`}
    >
      <Icon className="" />
      {label}
    </button>
  )
}
