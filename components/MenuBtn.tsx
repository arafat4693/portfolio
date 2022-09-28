import { FaRegUser } from "react-icons/fa"

interface Props {
  label: string
  Icon: any
  noBorder?: boolean
}

export default function MenuBtn({ label, Icon, noBorder }: Props) {
  return (
    <div
      className={`${
        noBorder ? "" : "menuBtn"
      } h-[7.2rem] bg-gray-900 gap-2 flex flex-col items-center justify-center cursor-pointer text-gray-100 transition-all duration-300 hover:text-main-orange relative`}
    >
      <Icon className="text-[2rem]" />
      <p className="uppercase text-base font-medium">{label}</p>
    </div>
  )
}
