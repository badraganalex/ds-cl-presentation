import { PropsWithChildren } from "react";
import { classNames } from "../util/class-names";

export const Transition = ({
  children,
  shouldTransition,
}: PropsWithChildren<{ shouldTransition: boolean }>) => (
  <div
    className={classNames(
      "transition-opacity ease-[cubic-bezier(0.280,0.795,0.880,0.370)] duration-100 h-full w-full",
      shouldTransition ? "opacity-100" : "opacity-0"
    )}
  >
    {children}
  </div>
);
