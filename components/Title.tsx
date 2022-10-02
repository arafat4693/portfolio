interface Props {
  name: string
}

export default function Title({ name }: Props) {
  return (
    <div className="customLine relative before:bottom-0 borderLeft capitalize text-3xl text-gray-300 font-medium z-20">
      <span className="inline-block my-10 mx-12 customCircle relative tracking-wide">
        {name}
      </span>
    </div>
  )
}
