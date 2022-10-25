import Image from "next/image"
import { AiFillCloseCircle } from "react-icons/ai"
import { HiOutlineViewGridAdd } from "react-icons/hi"
import MyInfo from "../MyInfo"

export default function WorkLb() {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-gray-900/70 z-50 flex justify-center">
      <main className="h-full w-[70rem] bg-gray-800">
        <div className="w-full max-h-full h-full overflow-y-scroll myScroll">
          <div className="w-full relative h-[45rem]">
            <AiFillCloseCircle className="absolute top-6 right-8 text-5xl text-white cursor-pointer z-10" />
            <Image
              src="/images/g-9.jpg"
              alt="project description"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <article className="py-14 px-14">
            <h1 className="capitalize text-4xl text-gray-300 font-semibold tracking-wide mb-4 flex items-center justify-between">
              weather mobile app
              <a
                href="/"
                className="text-[1.4rem] flex items-center gap-2 rounded-full py-1.5 px-6 tracking-wide font-semibold capitalize hover:bg-sky-600 transition-all duration-300 text-white bg-sky-500"
              >
                view
                <HiOutlineViewGridAdd className="text-3xl" />
              </a>
            </h1>
            <p className="text-gray-400 text-xl tracking-wide capitalize">
              project
            </p>

            <ul className="grid grid-cols-2 mt-10 gap-y-2">
              <MyInfo field="created by" value="Ryand Adlard" />
              <MyInfo field="date" value="07/08/2018" />
              <MyInfo field="client" value="Joe Patrick" />
              <MyInfo field="categories" value="Project" />
            </ul>

            <h3 className="text-red-400 text-2xl mt-10 tracking-wide">
              <span className="font-semibold">Note: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              itaque pariatur officia quos.
            </h3>

            <p className="text-2xl text-gray-400 mt-10 mb-8 leading-relaxed tracking-wide">
              So striking at of to welcomed resolved. Northward by described up
              household therefore attention. Excellence decisively nay man yet
              impression for contrasted remarkably.
            </p>

            <div className="grid grid-cols-3 mb-10 gap-2 text-gray-300 text-[1.4rem] tech-func">
              <div>
                <h1 className="text-gray-200 font-semibold text-2xl capitalize mb-4">
                  tech-stack
                </h1>
                <ul className="flex flex-col gap-y-2">
                  <li className="flex gap-2">React</li>
                  <li className="flex gap-2">Next js</li>
                  <li className="flex gap-2">Node js</li>
                  <li className="flex gap-2">Express</li>
                  <li className="flex gap-2">Mongodb</li>
                  <li className="flex gap-2">Tailwind</li>
                </ul>
              </div>

              <div className="col-span-2">
                <h1 className="text-gray-200 font-semibold text-2xl capitalize mb-4">
                  user-actions
                </h1>
                <ul className="flex flex-col gap-y-2">
                  <li className="flex gap-2">
                    User can see a list of photos in the masonry layout
                  </li>
                  <li className="flex gap-2">
                    User can add a new photo to the list - the new photo is
                    always on top of the list
                  </li>
                  <li className="flex gap-2">
                    User can search for photos by label
                  </li>
                  <li className="flex gap-2">
                    When user hover a photo, user can see a label and a delete
                    button
                  </li>
                  <li className="flex gap-2">User can delete images</li>
                </ul>
              </div>
            </div>

            <div className="w-full relative h-[52rem] mb-8">
              <Image
                src="/images/g-7.jpg"
                alt="project description"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="w-full relative h-[52rem]">
              <Image
                src="/images/p-2.jpg"
                alt="project description"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <p className="text-2xl text-gray-400 mt-14 leading-relaxed tracking-wide">
              So striking at of to welcomed resolved. Northward by described up
              household therefore attention. Excellence decisively nay man yet
              impression for contrasted remarkably.
            </p>
          </article>
        </div>
      </main>
    </section>
  )
}
