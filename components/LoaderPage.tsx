import Loader from "./Loader"

export default function LoaderPage() {
  return (
    <section
      className={`lb fixed top-0 left-0 w-screen h-screen bg-gray-900 z-50 flex justify-center  items-center transition-all duration-200`}
    >
      <Loader />
    </section>
  )
}
