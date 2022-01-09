import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NewMember from '../admin/NewMember';
import MemberList from '../admin/MemberList';
import NewClient from '../admin/NewClient';
import ClientList from '../admin/ClientList';
import NewProduct from '../admin/NewProduct';
import ProductInfo from '../admin/ProductInfo';

const Drafts = () => {
    return (
        <div>
            <h1><SupervisorAccountIcon/>가열로 데이터 모니터링</h1>
        </div>
    );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    > 
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%' }}>
        <h1><SupervisorAccountIcon fontsize='large'/> 관리자 페이지</h1>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="회원 관리" {...a11yProps(0)} />
          <Tab label="코일 정보" {...a11yProps(1)} />
          <Tab label="고객사 관리" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <NewMember/>
        <MemberList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewProduct /><br/>
        <ProductInfo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NewClient /><br/>
        <ClientList/>
      </TabPanel>
    </Box>
  );
}
