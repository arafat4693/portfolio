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
        noBorder ? "" : "relative customLine before:bottom-0 borderRight"
      } h-[7.2rem] bg-gray-900 group gap-2 flex flex-col items-center justify-center cursor-pointer`}
    >
      <Icon className="text-[2rem] text-gray-300 transition-all duration-300 group-hover:text-main-orange" />
      <p className="uppercase text-base font-medium text-gray-300 transition-all duration-300 group-hover:text-main-orange">
        {label}
      </p>
    </div>
  )
}
