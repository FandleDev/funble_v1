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
import { Box } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VerifiedIcon from '@mui/icons-material/Verified';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import BasikField from "@/components/Profile/BasikField";
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import TranslateIcon from '@mui/icons-material/Translate';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import SchoolIcon from '@mui/icons-material/School';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ToysIcon from '@mui/icons-material/Toys';
import LooksIcon from '@mui/icons-material/Looks';
import BlockSettings from '@/components/Profile/BlockSettings';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const Profile = () => {
  return (
    <Grid container paddingTop={5} width={'100%'} height={1} overflow={'scroll'} >
        <BlockSettings title='Мои фото'>
          <Grid item container gap={5} px={2} justifyContent={'center'}>
              <Box sx={{ background: "#FFF", width: "200px", height: "200px", borderRadius: '30px', display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <PhotoCameraIcon fontSize='large' color="disabled" />
              </Box>
              <Box sx={{ background: "#FFF", width: "200px", height: "200px", borderRadius: '30px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <PhotoCameraIcon fontSize='large' color="disabled"/>
              </Box>
              <Box sx={{ background: "#FFF", width: "200px", height: "200px", borderRadius: '30px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <PhotoCameraIcon fontSize='large' color="disabled"/>
              </Box>
              <Box sx={{ background: "#FFF", width: "200px", height: "200px", borderRadius: '30px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <PhotoCameraIcon fontSize='large' color="disabled"/>
              </Box>
              <Box sx={{ background: "#FFF", width: "200px", height: "200px", borderRadius: '30px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <PhotoCameraIcon fontSize='large' color="disabled"/>
              </Box>
              <Box sx={{ background: "#FFF", width: "200px", height: "200px", borderRadius: '30px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <PhotoCameraIcon fontSize='large' color="disabled"/>
              </Box>
          </Grid>
        </BlockSettings>
        <BlockSettings title='Био'>
          <Box sx={{ background: "#FFF", borderRadius: "20px",  mx: 3}}>
            <Grid container px={3} py={2} xs={12}>
              <Stack direction="row"
                spacing={2}
                sx={{
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant='subtitle2'>Вы подтвердили свой профиль</Typography>
                <ModeEditOutlineIcon />
              </Stack>
            </Grid>
          </Box>
        </BlockSettings>
        <BlockSettings title='Вирификация'>
          <Box sx={{ background: "#FFF", borderRadius: "20px",  mx: 3}}>
            <Grid container gap={2} px={3} py={2}>
              <VerifiedIcon color='info' />
              <Stack>
                <Typography variant='subtitle1' fontWeight={'bold'}>Верификация пройдена</Typography>
                <Typography variant='subtitle2' color='#575757' pt={2}>Вы подтвердили свой профиль</Typography>
              </Stack>
            </Grid>
          </Box>
        </BlockSettings>
        <BlockSettings title='Я здесь для'>
          <Box sx={{ background: "#FFF", borderRadius: "20px",  mx: 3}}>
            <Grid container px={3} py={2}>
              <Grid item xs={1}>
                <AutoAwesomeOutlinedIcon color='disabled' />
              </Grid>
              <Grid item xs={10}>
                <Stack>
                  <Typography variant='subtitle1' fontWeight={'bold'}>Укажите статус</Typography>
                  <Typography variant='subtitle2' color='#575757' pt={2}>Пользователи будут видеть его в ленте</Typography>
                </Stack>
              </Grid>
              <Grid item xs={1} justifyContent={'end'} alignItems={'center'} display={'flex'}>
                <Box>
                  <KeyboardArrowRightIcon color='disabled' />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </BlockSettings>
        <BlockSettings title="Основное">
          <BasikField title="Город" value='Екатеринбург' icon={<LocationCityOutlinedIcon color='disabled' />} />
          <BasikField title="Мировоззрение" value='Екатеринбург' icon={<SelfImprovementIcon color='disabled' />} />
          <BasikField title="Знак зодиака" value='Екатеринбург' icon={<LooksIcon color='disabled' />} />
          <BasikField title="Рост" value='Екатеринбург' icon={<SquareFootIcon color='disabled' />} />
          <BasikField title="Образование" value='Екатеринбург' icon={<SchoolIcon color='disabled' />} />
          <BasikField title="Дети" value='Екатеринбург' icon={<ToysIcon color='disabled' />} />
          <BasikField title="Языки" value='Екатеринбург' icon={<TranslateIcon color='disabled' />} />
          <BasikField title="Алкоголь" value='Екатеринбург' icon={<LocalBarIcon color='disabled' />} />
          <BasikField title="Курение" value='Екатеринбург' icon={<SmokingRoomsIcon color='disabled' />} />
        </BlockSettings>
        <Grid item width={'100%'}  display={'block'}>
          <Typography paddingLeft={3} variant={'h5'}>Основное</Typography>
          
        </Grid>
    </Grid>
  );
};
export default Profile;