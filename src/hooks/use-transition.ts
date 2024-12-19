import { useMemo, useState } from "react";
import { useDebounce } from "./use-debounce";

export const useTransition = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const debouncedCurrentPage = useDebounce(currentPage, 300);

  const shouldTransition = useMemo(
    () => currentPage === debouncedCurrentPage,
    [debouncedCurrentPage, currentPage]
  );

  return {
    currentPage: debouncedCurrentPage,
    setCurrentPage,
    shouldTransition,
  };
};
