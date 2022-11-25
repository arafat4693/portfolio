import Skeleton from "react-loading-skeleton"
import SkeletonWrapper from "../SkeletonWrapper"

export default function AboutMeSkeleton() {
  return (
    <SkeletonWrapper>
      <div className="p-12">
        <Skeleton width={400} />
        <Skeleton
          count={2}
          style={{ marginTop: "1rem" } as React.CSSProperties}
        />
        <div className="grid grid-cols-2 mt-6 gap-y-2">
          <Skeleton width={270} />
          <Skeleton width={270} />
          <Skeleton width={270} />
          <Skeleton width={270} />
        </div>
      </div>
    </SkeletonWrapper>
  )
}
