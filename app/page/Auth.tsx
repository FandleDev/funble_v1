import React from 'react';
import {Text, View} from 'react-native';
import Grid from '@mui/material/Grid';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const HelloWorldApp = () => {
  return (
    <Grid container position={'absolute'} bottom={0} sx={{ background: '#FFF' }} height={55} borderRadius={'20px 20px 0 0'}>
        <Grid item xs={3} justifyContent={'center'} display={'flex'} alignItems={'center'}padding={'0!important'}>
            <IconButton aria-label="Message">
                <SmsOutlinedIcon/>
            </IconButton>
        </Grid>
        <Grid item xs={3} justifyContent={'center'} display={'flex'}  alignItems={'center'}padding={'0!important'}>
            <IconButton aria-label="Favorite">
                <Badge color="error" badgeContent={1} max={99}>
                    <FavoriteBorderIcon/>
                </Badge>
            </IconButton>
        </Grid>
        <Grid item xs={3} justifyContent={'center'} display={'flex'}  alignItems={'center'} padding={'0!important'}>
            <IconButton aria-label="Favorite">
                <GpsFixedIcon/>
            </IconButton>
        </Grid>
        <Grid item xs={3} justifyContent={'center'} display={'flex'}  alignItems={'center'} padding={'0!important'}>
            <IconButton aria-label="Favorite">
                <PersonOutlineIcon/>
            </IconButton>
        </Grid>
    </Grid>
  );
};
export default HelloWorldApp;