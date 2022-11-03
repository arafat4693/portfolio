import SkeletonWrapper from "../SkeletonWrapper"
import Skeleton from "react-loading-skeleton"

export default function FrontEndSkeleton() {
  return (
    <SkeletonWrapper>
      <div className="mb-7">
        <Skeleton width={70} />
        <Skeleton
          style={{ "margin-top": "0.625rem" } as React.CSSProperties}
          height={7}
        />
      </div>
    </SkeletonWrapper>
  )
}
