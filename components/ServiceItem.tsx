import { ServiceItem } from "@/types/types";
import Modal from "./Modal";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: ServiceItem;
}

export default function ServiceItem({ isOpen, onClose, data }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image alt={""} fill src={data.largeImg} className="object-contain" />
      </div>

      <h2 className="mt-10">{data.title}</h2>

      <div className="mt-8 opacity-70">{data.description}</div>
    </Modal>
  );
}
