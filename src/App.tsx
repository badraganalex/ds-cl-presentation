import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Appbar } from "./components/appbar";
import { Menu } from "./components/menu";
import { slides } from "./slides";
import { PageContent } from "./components/page-content";
import { Transition } from "./components/transition";
import { useTransition } from "./hooks/use-transition";
import { Slides } from "./components/slides";

function App() {
  const [open, setOpen] = useState(false);

  const { currentPage, setCurrentPage, shouldTransition } = useTransition();

  const disableNextButton = useMemo(
    () => currentPage === 0 || currentPage === slides.length - 1,
    [currentPage]
  );

  const disablePreviousButton = useMemo(() => currentPage <= 1, [currentPage]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.shiftKey) {
        if (event.key === "Enter") {
          setCurrentPage(1);
        }

        if (event.key === "ArrowLeft" && !disablePreviousButton) {
          setCurrentPage((current) => current - 1);
        }

        if (event.key === "ArrowRight" && !disableNextButton) {
          setCurrentPage((current) => current + 1);
        }
      }
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [disableNextButton, disablePreviousButton, setCurrentPage]);

  return (
    <>
      <Helmet titleTemplate="%s | DS+CL w/ Tailwind+MaterialUI">
        <title>{slides[currentPage].title}</title>
      </Helmet>

      <PageContent>
        <Transition shouldTransition={shouldTransition}>
          <Slides
            items={slides}
            currentPage={currentPage}
            onNextSlide={() => setCurrentPage(currentPage + 1)}
            onPreviousSlide={() => setCurrentPage(currentPage - 1)}
          />
        </Transition>
      </PageContent>

      <Appbar
        toggleDrawer={setOpen}
        slides={slides}
        disableNextPage={disableNextButton}
        disablePreviousPage={disablePreviousButton}
        onPreviousPage={(_, nextRef) => {
          if (currentPage === 2) {
            nextRef.current?.focus();
          }

          setCurrentPage(currentPage - 1);
        }}
        onNextPage={(prevRef) => {
          if (currentPage === slides.length - 2) {
            prevRef.current?.focus();
          }

          setCurrentPage(currentPage + 1);
        }}
      />

      <Menu
        disableRestart={currentPage === 0}
        open={open}
        toggleDrawer={setOpen}
        slides={slides}
        setPage={setCurrentPage}
      />
    </>
  );
}

export default App;
