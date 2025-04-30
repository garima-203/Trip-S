'use client'

import React from 'react'
import styles from '../styles/section-Cards.module.scss'
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  IconButton
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import StarIcon from '@mui/icons-material/Star'

export default function SectionCard({ place }) {
  return (
    <Box className={styles.container}>
      <Card elevation={0} className={styles.card}>
        <Box position="relative">
          <CardMedia
            component="img"
            height="240"
            image={place.image}
            alt={place.title}
          />
          <IconButton className={styles.favoriteButton}>
            <FavoriteIcon sx={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: 20 }} />
          </IconButton>
          <Box className={styles.ratingBadge}>
            <StarIcon className={styles.starIcon} />
            <Typography className={styles.ratingText}>
              {place.rating}
              <Typography component="span" className={styles.reviewsText}>
                ({place.reviews} reviews)
              </Typography>
            </Typography>
          </Box>
        </Box>

        <CardContent className={styles.cardContent}>
          <Typography variant="h6" className={styles.title}>
            {place.title}
          </Typography>

          <Box className={styles.locationWrapper}>
            <LocationOnIcon className={styles.locationIcon} />
            <Typography className={styles.locationText}>
              {place.location}
            </Typography>
          </Box>

          <Box className={styles.bottomWrapper}>
            <Box display="flex" alignItems="baseline">
              <Typography className={styles.price}>{place.price}</Typography>
              <Typography className={styles.priceFaded}>/ person</Typography>
            </Box>
            <Button variant="contained" className={styles.bookNowBtn}>
              Book Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
