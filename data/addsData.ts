import robotImg from "../public/robot.jpeg";
import gearsImg from "../public/gears.jpeg";
import leadsImg from "../public/leads.jpeg";
import machineImg from "../public/machine.jpeg";
import sq1 from "../public/square-three.png";
import { StaticImageData } from "next/image";

export interface Banner {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: StaticImageData;
  author: string;
  platform: string;
}

const ADVERTISEMENTS: Banner[] = [
  {
    id: 1,
    title: "Boost your Robot",
    description: "Harness AI for effective automation",
    buttonText: "Learn More",
    image: robotImg,
    author: "John",
    platform: "Unsplash",
  },
  {
    id: 2,
    title: "Upgrade your Leads",
    description: "Harness AI for effective generation",
    buttonText: "Learn More",
    image: leadsImg,
    author: "Carl",
    platform: "Reddit",
  },
  {
    id: 3,
    title: "Harness your Gears",
    description: "Harness AI for effective innovation",
    buttonText: "Learn More",
    image: gearsImg,
    author: "Mark",
    platform: "Instagram",
  },
  {
    id: 4,
    title: "Drive your Machine",
    description: "Harness AI for effective generation",
    buttonText: "Learn More",
    image: machineImg,
    author: "Candy",
    platform: "Mail",
  },

  {
    id: 5,
    title: "Boost your Robot",
    description: "Harness AI for effective automation",
    buttonText: "Learn More",
    image: robotImg,
    author: "John",
    platform: "Unsplash",
  },
  {
    id: 6,
    title: "Upgrade your Leads",
    description: "Harness AI for effective generation",
    buttonText: "Learn More",
    image: leadsImg,
    author: "Carl",
    platform: "Reddit",
  },
  {
    id: 7,
    title: "Harness your Gears",
    description: "Harness AI for effective innovation",
    buttonText: "Learn More",
    image: gearsImg,
    author: "Mark",
    platform: "Instagram",
  },
  {
    id: 8,
    title: "Drive your Machine",
    description: "Harness AI for effective generation",
    buttonText: "Learn More",
    image: machineImg,
    author: "Candy",
    platform: "Mail",
  },
];

export interface EditImages {
  id: number;
  image: StaticImageData;
  author: string;
  platform: string;
}

const IMAGES: EditImages[] = [
  {
    id: 1,
    image: robotImg,
    author: "Carvin",
    platform: "Reddit",
  },
  {
    id: 2,
    image: leadsImg,
    author: "Carl",
    platform: "Reddit",
  },
  {
    id: 3,
    image: gearsImg,
    author: "Mark",
    platform: "Instagram",
  },
  {
    id: 4,
    image: machineImg,
    author: "Candy",
    platform: "Mail",
  },
  {
    id: 5,
    image: robotImg,
    author: "Carvin",
    platform: "Reddit",
  },
  {
    id: 6,
    image: leadsImg,
    author: "Carl",
    platform: "Reddit",
  },
  {
    id: 7,
    image: gearsImg,
    author: "Mark",
    platform: "Instagram",
  },
  {
    id: 8,
    image: machineImg,
    author: "Candy",
    platform: "Mail",
  },
];

export { ADVERTISEMENTS, IMAGES };
