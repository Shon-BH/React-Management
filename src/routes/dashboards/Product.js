import * as React from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ProductChart from '../../graphs/ProductChart';
import ProducTable from '../../tables/ProductTable';

const Product = () => {
    return (
        <div>
            <h1><FormatListBulletedIcon />코일 불량률</h1>
            
            <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={3}>
                <Grid item xs={15} md={6} lg={6}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 330,
                        }}
                    >
                        <ProductChart />
                    </Paper>
                </Grid>
                    
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <ProducTable />
                    </Paper>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default Product;