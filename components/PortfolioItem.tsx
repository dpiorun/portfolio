import { PortfolioItem } from "@/types/types";
import Modal from "./Modal";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioItem;
}

export default function PortfolioItem({ isOpen, onClose, data }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          alt={data.images[0].alt}
          fill
          src={data.images[0].src}
          className="object-contain"
        />
      </div>

      <div className="mt-10 leading-10">
        <h2>{data.title}</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-6 lg:gap-16">
        <div className="italic opacity-70 sm:col-span-4">
          {data.description}
        </div>
        <ul className="leading-10 sm:col-span-2">
          {Object.entries(data.info).map((entry, index) => (
            <li key={index}>
              <h4 className="capitalize italic">{entry[0]}</h4>
              <div className="opacity-70">{entry[1]}</div>
            </li>
          ))}
          {data.externalSources?.map((item, index) => (
            <li key={index}>
              <h4 className="capitalize italic">{item.name}</h4>
              <a href={item.href} target="_blank" className="group">
                <div className="flex opacity-70">
                  <span className="transition-all duration-300 group-hover:tracking-widest">
                    {item.prettier}
                  </span>
                  <Image
                    src="/img/svg/arrow-top-right.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="ml-2 transition-all duration-300 group-hover:translate-y-[-8px] dark:invert"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-0 lg:grid-cols-2">
        {data.images.slice(1).map((image) => (
          <div className="w-full p-6 sm:p-24 md:p-32 lg:p-16" key={image.src}>
            <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
