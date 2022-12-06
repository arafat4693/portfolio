import { MenuData } from "../types"
import { ReactiveVar } from "@apollo/client"

interface Props {
  menu: MenuData
  noBorder?: boolean
  active: boolean
  reactiveVar: ReactiveVar<number>
}

export default function MenuBtn({
  menu,
  noBorder,
  active,
  reactiveVar,
}: Props) {
  return (
    <div
      onClick={() => reactiveVar(menu.id)}
      className={`${
        noBorder ? "" : "relative customLine before:bottom-0 borderRight"
      } h-[7.2rem] bg-gray-900 group gap-2 flex flex-col items-center justify-center cursor-pointer ${
        active ? "text-main-orange" : "text-gray-300"
      }`}
    >
      <menu.Icon className="text-[2rem] transition-all duration-300 group-hover:text-main-orange" />
      <p className="uppercase text-base font-medium transition-all duration-300 group-hover:text-main-orange">
        {menu.label}
      </p>
    </div>
  )
}
