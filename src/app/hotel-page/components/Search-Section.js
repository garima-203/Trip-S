'use client'

import React, { useState } from 'react'
import {
  Box,
  Tabs,
  Tab,
  Paper,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  Grid,
  Container
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PeopleIcon from '@mui/icons-material/People'
import SearchIcon from '@mui/icons-material/Search'

export const SearchBar = () => {
  const [tab, setTab] = useState(0)
  const handleTabChange = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <Container
      sx={{
        position: 'relative',
        mt: -9,
        zIndex: 3,
        padding: '10px',
        width: { xs: '95%', sm: 'auto' },
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          top: -10,
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: 8,
          p: 0.5,
          boxShadow: 3,
          textColor: '#f8f9fa',
          width: { xs: '95%', sm: 'auto' },
          maxWidth: 'max-content',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto'
        }}
      >
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant='scrollable'
          scrollButtons='auto'
          textColor='secondary'
          TabIndicatorProps={{ style: { display: 'none' } }}
        >
          {['Hotels', 'Trips', 'Taxi', 'Flight + Hotel', 'Group Tours'].map(
            (label, index) => (
              <Tab
                key={index}
                label={label}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 500,
                  mx: 2,
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#5b2e91',
                    borderRadius: 15
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'white',
                    color: '#5b2e91',
                    borderRadius: 15,
                    fontWeight: 'bold'
                  }
                }}
              />
            )
          )}
        </Tabs>
      </Box>
      <Paper
        elevation={4}
        sx={{
          position: 'relative',
          top: -100,
          zIndex: 0,
          mt: 9,
          p: { xs: 2, sm: 4 },
          borderRadius: 4,
          backgroundColor: '#f8f9fa',
          width: '80%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto'
        }}
      >
        {tab === 0 && (
          // Hotel Search Form
          <Grid
            container
            spacing={2}
            sx={{
              padding: 2
            }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                label='Location'
                select
                defaultValue='New York'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LocationOnIcon />
                    </InputAdornment>
                  )
                }}
              >
                <MenuItem value='New York'>New York</MenuItem>
                <MenuItem value='London'>London</MenuItem>
                <MenuItem value='Paris'>Paris</MenuItem>
                <MenuItem value='Tokyo'>Tokyo</MenuItem>
                <MenuItem value='Sydney'>Sydney</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Check-In'
                type='date'
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Check-Out'
                type='date'
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Guests'
                defaultValue='2 Adults | 1 Room'
                select
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PeopleIcon />
                    </InputAdornment>
                  )
                }}
              >
                <MenuItem value='2 Adults | 1 Room'>2 Adults | 1 Room</MenuItem>
                <MenuItem value='1 Adult | 1 Room'>1 Adult | 1 Room</MenuItem>
                <MenuItem value='3 Adults | 2 Rooms'>
                  3 Adults | 2 Rooms
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button
                variant='contained'
                fullWidth
                size='large'
                sx={{
                  height: '100%',
                  backgroundColor: '#5b2e91',
                  borderRadius: 2,
                  '&:hover': { backgroundColor: '#4a2574' }
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        )}

        {tab === 1 && (
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Destination'
                defaultValue='Bali, Indonesia'
                select
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LocationOnIcon />
                    </InputAdornment>
                  )
                }}
              >
                <MenuItem value='Bali, Indonesia'>Bali, Indonesia</MenuItem>
                <MenuItem value='Paris, France'>Paris, France</MenuItem>
                <MenuItem value='Tokyo, Japan'>Tokyo, Japan</MenuItem>
                <MenuItem value='New York, USA'>New York, USA</MenuItem>
                <MenuItem value='Dubai, UAE'>Dubai, UAE</MenuItem>
                <MenuItem value='Cape Town, South Africa'>
                  Cape Town, South Africa
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                label='Departure'
                type='date'
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                label='Return'
                type='date'
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                fullWidth
                label='Travelers'
                defaultValue='2 adults'
                select
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PeopleIcon />
                    </InputAdornment>
                  )
                }}
              >
                <MenuItem value='1 adult'>1 adult</MenuItem>
                <MenuItem value='2 adults'>2 adults</MenuItem>
                <MenuItem value='3 adults'>3 adults</MenuItem>
                <MenuItem value='Family'>Family</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Trip Type'
                defaultValue='Adventure'
                select
              >
                <MenuItem value='Adventure'>Adventure</MenuItem>
                <MenuItem value='Honeymoon'>Honeymoon</MenuItem>
                <MenuItem value='Family'>Family</MenuItem>
                <MenuItem value='Solo'>Solo</MenuItem>
                <MenuItem value='Luxury'>Luxury</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={1}>
              <Button
                fullWidth
                variant='contained'
                size='large'
                sx={{
                  height: '100%',
                  backgroundColor: '#5b2e91',
                  borderRadius: 2,
                  '&:hover': { backgroundColor: '#4a2574' }
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        )}

        {tab === 2 && (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Pickup Location'
                placeholder='e.g. Delhi Airport'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LocationOnIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Drop Location'
                placeholder='e.g. Connaught Place'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LocationOnIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                label='Pickup Date'
                type='date'
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                label='Pickup Time'
                type='time'
                defaultValue='00:00'
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                fullWidth
                label='Passengers'
                defaultValue='1'
                select
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PeopleIcon />
                    </InputAdornment>
                  )
                }}
              >
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                <MenuItem value='3'>3</MenuItem>
                <MenuItem value='4'>4</MenuItem>
                <MenuItem value='5+'>5+</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button
                variant='contained'
                fullWidth
                size='large'
                sx={{
                  height: '100%',
                  backgroundColor: '#5b2e91',
                  borderRadius: 2,
                  '&:hover': { backgroundColor: '#4a2574' }
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        )}

        {tab === 3 && (
          <Grid container spacing={2}>
            {/* From (Flight Departure) */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='From'
                placeholder='New York, USA'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LocationOnIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* To (Flight Destination) */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='To'
                placeholder='Paris, France'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LocationOnIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Departure Date (Flight) */}
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                label='Departure'
                type='date'
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CalendarTodayIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Destination (Hotel Location) */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Hotel Destination'
                placeholder='Paris Downtown'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LocationOnIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Check-In Date (Hotel) */}
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                label='Check-In'
                type='date'
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CalendarTodayIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Check-Out Date (Hotel) */}
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                label='Check-Out'
                type='date'
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CalendarTodayIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Travelers */}
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                fullWidth
                label='Travelers'
                defaultValue='2 Adults'
                select
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PeopleIcon />
                    </InputAdornment>
                  )
                }}
              >
                <MenuItem value='1 Adult'>1 Adult</MenuItem>
                <MenuItem value='2 Adults'>2 Adults</MenuItem>
                <MenuItem value='3 Adults'>3 Adults</MenuItem>
                <MenuItem value='Family'>Family</MenuItem>
              </TextField>
            </Grid>

            {/* Hotel Class */}
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                fullWidth
                label='Hotel Class'
                defaultValue='3 Star'
                select
              >
                <MenuItem value='3 Star'>3 Star</MenuItem>
                <MenuItem value='4 Star'>4 Star</MenuItem>
                <MenuItem value='5 Star'>5 Star</MenuItem>
                <MenuItem value='Luxury'>Luxury</MenuItem>
              </TextField>
            </Grid>

            {/* Search Button */}
            <Grid item xs={12} sm={6} md={2}>
              <Button
                variant='contained'
                fullWidth
                size='large'
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  backgroundColor: '#5b2e91',
                  '&:hover': {
                    backgroundColor: '#4a2574'
                  }
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        )}

        {tab === 4 && (
          <Grid container spacing={2}>
            {/* Destination */}
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label='Destination'
                placeholder='New York, USA'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LocationOnIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Start Date */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Start Date'
                type='date'
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CalendarTodayIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Group Size */}
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Group Size'
                select
                defaultValue='2-5 People'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PeopleIcon />
                    </InputAdornment>
                  )
                }}
              >
                <MenuItem value='1 Person'>1 Person</MenuItem>
                <MenuItem value='2-5 People'>2-5 People</MenuItem>
                <MenuItem value='6-10 People'>6-10 People</MenuItem>
                <MenuItem value='More than 10'>More than 10</MenuItem>
              </TextField>
            </Grid>

            {/* Search Button */}
            <Grid item xs={12} sm={6} md={2}>
              <Button
                fullWidth
                variant='contained'
                size='large'
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  backgroundColor: '#5b2e91',
                  '&:hover': {
                    backgroundColor: '#4a2574'
                  }
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Container>
  )
}
