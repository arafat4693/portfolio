import { IconType } from "react-icons"
import MyIcon from "../MyIcon"

interface Props {
  name: string
  border?: boolean
  Icon: IconType
}

export default function MyService({ name, Icon, border }: Props) {
  return (
    <div
      className={border ? "customLine before:bottom-0 relative borderLeft" : ""}
    >
      <div className="py-10 px-12">
        <MyIcon Icon={Icon} />

        <h2 className="capitalize text-[1.6rem] text-gray-300 font-semibold pb-2 pt-4">
          {name}
        </h2>
        <p className="text-2xl text-gray-500 leading-[1.8] tracking-wide">
          Modern and mobile-ready website that will help you reach all of your
          marketing.
        </p>
      </div>
    </div>
  )
}