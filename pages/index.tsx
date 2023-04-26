import Layout from "@/components/Layout";
import TypingAnimation from "@/components/TypingAnimation";
import React from "react";
import Image from "next/image";
import { socialMedia } from "@/data/home";

export default function Home() {
  return (
    <Layout>
      <section className="flex h-full grow flex-col items-center justify-center gap-x-20 text-center sm:w-[450px] lg:w-[830px] lg:flex-row">
        <div className="relative mb-10 min-h-[200px] min-w-[200px] rounded-full md:min-h-[300px] md:min-w-[300px]">
          <div className="absolute inset-0 animate-morph rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-[url('/img/prof_color.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply shadow-[inset_0px_0px_0px_9px_rgba(255,255,255,0.3)]" />
        </div>
        <div className="lg:text-left">
          <h1 className="mb-4 text-5xl font-black uppercase">Damian Piorun</h1>
          <TypingAnimation />
          <p className="opacity-70">
            I am a creative web developer based in Poland and eager to travel
            throughout Europe to gain more experience.
          </p>
          <ul className="mt-6 flex justify-center gap-3 lg:justify-start">
            {socialMedia.map((social, index) => (
              <li
                key={index}
                className="group transition-all duration-300 hover:invert-[0.8] dark:invert"
              >
                <a href={social.href} target="_blank">
                  <Image
                    alt=" "
                    width={24}
                    height={24}
                    src={social.img}
                    className="transition-all duration-300 group-hover:translate-y-[-5px]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
