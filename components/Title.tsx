interface Props {
  name: string
  menus?: string[]
}

export default function Title({ name, menus }: Props) {
  return (
    <div className="customLine relative before:bottom-0 borderLeft z-20 py-10 flex justify-between items-center">
      <span className="ml-12 customCircle relative tracking-wide capitalize text-3xl text-gray-300 font-medium">
        {name}
      </span>

      {menus && (
        <ul className="flex items-center gap-6 mr-12">
          {menus.map((menu, idx) => (
            <li
              key={idx}
              className={`capitalize text-[1.4rem] cursor-pointer tracking-wide ${
                idx === 0 ? "text-main-orange" : "text-gray-300"
              }`}
            >
              {menu}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
