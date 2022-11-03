import SkeletonWrapper from "../SkeletonWrapper"
import Skeleton from "react-loading-skeleton"

export default function ClientSkeleton({ border }: { border?: boolean }) {
  return (
    <SkeletonWrapper>
      <div className={`py-16 px-12 ${border && "relative vCustomLine"}`}>
        <Skeleton height={30} />
      </div>
    </SkeletonWrapper>
  )
}
