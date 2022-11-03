import { SkeletonTheme } from "react-loading-skeleton"

export default function SkeletonWrapper({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
      {children}
    </SkeletonTheme>
  )
}
