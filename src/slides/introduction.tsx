import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Fade, Typography } from "@mui/material";

export const Introduction = () => (
  <div className="flex items-center gap-3">
    <AccessibilityNewIcon
      sx={{
        fontSize: {
          xs: "20rem",
        },
        display: {
          xs: "none",
          md: "block",
        },
      }}
    />

    <div className="flex flex-col gap-3">
      <Typography variant="h2" className="text-balance">
        Design
        <br />
        Systems
        <br />
        and
        <br />
        Component
        <br />
        Libraries
      </Typography>
      <Fade in>
        <Typography variant="body1">A kind of introduction</Typography>
      </Fade>
    </div>
  </div>
);
