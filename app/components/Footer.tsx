import React from 'react';
import {Text, View} from 'react-native';
import Grid from '@mui/material/Grid';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const Footer = () => {
  return (
    <Grid
        container
        borderRadius={ '20px 20px 0 0' }
        bottom={ 0 }
        height={ 55 }
        position={ 'absolute' }
        sx={ { background: '#FFF' } }
    >
        <Grid 
            item
            xs={ 4 }
            alignItems={ 'center' }
            display={ 'flex' }
            justifyContent={ 'center' }
            p={ '0!important' }
        >
            <a href='/chat'>
                <IconButton aria-label="Message">
                    <Badge color="error" badgeContent={1} max={99}>
                        <SmsOutlinedIcon/>
                    </Badge>
                </IconButton>
            </a>
        </Grid>
        <Grid 
            item
            xs={ 4 }
            alignItems={ 'center' }
            display={ 'flex' }
            justifyContent={ 'center' }
            p={ '0!important' }
        >
            <IconButton aria-label="Favorite">
                <GpsFixedIcon/>
            </IconButton>
        </Grid>
        <Grid 
            item
            xs={ 4 }
            alignItems={ 'center' }
            display={ 'flex' }
            justifyContent={ 'center' }
            p={ '0!important' }
        >
            <a href='/profile'>
                <IconButton aria-label="Favorite">
                    <PersonOutlineIcon/>
                </IconButton>
            </a>
        </Grid>
    </Grid>
  );
};
export default Footer;