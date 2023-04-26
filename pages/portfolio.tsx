import Layout from "@/components/Layout";
import { useState } from "react";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";
import { portfolioItems } from "@/data/portfolio";
import PortfolioItem from "@/components/PortfolioItem";

export default function Portfolio() {
  const [openModal, setOpenModal] = useState(-1);
  return (
    <Layout>
      <PageTitle title="portfolio" description="Web development portfolio" />
      <Section gap="sm" py="sm" maxCols={2}>
        {portfolioItems.map((project) => (
          <div
            key={project.id}
            onClick={() => setOpenModal(project.id)}
            className="group relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-800"
          >
            <Image
              alt={project.title}
              src={project.images[0].src}
              role="button"
              fill
              className="object-contain transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-5 right-5 translate-y-[102%] p-4 transition-all duration-300 group-hover:translate-y-[-20%] dark:bg-neutral-900">
              <h3>{project.info.client}</h3>
              <span className="opacity-70">{project.info.stack}</span>
            </div>
          </div>
        ))}
      </Section>

      {portfolioItems.map((item) => (
        <PortfolioItem
          key={item.id}
          isOpen={openModal == item.id}
          onClose={() => setOpenModal(-1)}
          data={item}
        />
      ))}
    </Layout>
  );
}
