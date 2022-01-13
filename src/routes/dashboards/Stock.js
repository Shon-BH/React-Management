import * as React from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import StockChart from '../../graphs/StockChart';
import StockTable from '../../tables/StockTable';

const Stock = () => {
    return (
        <div>
            <h1><FormatListBulletedIcon />주문 수량-재고 비교</h1>

            <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={3}>
                <Grid item xs={15} md={6} lg={6}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 300,
                        }}
                    >
                        <StockChart />
                    </Paper>
                </Grid>
                
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <StockTable />
                    </Paper>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default Stock;