import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "white", color: "black" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo list
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
