import { BsCheckLg } from "react-icons/bs"
import { FieldValueData } from "../../types"
import KnowledgeSkeleton from "./KnowledgeSkeleton"

interface Props {
  knowledge: string[] | undefined
}

export default function Knowledge({ knowledge }: Props) {
  return (
    <div className="py-11">
      {knowledge ? (
        knowledge.map((k, idx) => (
          <div key={idx} className="flex gap-6 items-center mb-6">
            <BsCheckLg className="text-main-orange text-2xl" />
            <span className="text-gray-300 text-2xl">{k}</span>
          </div>
        ))
      ) : (
        <>
          <KnowledgeSkeleton />
          <KnowledgeSkeleton />
          <KnowledgeSkeleton />
          <KnowledgeSkeleton />
          <KnowledgeSkeleton />
          <KnowledgeSkeleton />
          <KnowledgeSkeleton />
          <KnowledgeSkeleton />
        </>
      )}
    </div>
  )
}
