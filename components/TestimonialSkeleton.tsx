import SkeletonWrapper from "./SkeletonWrapper"
import Skeleton from "react-loading-skeleton"

export default function TestimonialSkeleton() {
  return (
    <SkeletonWrapper>
      <div className="px-12 py-10 flex flex-col items-center">
        <Skeleton width={600} />
        <Skeleton
          width={450}
          style={{ "margin-top": "0.8rem" } as React.CSSProperties}
        />

        <Skeleton
          width={100}
          height={100}
          circle={true}
          style={{ "margin-top": "1.7rem" } as React.CSSProperties}
        />
        <Skeleton
          width={90}
          style={{ "margin-top": "1rem" } as React.CSSProperties}
        />
        <Skeleton
          width={70}
          style={{ margin: ".5rem 0 1.7rem 0" } as React.CSSProperties}
        />
      </div>
    </SkeletonWrapper>
  )
}
