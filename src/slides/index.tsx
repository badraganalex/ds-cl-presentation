import { Fab } from "@mui/material";
import { ISlide } from "../types";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Introduction } from "./introduction";
import { DesignSystemsSlides } from "./design-systems";
import { ComponentLibrariesSlides } from "./component-libraries";

export const slides: ISlide[] = [
  {
    title: "Get ready",
    component: (props) => (
      <Fab onClick={props.onNextSlide}>
        <PlayArrowIcon />
      </Fab>
    ),
  },

  {
    title: "Welcome",
    component: <Introduction />,
  },

  ...DesignSystemsSlides,

  ...ComponentLibrariesSlides,
];
