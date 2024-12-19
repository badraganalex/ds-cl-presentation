import { ReactElement, ReactNode } from "react";

export interface SlideProps {
  onNextSlide?: () => void;
  onPreviousSlide?: () => void;
}

export interface ISlide {
  title: string;
  // eslint-disable-next-line no-unused-vars
  component: ReactNode | ((props: SlideProps) => ReactElement);
}
