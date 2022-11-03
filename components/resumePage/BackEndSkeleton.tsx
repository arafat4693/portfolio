import SkeletonWrapper from "../SkeletonWrapper"
import Skeleton from "react-loading-skeleton"

export default function BackEndSkeleton() {
  return (
    <SkeletonWrapper>
      <div className="text-center">
        <Skeleton circle={true} width={90} height={90} />
        <Skeleton
          width={60}
          style={{ "margin-top": "1rem" } as React.CSSProperties}
        />
      </div>
    </SkeletonWrapper>
  )
}
