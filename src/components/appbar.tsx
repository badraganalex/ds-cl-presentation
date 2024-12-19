import {
  AppBar,
  IconButton,
  Toolbar,
  styled,
  useColorScheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Fab from "@mui/material/Fab";
import { MutableRefObject, useRef } from "react";
import { ISlide } from "../types";
import { ThemeSelector } from "./theme-selector";

export const Appbar = ({
  toggleDrawer,
  onNextPage,
  onPreviousPage,
  disableNextPage,
  disablePreviousPage,
}: {
  onNextPage: (
    // eslint-disable-next-line no-unused-vars
    nextPageButtonRef: MutableRefObject<HTMLButtonElement | null>,
    // eslint-disable-next-line no-unused-vars
    prevPageButtonRef: MutableRefObject<HTMLButtonElement | null>
  ) => void;
  onPreviousPage: (
    // eslint-disable-next-line no-unused-vars
    nextPageButtonRef: MutableRefObject<HTMLButtonElement | null>,
    // eslint-disable-next-line no-unused-vars
    prevPageButtonRef: MutableRefObject<HTMLButtonElement | null>
  ) => void;
  // eslint-disable-next-line no-unused-vars
  toggleDrawer: (open: boolean) => void;
  slides: ISlide[];
  disableNextPage?: boolean;
  disablePreviousPage?: boolean;
}) => {
  const { mode, setMode } = useColorScheme();

  const prevPageButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextPageButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar className="flex justify-between">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <PrevFab
          ref={prevPageButtonRef}
          color="primary"
          aria-label="previous slide"
          onClick={() => onPreviousPage(prevPageButtonRef, nextPageButtonRef)}
          disabled={disablePreviousPage}
        >
          <NavigateBeforeIcon />
        </PrevFab>

        <NextFab
          ref={nextPageButtonRef}
          color="primary"
          aria-label="next slide"
          onClick={() => onNextPage(prevPageButtonRef, nextPageButtonRef)}
          disabled={disableNextPage}
        >
          <NavigateNextIcon />
        </NextFab>

        <ThemeSelector mode={mode} setMode={setMode} />
      </Toolbar>
    </AppBar>
  );
};

const PrevFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 60,
  margin: "0 auto",
  borderRadius: "100% 0 0 100%",
  "& .MuiTouchRipple-root .MuiTouchRipple-child": {
    borderRadius: "100% 0 0 100%",
  },
  "@media (max-width: 600px)": {
    position: "fixed",
    top: 10,
  },
});

const NextFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 60,
  right: 0,
  margin: "0 auto",
  borderRadius: "0 100% 100% 0",
  "& .MuiTouchRipple-root .MuiTouchRipple-child": {
    borderRadius: "0 100% 100% 0",
  },
  "@media (max-width: 600px)": {
    position: "fixed",
    top: 10,
  },
});
