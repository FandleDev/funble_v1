import React from 'react';
import {Text, View} from 'react-native';
import Grid from '@mui/material/Grid';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import ChatCard from '@/components/ChatCard';

const Chat = () => {
  return (
    <Grid container paddingTop={5} width={'100%'} height={1} >
        <Grid item width={'100%'}>
            <Typography paddingLeft={3} variant={'h5'}>Чаты</Typography>
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
        </Grid>
    </Grid>
  );
};
export default Chat;