import { useQuery } from "@apollo/client"
import Image from "next/image"
import {
  Dispatch,
  SetStateAction,
  MouseEvent,
  useState,
  useEffect,
} from "react"
import { IoMdClose } from "react-icons/io"
import { menus, socialMedia } from "../data"
import SideMenuBtn from "./SideMenuBtn"
import profileOperations from "../graphqlOperations/profile"
import { partOfProfile } from "../types"

interface Props {
  sideMenu: boolean
  setSideMenu: Dispatch<SetStateAction<boolean>>
}

interface ProfileQuery {
  profiles: partOfProfile[]
}

export default function SideMenuLb({ sideMenu, setSideMenu }: Props) {
  const { data } = useQuery<ProfileQuery>(
    profileOperations.Queries.getNameImage
  )
  const [profile, setProfile] = useState<partOfProfile | undefined>(undefined)

  useEffect(() => {
    if (data === undefined) return
    setProfile(data.profiles[0])
  }, [data])

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
      <main className="max-h-screen h-screen noScroll overflow-y-scroll w-[32rem] bg-[rgb(27,36,48)] flex flex-col relative">
        <button
          onClick={() => setSideMenu(false)}
          className="transition-all duration-200 hover:text-main-orange absolute left-0 top-0 w-full h-24 bg-[rgb(43,57,74)] text-gray-300 text-5xl flex justify-center items-center"
        >
          <IoMdClose />
        </button>
        <div className="top pb-12 pt-36 flex flex-col items-center">
          {profile && (
            <div>
              <Image
                src={profile.ownersPhoto.url}
                alt="userPic"
                objectFit="cover"
                width="125"
                height="125"
                className="rounded-full"
              />
              <h3 className="text-[1.65rem] text-gray-300 tracking-wide font-medium capitalize text-center mt-6 mb-4">
                {profile.name}
              </h3>
            </div>
          )}

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

          <p className="text-center text-gray-500 text-xl mt-28 mb-10">
            sunny's portfolio © 2022.
          </p>
        </div>
      </main>
    </section>
  )
}
