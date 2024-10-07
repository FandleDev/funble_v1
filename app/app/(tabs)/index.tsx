import React from 'react';
import {Text, View} from 'react-native';
import Footer from "@/components/Footer";
import { Box } from '@mui/system';
import Chat from '@/page/Chat';
import Profile from '@/page/Profile';
import Main from '@/page/Main';
const HelloWorldApp = () => {
  return (
    <Box position={'relative'} height={'100%'} sx={{ background: '#EEE' }}>
      {/* @TODO Цвет темы */}
      <Profile />
      <Footer />
    </Box>
  );
};
export default HelloWorldApp;