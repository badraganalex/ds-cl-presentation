import { ToggleButton, ToggleButtonGroup, useColorScheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ComputerIcon from "@mui/icons-material/Computer";

export const ThemeSelector = ({
  mode,
  setMode,
}: Pick<ReturnType<typeof useColorScheme>, "mode" | "setMode">) => {
  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      onChange={(_, newValue) => setMode(newValue)}
      aria-label="theme"
    >
      <ToggleButton value="dark">
        <DarkModeIcon />
      </ToggleButton>
      <ToggleButton value="system">
        <ComputerIcon />
      </ToggleButton>
      <ToggleButton value="light">
        <LightModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
