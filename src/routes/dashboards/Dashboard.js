import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../../graphs/Chart';
import Tables from '../../tables/TempTable';

const Dashboard = () => {
    return (
        <div>
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
                  <Chart />
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
                  <Chart />
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
                  <Chart />
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
                  <Chart />
                </Paper>
              </Grid>
              {/* Tables */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Tables />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
    );
};

export default Dashboard;