// 'use client'
// import React, { useState } from 'react'
// import {
//   Box,
//   Typography,
//   Tabs,
//   Tab,
//   Paper,
//   TextField,
//   MenuItem,
//   InputAdornment,
//   Button
// } from '@mui/material'
// import LocationOnIcon from '@mui/icons-material/LocationOn'
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
// import PeopleIcon from '@mui/icons-material/People'
// import SearchIcon from '@mui/icons-material/Search'

// export default function BannerSearch () {
//   const [tab, setTab] = useState(0)

//   const handleTabChange = (event, newValue) => {
//     setTab(newValue)
//   }

//   return (
//     <Box>
//       {/* Banner */}
//       <Box
//         sx={{
//           position: 'relative',
//           backgroundImage: `url('/banner.jpg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '350px',
//           borderRadius: 3,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: 'white',
//           textAlign: 'center',
//           px: 2
//         }}
//       >
//         <Typography variant='h3' fontWeight='bold'>
//           Your Trip Starts Here
//         </Typography>

//         {/* Tab Bar */}
//         <Box
//           sx={{
//             position: 'absolute',
//             bottom: -28,
//             left: '50%',
//             transform: 'translateX(-50%)',
//             bgcolor: '#3b4451',
//             borderRadius: 10,
//             px: 2
//           }}
//         >
//           <Tabs value={tab} onChange={handleTabChange} textColor='inherit'>
//             <Tab label='Hotels' />
//             <Tab label='Flights' />
//             <Tab label='Trains' />
//             <Tab label='Flight + Hotel' />
//             <Tab label='Airport Transfers' />
//             <Tab label='Attractions' />
//           </Tabs>
//         </Box>
//       </Box>

//       {/* Search Form */}
//       <Paper
//         elevation={3}
//         sx={{
//           mt: 6,
//           p: 3,
//           maxWidth: 1200,
//           mx: 'auto',
//           borderRadius: 3
//         }}
//       >
//         {tab === 0 && (
//           // Hotels Form
//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: {
//                 xs: '1fr',
//                 sm: '1fr 1fr',
//                 md: 'repeat(5, 1fr)'
//               },
//               gap: 2,
//               alignItems: 'center'
//             }}
//           >
//             <TextField
//               fullWidth
//               label='Location'
//               defaultValue='New York, USA'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Check In'
//               placeholder='dd-mm-yy'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Check Out'
//               placeholder='dd-mm-yy'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Guests'
//               defaultValue='2 Adults | 1 Room'
//               select
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <PeopleIcon />
//                   </InputAdornment>
//                 )
//               }}
//             >
//               <MenuItem value='2 Adults | 1 Room'>2 Adults | 1 Room</MenuItem>
//               <MenuItem value='1 Adult | 1 Room'>1 Adult | 1 Room</MenuItem>
//               <MenuItem value='3 Adults | 2 Rooms'>3 Adults | 2 Rooms</MenuItem>
//             </TextField>
//             <Button
//               variant='contained'
//               size='large'
//               sx={{
//                 borderRadius: 2,
//                 height: '100%',
//                 whiteSpace: 'nowrap',
//                 backgroundColor: '#5b2e91',
//                 '&:hover': {
//                   backgroundColor: '#4a2574'
//                 }
//               }}
//               startIcon={<SearchIcon />}
//             >
//               Search
//             </Button>
//           </Box>
//         )}

//         {tab === 1 && (
//           // Flights Form
//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: {
//                 xs: '1fr',
//                 sm: '1fr 1fr',
//                 md: 'repeat(5, 1fr)'
//               },
//               gap: 2,
//               alignItems: 'center'
//             }}
//           >
//             <TextField
//               fullWidth
//               label='From'
//               defaultValue='New York'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='To'
//               defaultValue='London'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Departure'
//               placeholder='dd-mm-yy'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Return'
//               placeholder='dd-mm-yy'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Passengers'
//               defaultValue='2 adults'
//               select
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <PeopleIcon />
//                   </InputAdornment>
//                 )
//               }}
//             >
//               <MenuItem value='1 adult'>1 adult</MenuItem>
//               <MenuItem value='2 adults'>2 adults</MenuItem>
//               <MenuItem value='3 adults'>3 adults</MenuItem>
//             </TextField>
//             <Button
//               variant='contained'
//               size='large'
//               sx={{
//                 borderRadius: 2,
//                 height: '100%',
//                 whiteSpace: 'nowrap',
//                 backgroundColor: '#5b2e91',
//                 '&:hover': {
//                   backgroundColor: '#4a2574'
//                 }
//               }}
//               startIcon={<SearchIcon />}
//             >
//               Search
//             </Button>
//           </Box>
//         )}

