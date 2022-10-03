import MyInfo from "./MyInfo"

export default function AboutMe() {
  return (
    <div className="px-12 py-10">
      <h3 className="leading-[1.8] text-2xl font-normal text-gray-500">
        <p className="font-semibold text-[1.6rem]">
          Hello! I’m Donald Wellborn.
        </p>
        Back-end & Frond-end developer from UK, London. I have rich experience
        in wordpress, also I am good at Magento. I love to talk with you about
        our unique.
      </h3>

      <ul className="location grid grid-cols-2 mt-6 gap-y-2">
        <MyInfo field="age" value="20" />
        <MyInfo field="residence" value="Sweden" />
        <MyInfo field="freelance" value="Available" />
        <MyInfo field="address" value="Stockholm, Sweden" />
      </ul>
    </div>
  )
}
