import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout>
      <PageTitle title="Contact" description="Get in Touch" />
      <Section>
        <div className="flex text-xl">
          Find me on
          <a
            href="https://www.upwork.com/freelancers/~01644b6ce81e0a4505"
            target="_blank"
            className="group flex"
          >
            <span className="ms-1 transition-all duration-300 group-hover:tracking-widest">
              Upwork
            </span>
            <Image
              src="/img/svg/arrow-top-right.svg"
              alt=" "
              width={15}
              height={15}
              className="ml-2 transition-all duration-300 group-hover:translate-y-[-8px] dark:invert"
            />
          </a>
        </div>
      </Section>
    </Layout>
  );
}
