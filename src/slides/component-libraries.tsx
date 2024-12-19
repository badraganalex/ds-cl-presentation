import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ISlide } from "../types";

// eslint-disable-next-line react-refresh/only-export-components
const ComponentLibraries = () => (
  <div className="flex flex-col gap-10 items-center">
    <Typography variant="h2">Component libraries...</Typography>

    <div className="flex flex-col sm:flex-row gap-6">
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The what
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <List>
              {[
                "- pre-built, reusable sets of UI components (e.g. buttons, input fields, modals)",
                "- consistent design",
                "- (sometimes) comes with out-of-the-box support for accessibility, responsiveness and cross-browser compatibility",
              ].map((value) => (
                <ListItem key={value} disableGutters>
                  <ListItemText primary={value} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The why
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <List>
              {[
                "- efficiency",
                "- saving time and effort on ensuring accessibility compliance for standards like WCAG",
                "- can improve code maintainability",
              ].map((value) => (
                <ListItem key={value} disableGutters>
                  <ListItemText primary={value} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The when
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <List>
              {[
                "- building projects that need to be delivered quickly",
                "- there are limited resources that do not allow creating something from scratch",
                "- not well-suited for projects requiring highly unique UI",
              ].map((value) => (
                <ListItem key={value} disableGutters>
                  <ListItemText primary={value} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </CardContent>
      </Card>
    </div>
  </div>
);

// eslint-disable-next-line react-refresh/only-export-components
const ComponentLibrariesExample = () => (
  <div className="flex flex-col gap-10 items-center">
    <Typography variant="h2">Examples of component libraries</Typography>

    <div className="flex items-center gap-6 flex-col sm:flex-row">
      <Card>
        <CardMedia
          sx={{ height: 140, width: 420 }}
          image="images/logo/material-ui.png"
          title="material ui"
        />

        <Typography gutterBottom variant="h5" component="div">
          Material UI Components
        </Typography>
      </Card>

      <Card>
        <CardMedia
          sx={{ height: 140, width: 420 }}
          image="images/logo/react-aria.png"
          title="react aria"
        />

        <Typography gutterBottom variant="h5" component="div">
          React Aria Components
        </Typography>
      </Card>
    </div>
  </div>
);

export const ComponentLibrariesSlides: ISlide[] = [
  {
    title: "Component libraries",
    component: <ComponentLibraries />,
  },

  {
    title: "Examples of component libraries",
    component: <ComponentLibrariesExample />,
  },
];
