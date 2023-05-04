import { useState } from "react";
import Head from "next/head";

import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";
import ServiceItem from "@/components/ServiceItem";

import { servicesData } from "@/data/services";

export default function Service() {
  const [openModal, setOpenModal] = useState(-1);

  return (
    <Layout>
      <Head>
        <title>Service | Damian Piorun</title>
        <meta
          name="description"
          content="Here is an overview of what I can do for you."
          key="desc"
        />
        <meta property="og:title" content="Service | Damian Piorun" />
        <meta
          property="og:description"
          content="Here is an overview of what I can do for you."
        />
      </Head>
      <PageTitle title="service" description="What I do" />
      <Section maxCols={3} gap="sm">
        {servicesData.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col border border-neutral-200 bg-white px-8 py-12 hover:cursor-pointer hover:border-neutral-300 dark:border-none dark:bg-neutral-800"
            onClick={() => setOpenModal(item.id)}
          >
            <h4 className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200 transition-all duration-300 group-hover:bg-neutral-300 dark:bg-neutral-700 dark:group-hover:bg-neutral-600">
              {item.no}
            </h4>
            <h3 className="mt-8 capitalize">{item.title}</h3>
            <p className="mt-4 grow opacity-70">{item.text}</p>
            <div className="relative mt-2 overflow-hidden">
              <div className="relative inline-block pr-8 font-montserrat text-xs uppercase before:absolute before:bottom-0 before:left-0 before:top-0 before:m-auto before:h-px before:w-full before:origin-[right_center] before:scale-x-[0.2] before:bg-black before:text-white dark:before:bg-white lg:before:origin-[left_center] lg:group-hover:before:animate-readMoreAnim">
                <span className="inline-block transition-all duration-300 lg:translate-x-[-110%] lg:group-hover:translate-x-0">
                  Read More
                </span>
              </div>
            </div>
          </div>
        ))}
      </Section>

      {servicesData.map((item) => (
        <ServiceItem
          key={item.id}
          isOpen={openModal == item.id}
          onClose={() => setOpenModal(-1)}
          data={item}
        />
      ))}
    </Layout>
  );
}
