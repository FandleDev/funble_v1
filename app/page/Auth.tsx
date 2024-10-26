import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Auth = ({ navigation }) => {
  return (
    <Grid
        container
        alignItems={'center'}
        height={'100%'}
        justifyContent={'center'}
        width={'100%'}
    >
        <Grid item xs={6}>
            <Box sx={ { background: "#FFF", borderRadius: "30px", display: "flex", justifyContent: "center", alignItems: "center" } } height={'400px'}>
                asd
            </Box>
        </Grid>
    </Grid>
  );
};
export default Auth;