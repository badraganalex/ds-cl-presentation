import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { ISlide } from "../types";

export const Menu = ({
  open,
  toggleDrawer,
  slides,
  disableRestart,
  setPage,
}: {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  toggleDrawer: (open: boolean) => void;
  slides: ISlide[];
  disableRestart?: boolean;
  // eslint-disable-next-line no-unused-vars
  setPage: (newValue: number) => void;
}) => {
  return (
    <Drawer open={open} onClose={() => toggleDrawer(false)}>
      <DrawerList
        slides={slides}
        toggleDrawer={toggleDrawer}
        disableRestart={disableRestart}
        setPage={setPage}
      />
    </Drawer>
  );
};

const DrawerList = ({
  slides,
  toggleDrawer,
  setPage,
  disableRestart,
}: {
  slides: ISlide[];
  // eslint-disable-next-line no-unused-vars
  toggleDrawer: (open: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setPage: (newValue: number) => void;
  disableRestart?: boolean;
}) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={() => toggleDrawer(false)}
    component="div"
  >
    <List>
      {slides.slice(1).map((slide, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemIcon>{index + 1}</ListItemIcon>
            <ListItemText primary={slide.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <Divider />

    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setPage(0)} disabled={disableRestart}>
          <ListItemIcon>
            <RestartAltIcon />
          </ListItemIcon>
          <ListItemText primary="Restart presentation" />
        </ListItemButton>
      </ListItem>
    </List>

    <Divider />

    <List>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => window.open("https://mui.com/material-ui", "_blank")}
        >
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Material-UI" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => window.open("https://tailwindcss.com/", "_blank")}
        >
          <ListItemIcon>
            <CssIcon />
          </ListItemIcon>
          <ListItemText primary="TailwindCSS" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          onClick={() =>
            window.open(
              "https://www.w3.org/WAI/standards-guidelines/wcag/",
              "_blank"
            )
          }
        >
          <ListItemIcon>
            <AccessibilityNewRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="WCAG 2" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          onClick={() =>
            window.open("https://www.w3.org/WAI/ARIA/apg", "_blank")
          }
        >
          <ListItemIcon>
            <AccessibilityNewIcon />
          </ListItemIcon>
          <ListItemText primary="ARIA Authoring Practices Guide" />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);
