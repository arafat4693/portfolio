import Title from "../Title"

export default function Stats() {
  return (
    <section>
      <Title name="statistics" />
      <ul className="grid grid-cols-3 gap-5 px-12 py-8">
        <li className="rounded-xl bg-gray-800 py-4 px-8">
          <h3 className="text-3xl mb-2.5 tracking-wider font-medium capitalize text-white">
            age
          </h3>
          <p className="text-[1.6rem] text-gray-400">19</p>
        </li>
      </ul>
    </section>
  )
}
