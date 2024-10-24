// src/Components/UserCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const UserCard = ({ user, onLogout }) => {
  return (
    <Card variant="outlined" sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">
          {user.email}
        </Typography>
        <Button variant="contained" color="primary" onClick={onLogout} sx={{ marginTop: 2 }}>
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