//         {tab === 2 && (
//           // Trains Form
//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: {
//                 xs: '1fr',
//                 sm: '1fr 1fr',
//                 md: 'repeat(4, 1fr)'
//               },
//               gap: 2,
//               alignItems: 'center'
//             }}
//           >
//             <TextField
//               fullWidth
//               label='From'
//               placeholder='Departure Station'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='To'
//               placeholder='Arrival Station'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Departure'
//               placeholder='dd-mm-yy'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <Button
//               variant='contained'
//               size='large'
//               sx={{
//                 borderRadius: 2,
//                 height: '100%',
//                 whiteSpace: 'nowrap',
//                 backgroundColor: '#5b2e91',
//                 '&:hover': {
//                   backgroundColor: '#4a2574'
//                 }
//               }}
//               startIcon={<SearchIcon />}
//             >
//               Search
//             </Button>
//           </Box>
//         )}

//         {tab === 3 && (
//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: {
//                 xs: '1fr',
//                 sm: '1fr 1fr',
//                 md: 'repeat(4, 1fr)'
//               },
//               gap: 2,
//               alignItems: 'center'
//             }}
//           >
//             <TextField
//               fullWidth
//               label='Pickup Location'
//               placeholder='New York Airport, USA'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Pickup Date'
//               placeholder='dd-mm-yy'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Return Date'
//               placeholder='dd-mm-yy'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <Button
//               variant='contained'
//               size='large'
//               sx={{
//                 borderRadius: 2,
//                 height: '100%',
//                 whiteSpace: 'nowrap',
//                 backgroundColor: '#5b2e91',
//                 '&:hover': {
//                   backgroundColor: '#4a2574'
//                 }
//               }}
//               startIcon={<SearchIcon />}
//             >
//               Search
//             </Button>
//           </Box>
//         )}

//         {tab === 4 && (
//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: {
//                 xs: '1fr',
//                 sm: '1fr 1fr',
//                 md: '2fr 2fr 1fr'
//               },
//               gap: 2,
//               alignItems: 'center'
//             }}
//           >
//             <TextField
//               fullWidth
//               label='Destination'
//               placeholder='New York, USA'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Date'
//               placeholder='dd-mm-yy'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <Button
//               variant='contained'
//               size='large'
//               sx={{
//                 borderRadius: 2,
//                 height: '100%',
//                 whiteSpace: 'nowrap',
//                 backgroundColor: '#5b2e91',
//                 '&:hover': {
//                   backgroundColor: '#4a2574'
//                 }
//               }}
//               startIcon={<SearchIcon />}
//             >
//               Search
//             </Button>
//           </Box>
//         )}

//         {tab === 5 && (
//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: {
//                 xs: '1fr',
//                 sm: '1fr 1fr',
//                 md: 'repeat(5, 1fr)'
//               },
//               gap: 2,
//               alignItems: 'center'
//             }}
//           >
//             <TextField
//               fullWidth
//               label='From'
//               placeholder='New York'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='To'
//               placeholder='London'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Departure'
//               placeholder='02 January'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Return'
//               placeholder='09 January'
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position='start'>
//                     <CalendarTodayIcon />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <TextField
//               fullWidth
//               label='Travelers'
//               placeholder='2 adults'
//               select
//               defaultValue='2 adults'
//             >
//               <MenuItem value='1 adult'>1 adult</MenuItem>
//               <MenuItem value='2 adults'>2 adults</MenuItem>
//               <MenuItem value='3 adults'>3 adults</MenuItem>
//               <MenuItem value='Family'>Family</MenuItem>
//             </TextField>
//             <Button
//               variant='contained'
//               size='large'
//               sx={{
//                 gridColumn: {
//                   xs: 'span 1',
//                   md: 'span 5'
//                 },
//                 borderRadius: 2,
//                 mt: { xs: 1, md: 0 },
//                 backgroundColor: '#5b2e91',
//                 '&:hover': {
//                   backgroundColor: '#4a2574'
//                 }
//               }}
//               startIcon={<SearchIcon />}
//             >
//               Search
//             </Button>
//           </Box>
//         )}
//       </Paper>
//     </Box>
//   )
// }
