import ListTriangle from "@/components/ListTriangle";
import { ServiceItem } from "@/types/types";

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    no: "01",
    title: "Frontend web development",
    text: "React, Next.js, Typescript",
    largeImg: "/img/services/frontend.jpeg",
    largeTitle: "Frontend Web Development",
    description: (
      <>
        <h3>These are the technologies I am skilled at:</h3>
        <ul className="mt-4">
          <ListTriangle>React</ListTriangle>
          <ListTriangle>Next.js</ListTriangle>
          <ListTriangle>Typescript</ListTriangle>
          <ListTriangle>Javascript</ListTriangle>
          <ListTriangle>SQL</ListTriangle>
          <ListTriangle>CSS</ListTriangle>
          <ListTriangle>HTML</ListTriangle>
          <ListTriangle>Tailwind CSS</ListTriangle>
          <ListTriangle>Bootstrap</ListTriangle>
          <ListTriangle>Redux</ListTriangle>
          <ListTriangle>Redux Saga</ListTriangle>
          <ListTriangle>Visx</ListTriangle>
          <ListTriangle>Testing Library</ListTriangle>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    no: "02",
    title: "Webflow",
    text: "Code-free solution for creating stunning and highly functional websites.",
    largeImg: "/img/services/webflow.jpg",
    largeTitle:
      "Code-free solution for creating stunning and highly functional websites",
    description: (
      <>
        <p>
          I use a completely visual canvas to create professional and custom
          websites without coding (almost) any of it.
        </p>
        <p>
          It is a great choice if you're looking for an easy-to-use and
          cost-efficient solution for your business, and you don't want to hire
          a developer every time you need to update content on your website.
        </p>
      </>
    ),
  },
  {
    id: 3,
    no: "03",
    title: "Backend web development",
    text: "Python Django, Django Rest Framework",
    largeImg: "/img/services/backend.jpg",
    largeTitle: "Robust and flexible backends for web applications",
    description: (
      <>
        <p>
          I develop scalable backend services using Django to meet your needs.
        </p>
      </>
    ),
  },
];
