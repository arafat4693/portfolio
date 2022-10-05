interface Props {
  Icon: any
}

export default function MyIcon({ Icon }: Props) {
  return (
    <div className="icon min-h-[6rem] w-24 h-24 rounded-full border-2 border-main-orange border-solid flex items-center justify-center">
      <Icon className="text-5xl text-main-orange" />
    </div>
  )
}
