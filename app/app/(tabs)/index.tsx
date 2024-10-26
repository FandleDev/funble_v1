import React from 'react';
import {Text, View} from 'react-native';
import Footer from "@/components/Footer";
import { Box } from '@mui/system';
import Chat from '@/page/Chat';
import Profile from '@/page/Profile';
import Main from '@/page/Main';
import Auth from '@/page/Auth';
import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Main></Main>
        <Footer></Footer>
    </>

  );
};
export default App;