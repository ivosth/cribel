import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import {Link} from "react-router-dom"
import { Auth } from "aws-amplify";

const pages = ["channels", "about", "posts"];

function Navbar({ email }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const openNavMenuHandler = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const openUserMenuHandler = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const closeNavMenuHandler = () => {
    setAnchorElNav(null);
  };

  const closeUserMenuHandler = () => {
    setAnchorElUser(null);
  };

  const onSignOutHandler = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.error("Error signing out user", err);
    }
  };


  return (
    <AppBar position = "sticky" color="inherit" >
      <Container maxWidth="x2">
        <Toolbar disableGutters>
          <ConnectWithoutContactIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="/"
            sx={{mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            SERVERLESS APP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" color="inherit" onClick={openNavMenuHandler}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={closeNavMenuHandler}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={closeNavMenuHandler}>
                  <Typography textAlign="center" sx={{ textTransform: 'uppercase' }}>
                    <Link style={{textDecoration: "None", color:"black"}} to={`${page}`}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ConnectWithoutContactIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography variant="h5" noWrap component="a" href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            SERVERLESS APP
          </Typography>
          <Box bgcolor="inherit" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page} style={{textDecoration: "None", color:"black"}} to={`${page}`}>
                <Button
                    onClick={closeNavMenuHandler}
                    sx={{
                        color: "black",
                        display: "block",
                        "&:hover": { background: "#D3D3D3" }
                        /*textTransform: 'capitalize'*/
                    }}
                >
                    {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: {sm: 'flex', md: 'flex' } }}>
            <Typography variant="h6" sx={{mr: '1rem', display: {xs: 'none', sm: 'flex', md: 'flex'}}} > {email} </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={openUserMenuHandler} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={closeUserMenuHandler}
            >
              
            <Link style={{textDecoration: "None", color:"black"}} to={"/settings"}>
                <MenuItem onClick={closeUserMenuHandler}>
                    <Typography textAlign="center">Settings</Typography>
                </MenuItem>
            </Link>

                <MenuItem onClick={onSignOutHandler}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
