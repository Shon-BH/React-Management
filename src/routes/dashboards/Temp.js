import * as React from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TempChart1 from '../../graphs/TempChart1';
import TempChart2 from '../../graphs/TempChart2';
import TempChart3 from '../../graphs/TempChart3';
import TempChart4 from '../../graphs/TempChart4';
import TempTableTest from '../../tables/TempTable';

const Temp = () => {
    return (
        <div>
            <h1><FormatListBulletedIcon />온도 통계</h1>
            
            <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={3}>
              {/* Chart1 */}
            <Grid item xs={15} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <TempChart1 />
                </Paper>
              </Grid>
              {/* Chart2 */}
              <Grid item xs={15} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <TempChart2 />
                </Paper>
              </Grid>
              {/* Chart3 */}
              <Grid item xs={15} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <TempChart3 />
                </Paper>
              </Grid>
              {/* Chart4 */}
              <Grid item xs={15} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <TempChart4 />
                </Paper>
              </Grid>
                    
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <TempTableTest />
                    </Paper>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default Temp;