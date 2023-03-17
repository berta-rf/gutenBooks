import React, { useState } from "react";
import { useLocation } from "react-router-dom";

//MUI
import {
  AppBar,
  Button,
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
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import styled from "@emotion/styled";

const menuItems = [
  { text: "My Bookshelf", icon: <AutoStoriesIcon />, path: "/Bookshelf" },
  { text: "Reviewpage", icon: <RateReviewIcon />, path: "/Reviewpage" },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const drawerWidth = 280;

// const useStyles = makeStyles({
//   page: {
//     background: "#f9f9f9",
//     width: "100%",
//   },
//   drawer: {
//     width: drawerWidth,
//   },
//   ".MuiDrawer-paper": {
//     width: drawerWidth,
//   },
//   root: {
//     display: "flex",
//   },
// });

const Navigation = () => {
  // const classes = useStyles();
  const location = useLocation();

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

      {/* side nav */}

      {/* SearchBar */}

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
          <Typography variant="H5">MENU</Typography>
          <IconButton onClick={handleDrawerClose}>X</IconButton>
        </DrawerHeader>
        {/* {links.map((page) => (
          <Button
            key={page}
            to={`/${page}`}
            sx={{ my: 1, color: "black", display: "block" }}
          >
            <Link style={{ textDecoration: "none" }} to={`/${page}`}>
              {page}
            </Link>
          </Button>
        ))} */}
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
              <ListItemButton
                style={{ textDecoration: "none" }}
                to={item.path}
                sx={location.pathname}
              >
                {item.text}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* where page will appear */}
      <Box component="main"></Box>
    </Box>
  );
};

export default Navigation;
