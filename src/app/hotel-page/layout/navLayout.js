'use client';
import { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';  
import Header from './Header';
import SideNavbar from './Sidebar';
 
const drawerWidth = 240;
const collapsedWidth = 68;

export default function NavLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setDesktopCollapsed(!desktopCollapsed);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Header
        handleDrawerToggle={handleDrawerToggle}
        desktopCollapsed={desktopCollapsed}
        isMobile={isMobile}
      />
      
      <SideNavbar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        desktopCollapsed={desktopCollapsed}
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { 
            xs: '100%',
            md: `calc(100% - ${desktopCollapsed ? collapsedWidth : drawerWidth}px)`
          },
          ml: {
            xs: 0,
            md: `${desktopCollapsed ? collapsedWidth : drawerWidth}px`
          },
          pt: '70px',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  );
}