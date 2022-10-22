export default function Development() {
  return (
    <div className="pt-11">
      <div className="mb-7">
        <h3 className="capitalize text-2xl text-gray-300">next js</h3>
        <progress
          className="progress progress-warning w-full bg-gray-800 mt-2.5"
          value="90"
          max="100"
        ></progress>
      </div>

      <div className="mb-7">
        <h3 className="capitalize text-2xl text-gray-300">hygraph</h3>
        <progress
          className="progress progress-warning w-full bg-gray-800 mt-2.5"
          value="75"
          max="100"
        ></progress>
      </div>

      <div className="mb-7">
        <h3 className="capitalize text-2xl text-gray-300">firebase</h3>
        <progress
          className="progress progress-warning w-full bg-gray-800 mt-2.5"
          value="85"
          max="100"
        ></progress>
      </div>

      <div>
        <h3 className="capitalize text-2xl text-gray-300">tailwind</h3>
        <progress
          className="progress progress-warning w-full bg-gray-800 mt-2.5"
          value="95"
          max="100"
        ></progress>
      </div>
    </div>
  )
}
