import { useState } from "react"
import MenuBtn from "./MenuBtn"
import { BsCartFill } from "react-icons/bs"
import { menus } from "../data"
import SideMenuLb from "./SideMenuLb"
import { useReactiveVar } from "@apollo/client"
import { currentMenu } from "../apollo-client"

export default function Menus() {
  const [sideMenu, setSideMenu] = useState<boolean>(false)
  const menuId = useReactiveVar(currentMenu)

  return (
    <header className="w-[7.2rem] py-6 h-full mr-4 flex flex-col justify-between">
      {/* humburbar menu */}
      <div
        onClick={() => setSideMenu(true)}
        className="h-[7.2rem] rounded-lg bg-gray-900 flex items-center justify-center"
      >
        <div className="w-11 cursor-pointer group">
          <div className="w-9/12 h-[0.24rem] bg-gray-300 transition-width duration-300 group-hover:w-full group-hover:bg-main-orange"></div>
          <div className="w-full h-1 bg-gray-300 my-2 group-hover:bg-main-orange"></div>
          <div className="w-9/12 h-[0.24rem] bg-gray-300 transition-width duration-300 group-hover:w-full group-hover:bg-main-orange"></div>
        </div>
      </div>

      <SideMenuLb sideMenu={sideMenu} setSideMenu={setSideMenu} />

      {/* cart btn */}
      <div className="h-[7.2rem] rounded-lg bg-gray-900 flex items-center justify-center">
        <div className="relative cursor-pointer">
          <BsCartFill className="text-4xl text-gray-300" />
          <span className="absolute -top-2 -right-3 w-6 h-6 flex items-center justify-center rounded-full text-lg text-gray-800 bg-main-orange">
            0
          </span>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden">
        {menus.map((m, i) => (
          <MenuBtn
            key={m.id}
            menu={m}
            noBorder={i + 1 === menus.length}
            active={menuId}
            reactiveVar={currentMenu}
          />
        ))}
      </div>
    </header>
  )
}
