import { Layout } from "react-grid-layout";

export type LayoutExtend = Layout & {
    title?: string;
    component?: any;
    zIndex: number;
  };