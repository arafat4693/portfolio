import SkeletonWrapper from "../SkeletonWrapper"
import Skeleton from "react-loading-skeleton"

export default function KnowledgeSkeleton() {
  return (
    <SkeletonWrapper>
      <div className="flex gap-6 items-center mb-6">
        <Skeleton circle={true} width={18} height={18} />
        <Skeleton width={230} />
      </div>
    </SkeletonWrapper>
  )
}
