/** @format */

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import logo from '../images/logobath.png';

const Navbar = ({ emailAddress, rank }) => {
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 2, sm: 2, md: 3 },

        backgroundColor: '#BFD730',
      }}>
      <Grid
        container
        alignItems='center'
        spacing={2}>
        {/* Left: Logo */}

        {/* Center: Email */}
        <Grid
          item
          xs={4}
          sm={4}
          display='flex'
          justifyContent='flex-start'>
          <Typography
            variant='h6'
            fontSize='01rem'
            sx={{
              textAlign: 'center',
              fontWeight: 'thin',
              color: '#fff',
              ml: 2,
              padding: '4px',
              borderRadius: '4px',
              backgroundColor: '#989898',
            }}>
            {emailAddress}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          display='flex'
          justifyContent='center'>
          <img
            src={logo}
            alt='Logo'
            style={{
              width: '50px',
              height: 'auto',
            }}
          />
        </Grid>

        {/* Right: Rank */}
        <Grid
          item
          xs={4}
          sm={4}
          display='flex'
          justifyContent='flex-end'>
          <Typography
            variant='h6'
            fontSize='1rem'
            sx={{
              textAlign: 'center',
              fontWeight: 'thin',
              color: '#fff',
              mr: 2,
              padding: '4px',
              borderRadius: '4px',
              backgroundColor: '#989898',
            }}>
            {rank}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
