import { FieldValueData } from "../../types"
import BackEndSkeleton from "./BackEndSkeleton"

interface Props {
  backend: FieldValueData[] | undefined
}

export default function BackEnd({ backend }: Props) {
  return (
    <div className="pt-11 pb-4 grid grid-cols-2 gap-y-16 gap-x-10">
      {backend ? (
        backend.map((b) => (
          <div key={b.id} className="text-center">
            <div
              className="radial-progress text-main-orange text-2xl"
              style={
                { "--value": +b.value, "--size": "9rem" } as React.CSSProperties
              }
            >
              <span className="text-gray-300">{b.value}%</span>
            </div>
            <p className="text-2xl text-gray-300 mt-2.5">{b.field}</p>
          </div>
        ))
      ) : (
        <>
          <BackEndSkeleton />
          <BackEndSkeleton />
          <BackEndSkeleton />
          <BackEndSkeleton />
        </>
      )}
    </div>
  )
}
