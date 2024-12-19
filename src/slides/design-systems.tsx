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
const DesignSystems = () => (
  <div className="flex flex-col gap-10 items-center">
    <Typography variant="h2">Design systems...</Typography>

    <div className="flex sm:flex-row gap-6 flex-col">
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The what
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <List>
              {[
                "- pre-built, reusable sets of UI components for streamlining web interface creation (e.g. buttons, input fields, modals, typography, spacings)",
                "- (somewhat) easy to integrate into various web applications",
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
                "- ensuring consistency",
                "- speeds up collaboration within teams",
                "- reduces miscommunication and discrepancies between the design and development teams",
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
                "- strategic move when it comes to project scale-up",
                "- consistent user experience",
                "- reduces miscommunication and discrepancies between the design and development teams",
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
const DesignSystemsExamples = () => (
  <div className="flex flex-col gap-10 items-center">
    <Typography variant="h2">Examples of design systems</Typography>

    <div className="flex justify-center items-center gap-6 flex-col sm:flex-row">
      <Card>
        <CardMedia
          sx={{ height: 140, width: 420 }}
          image="images/logo/atlassian.png"
          title="atlassian"
        />
        <Typography gutterBottom variant="h5" component="div">
          Atlassian Design System
        </Typography>
      </Card>

      <Card>
        <CardMedia
          sx={{ height: 140, width: 420 }}
          image="images/logo/backstage.png"
          title="backstage"
        />
        <Typography gutterBottom variant="h5" component="div">
          Backstage Design System
        </Typography>
      </Card>

      <Card>
        <CardMedia
          sx={{ height: 140, width: 420 }}
          image="images/logo/ibm.png"
          title="ibm"
        />
        <Typography gutterBottom variant="h5" component="div">
          Carbon Design System
        </Typography>
      </Card>
    </div>
  </div>
);

// eslint-disable-next-line react-refresh/only-export-components
const DesignSystemsWhy = () => (
  <div className="flex flex-col gap-10 items-center">
    <Typography variant="h2">Why design systems should be used</Typography>

    <div className="flex sm:flex-row gap-6 flex-col items-center justify-center">
      <CardMedia
        sx={{ height: 300, width: 500 }}
        image="images/design-examples/website-design-1.png"
        title="example one: a website with a clean, consistent design"
      />

      <CardMedia
        sx={{ height: 300, width: 500 }}
        image="images/design-examples/website-design-2.png"
        title="example two: a website with a confusing design"
      />

      <CardMedia
        sx={{ height: 300, width: 500 }}
        image="images/design-examples/website-design-3.png"
        title="example three: a website with an interesting but inconsistent design"
      />
    </div>
  </div>
);

export const DesignSystemsSlides: ISlide[] = [
  {
    title: "Design systems",
    component: <DesignSystems />,
  },

  {
    title: "Examples of design systems",
    component: <DesignSystemsExamples />,
  },

  {
    title: "Why design systems should be used",
    component: <DesignSystemsWhy />,
  },
];
