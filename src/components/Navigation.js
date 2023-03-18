import React, { useState } from "react";
import { Outlet } from "react-router-dom";

//import SearchBook from "./SearchBook";

//MUI
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

//MUI icons
import MenuIcon from "@mui/icons-material/Menu";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";

/*UNUSED const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  ".MuiDrawer-paper": {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
}); 
const classes = useStyles();
const location = useLocation();
const path = location.pathname;
*/

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/#" },
  { text: "My Bookshelf", icon: <AutoStoriesIcon />, path: "/Bookshelf" },
  { text: "My Reviews", icon: <RateReviewIcon />, path: "/Review" },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const drawerWidth = 280;

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* app bar */}
      <Box sx={{ display: "flex", flexGrow: 1, marginBottom: 3 }}>
        <AppBar
          position="static"
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <Toolbar sx={{ flexDirection: "row-reverse" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              GutenBooks
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                flexDirection: "row",
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="hamburger icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* side navigation */}

      {/* Mobile */}
      <Drawer
        sx={{
          display: { xs: "block", sm: "none" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
        variant="temporary"
        anchor="left"
        onClose={() => {
          handleDrawerClose();
        }}
        open={open}
      >
        <DrawerHeader sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4">MENU</Typography>
          <IconButton onClick={handleDrawerClose}>X</IconButton>
        </DrawerHeader>
        {/* Menu items */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemButton style={{ textDecoration: "none" }} to={item.path}>
                {item.text}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Desktop */}
      <Drawer
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          ".MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              m: 2,
              display: "flex",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GutenBooks
            <MenuBookIcon />
          </Typography>
        </Box>
        <Divider />
        {/* Menu items */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemButton style={{ textDecoration: "none" }} to={item.path}>
                {item.text}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* where page will appear */}
      <Box component="main" sx={{ flexGrow: 1, m: 3, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Navigation;
