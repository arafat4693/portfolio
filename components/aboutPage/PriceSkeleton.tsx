import SkeletonWrapper from "../SkeletonWrapper"
import Skeleton from "react-loading-skeleton"

export default function PriceSkeleton() {
  return (
    <SkeletonWrapper>
      <div className="py-10 px-12 flex flex-col items-center">
        <Skeleton circle={true} width={65} height={65} />
        <Skeleton
          width={70}
          style={{ "margin-top": "1rem" } as React.CSSProperties}
        />
        <Skeleton
          width={100}
          height={50}
          style={{ margin: "1.7rem 0 1rem 0" } as React.CSSProperties}
        />
        <Skeleton
          width={200}
          style={{ "margin-top": "1rem" } as React.CSSProperties}
        />
        <Skeleton
          width={150}
          style={{ "margin-top": "1rem" } as React.CSSProperties}
        />
        <Skeleton
          width={100}
          style={{ "margin-top": "1rem" } as React.CSSProperties}
        />
        <Skeleton
          width={130}
          style={{ "margin-top": "1rem" } as React.CSSProperties}
        />
        <Skeleton
          width={150}
          style={{ "margin-top": "1rem" } as React.CSSProperties}
        />
        <div className="w-full h-[0.1rem] lineLeft mt-9 mb-6"></div>
        <Skeleton width={120} height={26} />
      </div>
    </SkeletonWrapper>
  )
}
