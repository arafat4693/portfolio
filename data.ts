import { FaRegUser, FaRegListAlt, FaEye, FaRegNewspaper } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdComputer } from "react-icons/md"
import { SiNextdotjs, SiNodedotjs, SiFigma, SiFirebase } from "react-icons/si"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai"
import { ClientData, MenuData, ServiceData, TestimonialData } from "./types"
import About from "./components/aboutPage/About"
import Resume from "./components/resumePage/Resume"
import Works from "./components/worksPage/Works"
import Blogs from "./components/blogsPage/Blogs"
import Contact from "./components/contactPage/Contact"

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: "blog",
    Icon: FaRegNewspaper,
    Component: Blogs,
  },
  {
    id: 5,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 6,
    label: "products",
    Icon: MdComputer,
    Component: Resume,
  },
]

export const socialMedia = [
  {
    id: 1,
    Icon: AiOutlineInstagram,
    label: "Instagram",
    mediaUrl: "https://www.instagram.com",
  },
  {
    id: 2,
    Icon: AiOutlineTwitter,
    label: "Twitter",
    mediaUrl: "https://www.twitter.com",
  },
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: "Github",
    mediaUrl: "https://www.github.com",
  },
  {
    id: 4,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    mediaUrl: "https://www.linkedin.com",
  },
  {
    id: 5,
    Icon: AiOutlineWhatsApp,
    label: "Whats app",
    mediaUrl: "https://www.whatsapp.com",
  },
]

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Front-end",
    Icon: SiNextdotjs,
    description:
      "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    id: 2,
    title: "Back-end",
    Icon: SiNodedotjs,
    description:
      "Back-end with a NoSQL DB and API written in a standard express router or tRPC.",
  },
  {
    id: 3,
    title: "UI/UX design",
    Icon: SiFigma,
    description:
      "Modern user Interface trends with a highly professional and unique design.",
  },
  {
    id: 4,
    title: "Firebase",
    Icon: SiFirebase,
    description:
      "Fully functional firebase app with authentication, firestore, storage, etc.",
  },
]

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "https://www.linkedin.com/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
]

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
}
