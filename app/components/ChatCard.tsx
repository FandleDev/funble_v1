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
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import Icon from '@mui/material/Icon';

const ChatCard = () => {
  return (
    <Grid container>
        {/* @TODO Цвет темы */}
        <Grid item paddingLeft={3} height={150} borderBottom={1} width={1} borderColor={'#FFF'}>
            <Stack direction="row" height={'100%'}>
                <Grid container item>
                    <Grid item xs={1}>
                        <Box display={'flex'} alignItems={'center'} height={'100%'}>
                            <Avatar alt="Remy Sharp" sx={{ width: '100px', height: '100px' }} src="https://avatars.mds.yandex.net/i?id=1a71e9e60101c16607aa85ed65941530_l-5311722-images-thumbs&n=13" />
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box display={'flex'} alignItems={'center'} height={'100%'}>
                            <Stack gap={2} pr={2}>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Typography variant='h5'>Лика</Typography>
                                    <Icon color='info'>
                                        <VerifiedRoundedIcon />
                                    </Icon>
                                </Box>
                                <Box display={'flex'} alignItems={'center'} height={'100%'}>
                                    last_message
                                </Box>
                            </Stack>
                        </Box>  
                    </Grid>
                    <Grid xs={2} justifyContent={'end'} display={'flex'} paddingRight={2} pt={4}>
                        { " read" }
                    </Grid>
                </Grid>
            </Stack>
        </Grid>
    </Grid>
  );
};
export default ChatCard;