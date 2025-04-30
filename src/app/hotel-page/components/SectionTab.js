'use client'
import { useEffect, useState } from 'react'
import { Box, Tabs, Tab, Container, IconButton, Typography } from '@mui/material'
import Slider from 'react-slick' 
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import styles from '../styles/section-Tab.module.scss'
import SectionCard from './SectionCards'

export default function SectionTab({ tabs, jsonPath, sectionTitle, sectiondetails }) {
  const [value, setValue] = useState(0)
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(jsonPath)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((error) => console.error('Failed to load data:', error))
  }, [jsonPath])

  const handleChange = (event, newValue) => setValue(newValue) 
  const currentTab = tabs && tabs.length > 0 ? tabs[value] : null
  let places = []
 
  if (currentTab) {
    places = data[currentTab] || data['All'] || []
  } else { 
    const firstKey = Object.keys(data)[0]
    places = data[firstKey] || []
  }

  const CustomPrevArrow = ({ onClick }) => (
    <IconButton onClick={onClick} className={`${styles.arrowButton} ${styles.prevArrow}`}>
      <ArrowBackIosNewIcon />
    </IconButton>
  )

  const CustomNextArrow = ({ onClick }) => (
    <IconButton onClick={onClick} className={`${styles.arrowButton} ${styles.nextArrow}`}>
      <ArrowForwardIosIcon />
    </IconButton>
  )

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1.1 } }
    ]
  }

  return (
    <Container className={styles.containerSpacing}>
      {sectionTitle && (
        <Typography variant="h5" className={styles.sectionTitle}>
          {sectionTitle}
        </Typography>
      )}
      {sectiondetails && (
        <Typography variant="p">{sectiondetails}</Typography>
      )}
 
      {tabs && tabs.length > 1 && (
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          TabIndicatorProps={{ style: { display: 'none' } }}
          className={styles.customTabs}
        >
          {tabs.map((tab, i) => (
            <Tab key={i} label={tab} classes={{
              root: styles.customTab,
              selected: styles.selectedTab,
            }} />
          ))}
        </Tabs>
      )}

      <Box className={styles.sliderBox}>
        <Slider {...sliderSettings}>
          {places.map((place, i) => (
            <Box key={i} px={1}>
              <SectionCard place={place} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  )
}

