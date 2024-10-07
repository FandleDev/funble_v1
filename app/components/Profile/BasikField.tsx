import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type Props = {
    icon: ReactNode;
    title: string;
    value: string;
};

const BasikField = ({
    icon,
    title,
    value,
}: Props) => {
    return (
        <Box sx={{ mx: 3 }} borderBottom={'1px solid #FFF'}>
            <Grid container px={3} py={2}>
                <Grid item xs={1} display={'flex'} alignItems={'center'}>
                    <>{ icon }</>
                </Grid>
                <Grid item xs={10}>
                    <Stack>
                    <Typography variant='subtitle1' fontWeight={'bold'}>{title}</Typography>
                    <Typography variant='subtitle2' color='#575757'>{value ?? "Не указан"}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={1} justifyContent={'end'} alignItems={'center'} display={'flex'}>
                    <Box>
                        <KeyboardArrowRightIcon />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default BasikField;