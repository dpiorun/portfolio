import { PortfolioItem } from "@/types/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 0,
    images: [
      {
        alt: "Design studio landing page",
        src: "/img/portfolio/flod_1.jpg",
      },
    ],
    title: "Design Studio Landing Page",
    description: (
      <>
        <p>
          I implemented a visually striking landing page for Flod, a modern
          design studio, using Webflow framework and a necessary dose of custom
          javascript code.
        </p>
        <p>
          The website effectively showcases Flod`s expertise and creative
          prowess with its clean and minimalist design.
        </p>
        <p>
          Overall, this project was a challenging and rewarding opportunity to
          work with a client who values creativity and innovation
        </p>
      </>
    ),
    info: {
      client: "GoGoApps",
      stack: "Webflow, GSAP",
    },
    externalSources: [
      {
        name: "webpage",
        prettier: "weareflod.com",
        href: "https://weareflod.com",
      },
    ],
  },
  {
    id: 1,
    images: [
      {
        alt: "Chat app layout",
        src: "/img/portfolio/chat_1.jpg",
      },
      {
        alt: "Chat app mobile",
        src: "/img/portfolio/chat_2.jpg",
      },
      {
        alt: "Chat app mobile",
        src: "/img/portfolio/chat_3.jpg",
      },
      {
        alt: "Chat app mobile",
        src: "/img/portfolio/chat_4.jpg",
      },
    ],
    title: "Chat App Layout",
    description: (
      <>
        <p>
          This is a prototype of a TypeScript/React chat application that uses
          the API from{" "}
          <a
            href="https://randomuser.me/"
            style={{ textDecoration: "underline" }}
            target="_blank"
          >
            randomuser.me
          </a>{" "}
          to generate random user data. The layout of the application is similar
          to the one presented in{" "}
          <a
            href="https://www.dribbble.com/shots/3698858-Chat-App-Design"
            style={{ textDecoration: "underline" }}
            target="_blank"
          >
            Dribble
          </a>
          .
        </p>
        <p>
          The user list panel displays a list of ten users along with the
          content of their latest sent/received message, the time elapsed since
          the last message, and a search bar that filters users by name. The
          main chat window allows users to send messages to each other, and when
          a message is sent to a user, the user responds with the same message
          prefixed with "I answer:".
        </p>
      </>
    ),
    info: {
      client: "EGZOTech",
      stack: "React, Next.js, Tailwind CSS",
    },
    externalSources: [
      {
        name: "webpage",
        prettier: "Live preview",
        href: "https://chat-app-dpiorun.vercel.app/",
      },
      {
        name: "source code",
        prettier: "Github",
        href: "https://github.com/dpiorun/chat-app",
      },
    ],
  },
  {
    id: 2,
    images: [
      {
        alt: "Personal portfolio",
        src: "/img/portfolio/personal_1.jpg",
      },
    ],
    title: "Personal portfolio",
    description: [
      "We live in a world where it's essential to move quickly and be flexible with our ideas. Creating mockups strikes the perfect balance between accurately representing the end product and making modifications with ease.",
    ],
    info: {
      client: "This website :)",
      stack: "React, Next.js, Tailwind CSS",
    },
    externalSources: [
      {
        name: "source code",
        prettier: "Github",
        href: "https://github.com/dpiorun",
      },
    ],
  },
];
