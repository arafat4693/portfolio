import Image from "next/image"
import { Dispatch, SetStateAction, MouseEvent, CSSProperties } from "react"
import { IoMdClose } from "react-icons/io"
import { menus, socialMedia } from "../data"
import SideMenuBtn from "./SideMenuBtn"

interface Props {
  sideMenu: boolean
  setSideMenu: Dispatch<SetStateAction<boolean>>
}

export default function SideMenuLb({ sideMenu, setSideMenu }: Props) {
  function closeLb(e: MouseEvent): void {
    if ((e.target as Element).classList.contains("lb")) {
      setSideMenu(false)
    }
  }

  return (
    <section
      onClick={closeLb}
      className={`lb fixed top-0 left-0 w-screen h-screen bg-gray-900/70 z-50 transition-all duration-200 ${
        sideMenu ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button
        onClick={() => setSideMenu(false)}
        className="transition-all duration-200 hover:text-main-orange absolute left-[32rem] top-0 w-28 h-28 bg-[rgb(43,57,74)] text-gray-300 rounded-tr-lg rounded-br-lg text-5xl flex justify-center items-center"
      >
        <IoMdClose />
      </button>

      <main className="max-h-screen h-screen myScroll overflow-y-scroll w-[32rem] bg-[rgb(27,36,48)] flex flex-col relative">
        <div className="top py-12 flex flex-col items-center">
          <Image
            src="/images/pic4.png"
            alt="userPic"
            objectFit="cover"
            width="125"
            height="125"
            className="rounded-full"
          />
          <h3 className="text-[1.65rem] text-gray-300 tracking-wide font-medium capitalize text-center mt-6 mb-4">
            sunny islam
          </h3>

          <div className="flex gap-x-5 items-center justify-center">
            {socialMedia.map(({ id, Icon, label }) => (
              <div className="tooltip tooltip-bottom" data-tip={label} key={id}>
                <Icon className="text-gray-400 text-2xl transition-all duration-300 hover:text-main-orange cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        <div className="bottom bg-gray-800 flex-grow">
          <div className="rounded-lg overflow-hidden">
            {menus.map((m, i) => (
              <SideMenuBtn
                key={m.id}
                label={m.label}
                Icon={m.Icon}
                active={i === 0}
                last={i === menus.length - 1}
              />
            ))}
          </div>

          <p className="text-center text-gray-500 text-xl mt-28">
            sunny's portfolio © 2022.
          </p>
        </div>
      </main>
    </section>
  )
}
