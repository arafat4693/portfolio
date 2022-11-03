import Skeleton from "react-loading-skeleton"
import SkeletonWrapper from "../SkeletonWrapper"

export default function ServiceSkeleton({ border }: { border?: boolean }) {
  return (
    <SkeletonWrapper>
      <div
        className={
          border ? "customLine before:bottom-0 relative borderLeft" : ""
        }
      >
        <div className="px-12 py-10">
          <Skeleton circle={true} width={65} height={65} />
          <Skeleton
            width={100}
            style={{ margin: "1.5rem 0 1rem 0" } as React.CSSProperties}
          />
          <Skeleton
            count={2.5}
            style={{ "margin-top": "1rem" } as React.CSSProperties}
          />
        </div>
      </div>
    </SkeletonWrapper>
  )
}
