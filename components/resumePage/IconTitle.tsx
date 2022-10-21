import MyIcon from "../MyIcon"
import { IconType } from "react-icons"

interface Props {
  title: string
  Icon: IconType
}

export default function IconTitle({ title, Icon }: Props) {
  return (
    <div className="flex items-center gap-4 customLine before:bottom-0 relative borderLeft pb-4">
      <MyIcon Icon={Icon} size="w-20 h-20" />
      <h2 className="text-gray-300 text-2xl font-medium uppercase">{title}</h2>
    </div>
  )
}
