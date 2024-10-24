import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia, Grid } from '@mui/material';

const MenuSection = () => {
  const menuItems = [
    { title: 'Pasta', description: 'Delicious pasta with tomato sauce.', image: 'https://via.placeholder.com/150' },
    { title: 'Burger', description: 'Juicy beef burger with cheese.', image: 'https://via.placeholder.com/150' },
    { title: 'Salad', description: 'Fresh garden salad with vinaigrette.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Our Menu</Typography>
      <Grid container spacing={2}>
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardMedia component="img" height="140" image={item.image} alt={item.title} />
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuSection;
