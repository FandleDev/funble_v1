import React, { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

type Props = {
    title: string;
    children: ReactNode
};

const BlockSettings = ({
    title,
    children,
}: Props) => {
    return (
        <Grid item container width={'100%'} pb={2} display={'block'}>
            <Typography paddingLeft={3} variant={'h5'} pb={2} >{ title }</Typography>
            { children }
        </Grid>
    );
};

export default BlockSettings;