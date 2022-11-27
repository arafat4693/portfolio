import { FieldValueData } from "../../types"
import LanguageSkeleton from "./LanguageSkeleton"

interface Props {
  languages: FieldValueData[] | undefined
}

export default function Languages({ languages }: Props) {
  return (
    <div className="pt-10">
      {languages ? (
        languages.map((l) => (
          <div key={l.id} className="mb-6">
            <h3 className="capitalize text-2xl text-gray-300 mb-2.5">
              {l.field}
            </h3>
            <div className="level flex justify-between items-center">
              {new Array(10).fill(0).map((_, idx) => (
                <span
                  key={idx}
                  className={`w-6 h-6 rounded-full ${
                    idx < +l.value ? "bg-main-orange" : "bg-gray-800"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <>
          <LanguageSkeleton />
          <LanguageSkeleton />
          <LanguageSkeleton />
          <LanguageSkeleton />
        </>
      )}
    </div>
  )
}
