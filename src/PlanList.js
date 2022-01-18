import * as React from 'react';
import Box from '@mui/material/Box';
import OrderTable from './tables/OrderTable';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function NestedGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1><FormatListBulletedIcon />상세정보</h1>
                <OrderTable/>
        </Box>
    );
}