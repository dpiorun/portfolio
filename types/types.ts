import { ReactNode } from "react";

export interface PortfolioItem {
  id: number;
  images: {
    alt: string;
    src: string;
  }[];
  title: string;
  description: ReactNode;
  info: {
    [key: string]: string;
  };
  externalSources?: {
    name: string;
    href: string;
    prettier?: string;
  }[];
}

export interface ServiceItem {
  id: number;
  no: string;
  title: string;
  text: string;
  largeImg: string;
  largeTitle: string;
  description: ReactNode;
}
