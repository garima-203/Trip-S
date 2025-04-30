'use client'
import React, { useEffect, useRef } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  useTheme,
  IconButton,
  Collapse
} from '@mui/material'
import {
  HomeOutlined as HomeIcon,
  FlightTakeoffOutlined as FlightIcon,
  TrainOutlined as TrainIcon,
  DirectionsCarOutlined as CarIcon,
  AttractionsOutlined as AttractionsIcon,
  HotelOutlined as HotelIcon,
  ExploreOutlined as DestinationIcon,
  MapOutlined as MapIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  LogoutOutlined as LogoutIcon
} from '@mui/icons-material'

const drawerWidth = 240
const collapsedWidth = 68

const menuItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Flights', icon: <FlightIcon /> },
  { text: 'Trains', icon: <TrainIcon /> },
  { text: 'Cars', icon: <CarIcon /> },
  { text: 'Attractions', icon: <AttractionsIcon /> },
  { text: 'Hotels', icon: <HotelIcon /> },
  { text: 'Destination', icon: <DestinationIcon /> },
  { text: 'Maps', icon: <MapIcon /> }
]

function Sidebar ({ mobileOpen, handleDrawerToggle, desktopCollapsed }) {
  const theme = useTheme()
  const drawerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        !desktopCollapsed &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        window.innerWidth >= theme.breakpoints.values.md
      ) {
        handleDrawerToggle()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [desktopCollapsed, handleDrawerToggle, theme.breakpoints.values.md])

  const renderDrawerContent = isCollapsed => (
    <Box
      ref={drawerRef}
      sx={{
        p: isCollapsed ? 1 : 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        pt: { xs: '60px', md: 0 }
      }}
    >
      {!mobileOpen && (
        <Box
          display='flex'
          justifyContent={desktopCollapsed ? 'center' : 'flex-end'}
        >
          <IconButton onClick={handleDrawerToggle}>
            {desktopCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      )}

      <List sx={{ flexGrow: 1 }}>
        {menuItems.map(item => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                px: isCollapsed ? 1 : 2,
                borderRadius: 1,
                mb: 0.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  justifyContent: 'center',
                  mr: isCollapsed ? 0 : 2,
                  color: 'text.secondary'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <Collapse in={!isCollapsed} orientation='horizontal'>
                <ListItemText primary={item.text} />
              </Collapse>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box>
        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              justifyContent: isCollapsed ? 'center' : 'flex-start'
            }}
          >
            <ListItemIcon
              sx={{
                color: 'error.main',
                minWidth: 'auto',
                mr: isCollapsed ? 0 : 2
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <Collapse in={!isCollapsed} orientation='horizontal'>
              <ListItemText primary='Logout' sx={{ color: 'error.main' }} />
            </Collapse>
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  )

  return (
    <>
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            position: 'fixed',
            zIndex: theme.zIndex.drawer + 1
          }
        }}
      >
        {renderDrawerContent(false)}
      </Drawer>

      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: desktopCollapsed ? collapsedWidth : drawerWidth,
            position: 'fixed',
            height: '100vh',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            })
          }
        }}
      >
        {renderDrawerContent(desktopCollapsed)}
      </Drawer>
    </>
  )
}

export default Sidebar
