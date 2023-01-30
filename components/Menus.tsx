import { useState } from "react"
import MenuBtn from "./MenuBtn"
import { BsCartFill } from "react-icons/bs"
import { menus } from "../data"
import SideMenuLb from "./SideMenuLb"
import { ReactiveVar, useReactiveVar } from "@apollo/client"
import { currentMenu } from "../apollo-client"

interface Props {
  showSideMenu: ReactiveVar<boolean>
}

export default function Menus({ showSideMenu }: Props) {
  const menuId = useReactiveVar(currentMenu)

  return (
    <header className="xl:w-[7.2rem] lg:w-[7rem] py-6 h-full mr-4 hidden lg:flex flex-col justify-between">
      {/* humburbar menu */}
      <div
        onClick={() => showSideMenu(true)}
        className="h-[7.2rem] group rounded-lg bg-gray-900 flex items-center justify-center cursor-pointer"
      >
        <div className="w-11">
          <div className="w-9/12 h-[0.24rem] bg-gray-300 transition-width duration-300 group-hover:w-full group-hover:bg-main-orange"></div>
          <div className="w-full h-1 my-2 bg-gray-300 group-hover:bg-main-orange"></div>
          <div className="w-9/12 h-[0.24rem] bg-gray-300 transition-width duration-300 group-hover:w-full group-hover:bg-main-orange"></div>
        </div>
      </div>

      {/* guest book btn */}
      <div
        onClick={() => currentMenu(7)}
        className="h-[7.2rem] rounded-lg bg-gray-900 flex items-center justify-center cursor-pointer"
      >
        <div className="relative">
          <BsCartFill className="text-4xl text-gray-300" />
          <span className="absolute flex items-center justify-center w-6 h-6 text-lg text-gray-800 rounded-full -top-2 -right-3 bg-main-orange">
            0
          </span>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        {menus.slice(0, 6).map((m, i) => (
          <MenuBtn
            key={m.id}
            menu={m}
            noBorder={i + 1 === menus.length}
            active={menuId === m.id}
            reactiveVar={currentMenu}
          />
        ))}
      </div>
    </header>
  )
}
