import Link from "next/link"
import { BsFillCloudArrowDownFill } from "react-icons/bs"
import { IoIosSend } from "react-icons/io"
import MediaIcons from "./MediaIcons"
import ProfileLink from "./ProfileLink"
import Slide from "./Slide"
import Typing from "./Typing"

export default function ProfileCard() {
  return (
    <div className="profile h-full w-[48rem] bg-gray-900 rounded-lg relative">
      <Slide />

      <div className="relative z-20 w-56 h-56 mx-auto -mt-36 rounded-full profilePic">
        <img
          src="/images/pic4.png"
          alt="userPic"
          className="w-full h-full block p-0 z-20 relative object-cover rounded-full border-4 border-[#1c1b1b] border-solid"
        />
      </div>

      <h1 className="text-center text-gray-300 text-[3.4rem] font-medium mt-4 mb-0.5">
        Sunny Islam
      </h1>

      <Typing />
      <MediaIcons />

      <div className="flex absolute bottom-0 left-0 w-full h-28 borderLeft customLine">
        <ProfileLink
          name="download cv"
          Icon={BsFillCloudArrowDownFill}
          border
        />
        <ProfileLink name="contact me" Icon={IoIosSend} />
      </div>
    </div>
  )
}
