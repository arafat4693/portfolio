import BackEndSkeleton from "./BackEndSkeleton"

export default function BackEnd() {
  return (
    <div className="pt-11 pb-4 grid grid-cols-2 gap-y-16 gap-x-10">
      <div className="text-center">
        <div
          className="radial-progress text-main-orange text-2xl"
          style={{ "--value": 90, "--size": "9rem" } as React.CSSProperties}
        >
          <span className="text-gray-300">90%</span>
        </div>
        <p className="text-2xl text-gray-300 mt-2.5">WordPress</p>
      </div>
      {/* <BackEndSkeleton /> */}

      <div className="text-center">
        <div
          className="radial-progress text-main-orange text-2xl"
          style={{ "--value": 75, "--size": "9rem" } as React.CSSProperties}
        >
          <span className="text-gray-300">75%</span>
        </div>
        <p className="text-2xl text-gray-300 mt-2.5">PHP / MYSQL</p>
      </div>
      {/* <BackEndSkeleton /> */}

      <div className="text-center">
        <div
          className="radial-progress text-main-orange text-2xl"
          style={{ "--value": 85, "--size": "9rem" } as React.CSSProperties}
        >
          <span className="text-gray-300">85%</span>
        </div>
        <p className="text-2xl text-gray-300 mt-2.5">Angular / JavaScript</p>
      </div>
      {/* <BackEndSkeleton /> */}

      <div className="text-center">
        <div
          className="radial-progress text-main-orange text-2xl"
          style={{ "--value": 95, "--size": "9rem" } as React.CSSProperties}
        >
          <span className="text-gray-300">95%</span>
        </div>
        <p className="text-2xl text-gray-300 mt-2.5">HTML / CSS</p>
      </div>
      {/* <BackEndSkeleton /> */}
    </div>
  )
}
