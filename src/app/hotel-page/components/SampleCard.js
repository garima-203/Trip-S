'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CircularProgress, Grid } from '@mui/material';

const CarRentalsPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCars = async () => {
    try {
      const response = await fetch(
        'https://booking-com15.p.rapidapi.com/api/v1/cars/searchCarRentals?pick_up_latitude=40.6397018432617&pick_up_longitude=-73.7791976928711&drop_off_latitude=40.6397018432617&drop_off_longitude=-73.7791976928711&pick_up_time=10:00&drop_off_time=10:00&driver_age=30&currency_code=USD&location=US',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'booking-com15.p.rapidapi.com', 
          },
        }
      );

      if (!response.ok) {
        throw new Error('API Error');
      }

      const data = await response.json();
      setCars(data?.results || []);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Grid container spacing={2} padding={4}>
      {cars.map((car, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ minHeight: 200, boxShadow: 4, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {car.car_model || 'Car Model'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {car.price || 'Not Available'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Provider: {car.provider_name || 'N/A'}
              </Typography>
              {/* Add more fields as needed */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CarRentalsPage;
