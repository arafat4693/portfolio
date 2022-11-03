import SkeletonWrapper from "../SkeletonWrapper"
import Skeleton from "react-loading-skeleton"

export default function LanguageSkeleton({ noMb }: { noMb?: boolean }) {
  return (
    <SkeletonWrapper>
      <div className={noMb ? "" : "mb-6"}>
        <Skeleton width={70} />
        <div className="flex justify-between items-center mt-2">
          <Skeleton circle={true} height={15} width={15} />
          <Skeleton circle={true} height={15} width={15} />
          <Skeleton circle={true} height={15} width={15} />
          <Skeleton circle={true} height={15} width={15} />
          <Skeleton circle={true} height={15} width={15} />
          <Skeleton circle={true} height={15} width={15} />
          <Skeleton circle={true} height={15} width={15} />
          <Skeleton circle={true} height={15} width={15} />
          <Skeleton circle={true} height={15} width={15} />
          <Skeleton circle={true} height={15} width={15} />
        </div>
      </div>
    </SkeletonWrapper>
  )
}
