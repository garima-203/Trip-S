'use client';

import React from 'react';
import Slider from 'react-slick';
import { IconButton, Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
 
const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      left: 30,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: 'rgba(255,255,255,0.7)',
      '&:hover': { backgroundColor: '#fff' },
    }}
  >
    <ArrowBackIosNewIcon />
  </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: 'rgba(255,255,255,0.7)',
      '&:hover': { backgroundColor: '#fff' },
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
);

const PromoCard = ({ images = [], settings = {} }) => {
  const defaultSettings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    
  };

  return (
    <Container sx={{ position: 'relative', px: 0, overflow: 'hidden' }}>
      <Slider {...defaultSettings}>
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              px: 1,
              outline: 'none',
            }}
          >
            <Box
              sx={{
                height: 220,
                width: '90%',  
                margin: '0 auto',  
                position: 'relative', 
                borderRadius: 3,
                overflow: 'hidden', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={src}
                alt={`Slide ${index}`}
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default PromoCard;
