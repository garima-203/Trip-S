'use client'
 
import {  Box,Container } from '@mui/material' 
import { SearchBar } from './Search-Section'
 

export const ResponsiveBannerSearch = () => {
 
  return (
    <Container maxWidth='xl' sx={{ mt: 4 }}>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url('/bg-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: 280, sm: 350, md: 400 },
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
          zIndex: 1,
          color: '#fff'
        }}
      ></Box>      
      <SearchBar/>
    </Container>
  )
}
