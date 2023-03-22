import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { usePromiseTracker } from "react-promise-tracker";

export default function Spinner(props) {

    const { promiseInProgress } = usePromiseTracker();

    return (
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
            {
                (promiseInProgress === true) ?

                    <CircularProgress
                    variant='indeterminate'
                    color="success"
                    size={100}
                    thickness={4}
                    />
                :
                    null
            }
        </Box>
    );
}