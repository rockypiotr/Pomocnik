import * as React from "react";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import FolderIcon from "@mui/icons-material/Folder";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import MasksIcon from "@mui/icons-material/Masks";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

const categories = [
  {
    id: "Merytoryka",
    children: [
      {
        id: "Identyfikacja",
        icon: <AccessibilityNewIcon />,
        linkTo: "/Identity",
      },
      { id: "Baza wiedzy", icon: <FolderIcon />, linkTo: "/Knowledge" },
      {
        id: "Dokumenty wymagane",
        icon: <ForwardToInboxIcon />,
        linkTo: "/Documents",
      },
    ],
  },
  {
    id: "Strony",
    children: [
      { id: "Bezpieczeństwo", icon: <MasksIcon />, linkTo: "/" },
      { id: "Infoteka", icon: <EventNoteIcon />, linkTo: "/" },
      { id: "Rejestr.io", icon: <AssuredWorkloadIcon />, linkTo: "/" },
      { id: "CEIDG", icon: <AssuredWorkloadIcon />, linkTo: "/" },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Pomocnik</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, linkTo }) => (
              <Link
                to={linkTo}
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
