'use client';

import React from 'react';
import { 
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'; 

function Header({ handleDrawerToggle, desktopCollapsed }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { 
          md: `calc(100% - ${desktopCollapsed ? 68 : 240}px)` 
        },
        ml: { 
          md: `${desktopCollapsed ? 68 : 240}px` 
        },
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        zIndex: theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>
      {isMobile && (
  <IconButton
    color="inherit"
    edge="start"
    onClick={handleDrawerToggle}
    sx={{ mr: 2 }}
  >
    <MenuIcon />
  </IconButton>
)}


        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <EmailOutlinedIcon />
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <Avatar 
            sx={{ width: 32, height: 32 }}
            src="/path-to-avatar.jpg"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;