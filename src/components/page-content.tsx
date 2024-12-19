import { Paper } from "@mui/material";
import { PropsWithChildren } from "react";
import { classNames } from "../util/class-names";

export const PageContent = ({ children }: PropsWithChildren) => (
  <Paper
    className={classNames(
      "h-[calc(100vh-56px)] md:h-[calc(100vh-56px)] w-screen",
      "rounded-none overflow-auto pt-20 sm:pt-0",
      "flex items-center justify-center"
    )}
  >
    {children}
  </Paper>
);
