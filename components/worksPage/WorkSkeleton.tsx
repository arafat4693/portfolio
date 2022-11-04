import SkeletonWrapper from "../SkeletonWrapper"
import Skeleton from "react-loading-skeleton"

export default function WorkSkeleton({ margin }: { margin?: boolean }) {
  return (
    <SkeletonWrapper>
      <div className={margin ? "mb-12" : "mb-2"}>
        <Skeleton height={200} />
        <div className="text-center">
          <Skeleton
            width={110}
            style={{ margin: "1.2rem 0 0.7rem 0" } as React.CSSProperties}
          />
          <Skeleton width={70} />
        </div>
      </div>
    </SkeletonWrapper>
  )
}
