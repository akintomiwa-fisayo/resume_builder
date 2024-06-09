import { ReactNode, CSSProperties } from "react";

export interface CommonProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export type TableQueries = {
  total?: number;
  pageIndex?: number;
  pageSize?: number;
  query?: string;
  sort?: {
    order: "asc" | "desc" | "";
    key: string | number;
  };
};

export type IImageUrl = {
  _id: string;
  img: string;
  name?: string;
};

export type IMeta = {
  pageSize: number;
  pageindex: number;
  total?: number;
};
