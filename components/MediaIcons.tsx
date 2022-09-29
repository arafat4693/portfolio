import { socialMedia } from "../data"

export default function MediaIcons() {
  return (
    <div className="flex gap-5 items-center justify-center mt-7">
      {socialMedia.map(({ id, Icon }) => (
        <Icon
          key={id}
          className="text-gray-300 text-3xl transition-all duration-300 hover:text-main-orange cursor-pointer"
        />
      ))}
    </div>
  )
}
