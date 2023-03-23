import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import SearchBook from "./SearchBook";

//MUI
import {
  AppBar,
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
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/#" },
  { text: "Bookshelf", icon: <AutoStoriesIcon />, path: "/Bookshelf" },
  { text: "My Reviews", icon: <RateReviewIcon />, path: "/Review" },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const drawerWidth = 300;

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* app bar */}
        <Box>
          <AppBar
            color="transparent"
            elevation={0}
            sx={{
              width: `calc(100%)-${drawerWidth}px`,
            }}
          >
            <Toolbar
              className="topToolbar"
              sx={{
                flexDirection: "row-reverse",
                backgroundColor: "transparent",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <SearchBook />
              </Box>
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
          className="mobileDr"
          sx={{
            display: { xs: "block", md: "none" },
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="temporary"
          anchor="left"
          onClose={() => {
            handleDrawerClose();
          }}
          open={open}
        >
          <DrawerHeader
            sx={{ justifyContent: "space-between" }}
            className="logoBg"
          >
            <Typography variant="h3" className="logo">
              gutenBooks
              <MenuBookSharpIcon />
            </Typography>
            <IconButton onClick={handleDrawerClose}>X</IconButton>
          </DrawerHeader>
          {/* Menu items */}
          <List className="menuList">
            {menuItems.map((item) => (
              <ListItem className="menuItem" key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemButton to={item.path}>{item.text}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Desktop */}
        <Drawer
          className="desktopDr"
          sx={{
            display: { xs: "none", md: "block" },
            width: drawerWidth,
            flexShrink: 0,
            ".MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: 10,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <Box>
              <MenuBookSharpIcon
                className="desktopIcon"
                sx={{ fontSize: 100 }}
              />
              {/* Menu items */}
              <List className="menuList">
                {menuItems.map((item) => (
                  <ListItem
                    className={`menuListItem ${"spreadEffectMenu"}`}
                    key={item.text}
                  >
                    <ListItemButton
                      className="menuListButton"
                      align="right"
                      style={{ textDecoration: "none" }}
                      to={item.path}
                    >
                      {item.text}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            {/* LOGO */}
            <Box className="logoBg">
              <Typography
                className={`gutenLogo ${"spreadEffectLogo"}`}
                noWrap
                component="a"
                href="/"
              >
                gutenBooks
              </Typography>
            </Box>
          </Box>
        </Drawer>

        {/* where page will appear */}
        <Box
          className="pageWrapper"
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
