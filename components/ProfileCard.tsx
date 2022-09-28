import Slide from "./Slide"

export default function ProfileCard() {
  return (
    <div className="profile h-full w-[48rem] bg-gray-900 rounded-lg relative">
      <Slide />

      <div className="">
        <div className="relative z-20 w-56 h-56 mx-auto -mt-36 rounded-full profilePic">
          <img
            src="/images/pic4.png"
            alt="userPic"
            className="w-full h-full block p-0 z-20 relative object-cover rounded-full border-[3px] border-[#0f0f0f] border-solid"
          />
        </div>
      </div>
    </div>
  )
}
