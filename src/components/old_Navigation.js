import React, { useState } from "react";
import { Box } from "@mui/system";
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
import { styled } from "@mui/material/styles";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

//router
import { Link } from "react-router-dom";

const links = ["Bookshelf", "Reviewpage"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const drawerWidth = 250;

const Navigation = ({ Children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexGrow: 1, marginBottom: 3 }}>
        <AppBar position="static">
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
      {/* Mobile */}
      <Drawer
        sx={{
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
        {links.map((page) => (
          <Button
            key={page}
            to={`/${page}`}
            sx={{ my: 1, color: "black", display: "block" }}
          >
            <Link style={{ textDecoration: "none" }} to={`/${page}`}>
              {page}
            </Link>
          </Button>
        ))}
      </Drawer>
      {/* Desktop */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          {links.map((page, index) => (
            <List>
              <ListItem key={page} disablePadding>
                <ListItemIcon>
                  {index % 2 === 0 ? <AutoStoriesIcon /> : <RateReviewIcon />}
                </ListItemIcon>
                <ListItemButton
                  style={{ textDecoration: "none" }}
                  to={`/${page}`}
                >
                  {page}
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};

export default Navigation;
