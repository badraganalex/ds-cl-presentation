import { ISlide, SlideProps } from "../types";

export const Slides = ({
  items,
  currentPage,
  onNextSlide,
  onPreviousSlide,
}: SlideProps & { items: ISlide[]; currentPage: number }) => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      {typeof items[currentPage].component === "function"
        ? items[currentPage].component({ onNextSlide, onPreviousSlide })
        : items[currentPage].component}
    </div>
  );
};
