import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { LuFigma } from "react-icons/lu";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk, SiSentry } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { BiLogoMongodb } from "react-icons/bi";

export const testimonials = [
  {
    quote: "Ayush is an enthusiastic and committed developer. Higly recommend!",
    name: "Katrice Saunders",
    title:
      "Vice President, Creative Services & Digital+AI Media, Buoyant Partners",
  },
  {
    quote:
      "Great Developer, did everything very quickly & exactly as in the design.",
    name: "Tereshchenko Vitali",
    title: "Senior Webflow Developer",
  },
  {
    quote: "Ayush helped me as expected, really good webflow developer.",
    name: "Jorge Enrique Noguede de la Mora",
    title: "Sr. Webflow Developer/Owner, Mesh Planet",
  },
  {
    quote:
      "Ayush's enthusiasm and commitment to his work as a Webflow developer truly stood out during our collaboration. His expertise and attention to detail significantly contributed to the success of our project. I am thoroughly impressed with his skills and would wholeheartedly recommend him to anyone seeking a reliable and skilled Webflow developer.",
    name: "Hector Vidal",
    title: "CTO, Amaka Studio",
  },
];

export const navLinks = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Testimonial",
    hash: "#testimonial",
  },
  {
    name: "Work",
    hash: "#work",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skills = [
  {
    name: "Webflow",
    icon: FaWebflow,
  },
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    name: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    name: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: RiNextjsFill,
  },
  {
    name: "MongoDB",
    icon: DiMongodb,
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
  {
    name: "Clerk",
    icon: SiClerk,
  },
  {
    name: "Convex",
    icon: FaWebflow,
  },
  {
    name: "Figma",
    icon: LuFigma,
  },
  {
    name: "Github",
    icon: FiGithub,
  },
  {
    name: "Vercel",
    icon: IoLogoVercel,
  },
  {
    name: "VS Code",
    icon: VscVscode,
  },
  {
    name: "Sentry",
    icon: SiSentry,
  },
  
] as const;

export const projects = [
  {
    id: 1,
    title: "SubEase (in progress)",
    des: "SubEase helps you track and manage all your subscriptions in one place.",
    img: "/subease-uc.png",
    iconLists: [
      FaReact,
      RiNextjsFill,
      RiTailwindCssFill,
      BiLogoTypescript,
      SiClerk,
      BiLogoMongodb
    ],
    link: "https://subease.vercel.app",
  },
  {
    id: 2,
    title: "DocuMate",
    des: "A real-time collaborative editor. An improved version of Google Docs.",
    img: "/docu-mate.png",
    iconLists: [
      FaReact,
      RiNextjsFill,
      RiTailwindCssFill,
      BiLogoTypescript,
      SiClerk,
      SiSentry,
    ],
    link: "https://docu-mate.vercel.app",
  },
  {
    id: 3,
    title: "ClimaCast",
    des: "A real-time weather forecasting app powered by OpenWeatherMap API.",
    img: "/climacast.png",
    iconLists: [FaReact, RiNextjsFill, RiTailwindCssFill, BiLogoTypescript],
    link: "https://climacast-delta.vercel.app",
  },
  {
    id: 4,
    title: "HorizonPay",
    des: "Concept banking UI/UX built with Vanilla JS & Tailwind.",
    img: "/horizonpay.png",
    iconLists: [FaHtml5, IoLogoJavascript, RiTailwindCssFill],
    link: "https://horizonpay.netlify.app",
  },
  {
    id: 5,
    title: "Amaka Studio",
    des: "Website for a influencer marketing studio. Additionally used SwiperJs.",
    img: "/Amaka.png",
    iconLists: [FaWebflow, LuFigma, IoLogoJavascript],
    link: "https://more.amaka.studio",
  },
  {
    id: 6,
    title: "Bentley Dental Plaza",
    des: "Website for a dental clinic in Australia. Webflow Template Customization",
    img: "/Bentley.png",
    iconLists: [FaWebflow, IoLogoJavascript],
    link: "https://bentleyplazadental.com.au/",
  },
] as const;
