'use client'

import React, { useState, useEffect } from 'react'
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
import PeopleIcon from '@mui/icons-material/People'
export const SearchBar = () => {
  const [tab, setTab] = useState(0)
  const [data, setData] = useState(null)
  const [formValues, setFormValues] = useState({})

  useEffect(() => {
    fetch('/data/menuitem.json')
      .then(response => response.json())
      .then(menuData => {
        setData(menuData)
        setFormValues(prev => ({
          ...prev,
          tab0: {
            location: menuData.locations[0] || '',
            checkIn: '',
            checkOut: '',
            guests: menuData.guests[0] || ''
          },
          tab1: {
            destination: menuData.tripDestinations[0] || '',
            departure: '',
            return: '',
            travelers: menuData.travelers[0] || '',
            tripType: menuData.tripTypes[0] || ''
          },
          tab2: {
            pickup: menuData.tripDestinations[0] || '',
            drop: menuData.tripDestinations[1] || '',
            date: '',
            passengers: menuData.passengers[1] || ''
          },
          tab3: {
            flightFrom: menuData.tripDestinations[0] || '',
            flightTo: menuData.tripDestinations[2] || '',
            departureDate: '',
            hotelDestination: menuData.tripDestinations[1] || '',
            hotelCheckIn: '',
            hotelCheckOut: '',
            travelers: menuData.travelers[0] || ''
          },
          tab4: {
            destination: menuData.tripDestinations[0] || '',
            tripType: menuData.tripTypes[0] || '',
            groupSize: menuData.travelers[0] || ''
          }
        }))
      })
      .catch(err => console.error('Failed to load menu items', err))
  }, [])

  if (!data) return null

  const handleTabChange = (event, newValue) => setTab(newValue)

  const handleChange = (tabKey, field) => event => {
    const value = event.target.value
    setFormValues(prev => ({
      ...prev,
      [tabKey]: {
        ...prev[tabKey],
        [field]: value
      }
    }))
  }

  const handleSubmit = () => {
    const tabKey = `tab${tab}`
    const tabLabel = data.tabs[tab] || tabKey
    console.log(
      `Data from "${tabLabel}":`,
      JSON.stringify(formValues[tabKey], null, 2)
    )
  }

  return (
    <Container
      sx={{
        position: 'relative',
        mt: -9,
        zIndex: 3,
        padding: 4, 
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
          scrollButtons
          allowScrollButtonsMobile
          textColor='secondary'
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={{
            '& .MuiTabs-scrollButtons': {
              color: 'white'
            },
            '& .MuiTabs-scrollButtons.Mui-disabled': {
              opacity: 0.3
            }
          }}
        >
          {data.tabs.map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                color: 'white',
                textTransform: 'none',
                fontWeight: 500,
                mx: 0.5,
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
          ))}
        </Tabs>
      </Box>

      <Paper
        elevation={4}
        sx={{
          position: 'relative',
          top: -100,
          zIndex: 0,
          mt: 9,
          p: { xs: 2, sm: 3 },
          borderRadius: 4,
          backgroundColor: '#f8f9fa',
          width: {  sm: 'auto' },
          maxWidth: 'max-content',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto'
        }}
      >
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          spacing={2}
          sx={{ mt: 3 }}
        >
          {tab === 0 && (
            <>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label='Location'
                  select
                  defaultValue={data.locations[0]}
                  value={formValues.tab0.location}
                  onChange={handleChange('tab0', 'location')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationOnIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.locations.map((loc, i) => (
                    <MenuItem key={i} value={loc}>
                      {loc}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label='Check-In'
                  type='date'
                  value={formValues.tab0.checkIn}
                  onChange={handleChange('tab0', 'checkIn')}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label='Check-Out'
                  type='date'
                  value={formValues.tab0.checkOut}
                  onChange={handleChange('tab0', 'checkOut')}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label='Guests'
                  select
                  defaultValue={data.guests[0]}
                  value={formValues.tab0.guests}
                  onChange={handleChange('tab0', 'guests')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PeopleIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.guests.map((g, i) => (
                    <MenuItem key={i} value={g}>
                      {g}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}

          {tab === 1 && (
            <>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label='Destination'
                  select
                  defaultValue={data.tripDestinations[0]}
                  value={formValues.tab1.destination}
                  onChange={handleChange('tab1', 'destination')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationOnIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.tripDestinations.map((dest, i) => (
                    <MenuItem key={i} value={dest}>
                      {dest}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label='Departure Date'
                  type='date'
                  value={formValues.tab1.departure}
                  onChange={handleChange('tab1', 'departure')}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label='Return Date'
                  type='date'
                  value={formValues.tab1.return}
                  onChange={handleChange('tab1', 'return')}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label='Travelers'
                  select
                  defaultValue={data.travelers[0]}
                  value={formValues.tab1.travelers}
                  onChange={handleChange('tab1', 'travelers')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PeopleIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.travelers.map((t, i) => (
                    <MenuItem key={i} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label='Trip Type'
                  select
                  defaultValue={data.tripTypes[0]}
                  value={formValues.tab1.tripType}
                  onChange={handleChange('tab1', 'tripType')}
                >
                  {data.tripTypes.map((t, i) => (
                    <MenuItem key={i} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}

          {tab === 2 && (
            <>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label='Pickup Location'
                  select
                  defaultValue={data.tripDestinations[0]}
                  value={formValues.tab2.pickup}
                  onChange={handleChange('tab2', 'pickup')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationOnIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.tripDestinations.map((loc, i) => (
                    <MenuItem key={i} value={loc}>
                      {loc}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label='Drop Location'
                  select
                  defaultValue={data.tripDestinations[1]}
                  value={formValues.tab2.drop}
                  onChange={handleChange('tab2', 'drop')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationOnIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.tripDestinations.map((loc, i) => (
                    <MenuItem key={i} value={loc}>
                      {loc}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label='Trip Date'
                  type='date'
                  value={formValues.tab2.date}
                  onChange={handleChange('tab2', 'date')}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label='Passengers'
                  select
                  value={formValues.tab2.passengers}
                  onChange={handleChange('tab2', 'passengers')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PeopleIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.passengers.map((p, i) => (
                    <MenuItem key={i} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}

          {tab === 3 && (
            <>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <TextField
                  fullWidth
                  label='Flight From'
                  select
                  value={formValues.tab3.flightFrom}
                  onChange={handleChange('tab3', 'flightFrom')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationOnIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.tripDestinations.map((loc, i) => (
                    <MenuItem key={i} value={loc}>
                      {loc}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <TextField
                  fullWidth
                  label='Flight To'
                  select
                  value={formValues.tab3.flightTo}
                  onChange={handleChange('tab3', 'flightTo')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationOnIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.tripDestinations.map((loc, i) => (
                    <MenuItem key={i} value={loc}>
                      {loc}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <TextField
                  fullWidth
                  label='Departure Date'
                  type='date'
                  value={formValues.tab3.departureDate}
                  onChange={handleChange('tab3', 'departureDate')}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <TextField
                  fullWidth
                  label='Hotel Destination'
                  select
                  value={formValues.tab3.hotelDestination}
                  onChange={handleChange('tab3', 'hotelDestination')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationOnIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.tripDestinations.map((dest, i) => (
                    <MenuItem key={i} value={dest}>
                      {dest}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <TextField
                  fullWidth
                  label='Check-In'
                  type='date'
                  value={formValues.tab3.hotelCheckIn}
                  onChange={handleChange('tab3', 'hotelCheckIn')}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <TextField
                  fullWidth
                  label='Check-Out'
                  type='date'
                  value={formValues.tab3.hotelCheckOut}
                  onChange={handleChange('tab3', 'hotelCheckOut')}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <TextField
                  fullWidth
                  label='Travelers'
                  select
                  value={formValues.tab3.travelers}
                  onChange={handleChange('tab3', 'travelers')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PeopleIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.travelers.map((trav, i) => (
                    <MenuItem key={i} value={trav}>
                      {trav}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}

          {tab === 4 && (
            <>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label='Destination'
                  select
                  value={formValues.tab4.destination}
                  onChange={handleChange('tab4', 'destination')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationOnIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.tripDestinations.map((dest, i) => (
                    <MenuItem key={i} value={dest}>
                      {dest}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label='Trip Type'
                  select
                  value={formValues.tab4.tripType}
                  onChange={handleChange('tab4', 'tripType')}
                >
                  {data.tripTypes.map((type, i) => (
                    <MenuItem key={i} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label='Group Size'
                  select
                  value={formValues.tab4.groupSize}
                  onChange={handleChange('tab4', 'groupSize')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PeopleIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  {data.travelers.map((trav, i) => (
                    <MenuItem key={i} value={trav}>
                      {trav}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}

          <Grid size={{ xs: 12, sm: 3 }}>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant='contained'
              size='large'
              sx={{
                height: '100%',
                backgroundColor: '#5b2e91',
                borderRadius: 2,
                '&:hover': { backgroundColor: '#4a2574' }
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
