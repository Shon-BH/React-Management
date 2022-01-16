import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NestedGrid from './NestedGrid';
import { Link } from 'react-router-dom';
import Inbox from './routes/Inbox';
import Starred from './routes/Starred';
import Drafts from './routes/Drafts';
import Admin from './routes/Admin';

import { store } from './store/store';

import Temp from './routes/dashboards/Temp';
import Stock from './routes/dashboards/Stock';
import Product from './routes/dashboards/Product';
import Dashboard from './routes/dashboards/Dashboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HorizonLine from './HorizontalLine';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft({selectMenu}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);  
  const [state,dispatch] = React.useContext(store);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const subMenuList = [
    {
      text:'생산계획등록',
      link: '/'      
    },
    {
      text:'생산계획목록',
      link: '/submenu/inbox'      
    },
    {
      text:'공정 데이터 모니터링',
      link: '/submenu/starred'      
    },
    {
      text: '가열로 데이터 모니터링',
      link: '/submenu/drafts'      
    },
    // {
    //   text: '관리자',
    //   link: '/submenu/admin'      
    // },
    
  ]


  const adminSubeMenu =  {
    text: '관리자',
    link: '/submenu/admin'    
  }


  const dashMenuList = [
    {
      text:'전체 통계',
      link: '/dashmenu/dashboard'      
    },
    {
      text:'온도 통계',
      link: '/dashmenu/temp'      
    },
    {
      text: '코일 불량률 통계',
      link: '/dashmenu/product'      
    },
    {
      text: '수량 통계',
      link: '/dashmenu/stock'      
    }
  ]


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MES 열연
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />


        {state.userId === 'admin@poscoict.com' ? 
          <List>
                <ListItem button key={adminSubeMenu.text}>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <Link to={adminSubeMenu.link}>
                        <ListItemText primary={adminSubeMenu.text} />
                      </Link>
                  </ListItem> 
          </List>
        :

          <List>
                        
                {subMenuList.map((obj, index) => (
                    <ListItem button key={obj.text}>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <Link to={obj.link}>
                          <ListItemText primary={obj.text} />
                        </Link>
                    </ListItem>
                ))
                }                     
          </List>
      }

        <List>       
          {subMenuList.map((obj, index) => (
              <ListItem button key={obj.text}>
                  <ListItemIcon>
                    <WebAssetIcon/>
                  </ListItemIcon>
                  <Link to={obj.link}>
                    <ListItemText primary={obj.text} />
                  </Link>
              </ListItem>
          ))}
          <HorizonLine/>
        </List>
            {dashMenuList.map((obj, index) => (
              <ListItem button key={obj.text}>
                  <ListItemIcon>
                    <DashboardIcon/>
                  </ListItemIcon>
                  <Link to={obj.link}>
                    <ListItemText primary={obj.text} />
                  </Link>
              </ListItem>
          ))}

        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
           {
             (() => {
               switch(selectMenu){
                  case 'inbox':
                   return <Inbox />
                  case 'starred':
                    return <Starred/>
                  case 'drafts':
                    return <Drafts/>
                  case 'admin':
                    return <Admin />
                    
                  case 'dashboard':
                    return <Dashboard />
                  case 'temp':
                    return <Temp />
                  case 'stock':
                    return <Stock />
                  case 'product':
                    return <Product />      
                default:
                  return <NestedGrid/>
               }
                   
             })()
           }
      </Main>
    </Box>
  );
}