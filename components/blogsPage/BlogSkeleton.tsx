import React from "react"
import Skeleton from "react-loading-skeleton"
import SkeletonWrapper from "../SkeletonWrapper"

export default function BlogSkeleton() {
  return (
    <SkeletonWrapper>
      <li className="pt-10 px-12">
        <Skeleton height={200} />
        <div className="text-center">
          <Skeleton
            width={112}
            height={16}
            style={{ marginTop: "1rem" } as React.CSSProperties}
          />
          <Skeleton
            width={150}
            style={{ margin: "1rem 0" } as React.CSSProperties}
          />
          <Skeleton />
          <Skeleton width="90%" />
          <Skeleton width="80%" />
          <Skeleton width="70%" />
          <Skeleton width="40%" />
        </div>
      </li>
    </SkeletonWrapper>
  )
}
