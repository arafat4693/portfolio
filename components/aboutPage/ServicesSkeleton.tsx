import ServiceSkeleton from "./ServiceSkeleton"

export default function ServicesSkeleton() {
  return (
    <div>
      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine">
          <ServiceSkeleton border />
          <ServiceSkeleton />
        </li>
        <li>
          <ServiceSkeleton border />
          <ServiceSkeleton />
        </li>
      </ul>
    </div>
  )
}
