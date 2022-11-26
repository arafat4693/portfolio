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
import { ClientData, ServiceData } from "./types"

export const menus = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
  },
  {
    id: 4,
    label: "blog",
    Icon: FaRegNewspaper,
  },
  {
    id: 5,
    label: "contact",
    Icon: FiSend,
  },
  {
    id: 6,
    label: "products",
    Icon: MdComputer,
  },
]

export const socialMedia = [
  {
    id: 1,
    Icon: AiOutlineInstagram,
    label: "Instagram",
  },
  {
    id: 2,
    Icon: AiOutlineTwitter,
    label: "Twitter",
  },
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: "Github",
  },
  {
    id: 4,
    Icon: AiFillLinkedin,
    label: "Linkedin",
  },
  {
    id: 5,
    Icon: AiOutlineWhatsApp,
    label: "Whats app",
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
    linkLocation: "https://www.google.com/",
    imgLocation: "/images/google.png",
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
