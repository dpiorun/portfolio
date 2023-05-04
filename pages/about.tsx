import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import ListTriangle from "@/components/ListTriangle";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";
import {
  introContent,
  knowledgeContent,
  personalInfoContent,
  resumeContent,
  skillsContent,
} from "@/data/about";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About me | Damian Piorun</title>
        <meta
          name="description"
          content="A bit of information about me."
          key="desc"
        />
        <meta property="og:title" content="About me | Damian Piorun" />
        <meta
          property="og:description"
          content="A bit of information about me."
        />
      </Head>
      <PageTitle title="about" description="About me" />
      <section className="max-w-6xl px-4 sm:px-12">
        <div className="flex justify-center">
          <div className="relative aspect-video w-full">
            <Image
              fill
              src={introContent.image}
              alt="about"
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full border-b border-neutral-600 py-9">
          <h2>{introContent.name}</h2>
          <span className="opacity-70">{introContent.designation}</span>
        </div>
        <div className="grid w-full gap-3 border-b border-neutral-600 py-9 opacity-70">
          {introContent.text}
        </div>

        <div className="grid gap-x-24 py-9 md:grid-cols-2">
          {personalInfoContent.map((item, indexUl) => (
            <ul key={indexUl}>
              {item?.info?.map((value, indexLi) => (
                <li key={indexLi} className="flex">
                  <span className="mr-3 inline-block min-w-[100px] font-bold">
                    {value.name}:
                  </span>
                  <span className="opacity-70">{value.content}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <Section bg maxCols={2}>
        {skillsContent.map((item, indexCol) => (
          <div key={indexCol}>
            <h3>{item.title}</h3>

            <div className="mt-10 italic">
              {item?.progress?.map((skill, indexSkill) => (
                <div
                  className="mt-4 border-b border-neutral-600"
                  key={indexSkill}
                >
                  <span>
                    <span>{skill.skillName}</span>
                    {skill.skillValue && (
                      <span className="float-right">{skill.skillValue}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section maxCols={2}>
        {knowledgeContent.map((col, indexCol) => (
          <div key={indexCol}>
            <h3>{col.title}</h3>
            <ul role="list" className="mt-10">
              {col.content.map((val, indexLi) => (
                <ListTriangle key={indexLi}>{val}</ListTriangle>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section bg maxCols={2}>
        {resumeContent.map((item, indexCol) => (
          <div key={indexCol}>
            <h3>{item.title}</h3>
            <ul
              role="list"
              className="relative mt-10 before:absolute before:h-full before:w-px before:bg-neutral-600"
            >
              {item?.resume?.map((value, indexLi) => (
                <li
                  key={indexLi}
                  className="before:first:top-4.5 before:top-6.5 relative flex items-center gap-7 py-6 pl-5 leading-6 before:absolute before:left-[-10px] before:h-[20px] before:w-[20px] before:rounded-full before:border before:border-neutral-600 before:bg-white first:pt-2 last:pb-2 dark:before:bg-black"
                >
                  <div className="h-fit whitespace-nowrap rounded-[50px] bg-neutral-800 px-5 py-1 text-sm">
                    {value.year}
                  </div>
                  <div className="place">
                    <h4>{value.institute}</h4>
                    <span className="text-sm opacity-70">{value.degree}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
    </Layout>
  );
}
