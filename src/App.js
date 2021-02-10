import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';

import Routes from './routes';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#000',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: '#00a3d4',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: '#00a3d4',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  colorWhite: {
    color: '#fff'
  }
}));

function App() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenMenu(false);
  };

  const handleClick = () => {
    setOpenMenu(!openMenu);
    setOpen(true);
  };

  const handleMenuClick = (type) => {
    history.push(type)
  }

  const handleCart = () => {
    history.push('/cart');
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <span className={classes.toolbarSection}>
            <Typography variant="h6" noWrap>
              Smart Shopping
            </Typography>
            <IconButton className={classes.colorWhite} onClick={handleCart}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </span>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
        <img src='ss-logo.png' width="50%" alt="logo"/>
          <IconButton onClick={handleDrawerClose} className={classes.colorWhite}>
            {theme.direction === 'rtl' ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <List className={classes.colorWhite}>
            <ListItem button onClick={()=>handleMenuClick('/')}>
              <ListItemIcon><HomeOutlinedIcon className={classes.colorWhite}/></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemIcon><ShoppingCartOutlinedIcon className={classes.colorWhite} /></ListItemIcon>
              <ListItemText primary="Products" />
              {openMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding >
                <ListItem button className={classes.nested} onClick={()=>handleMenuClick('/vegetables')}>
                  <ListItemIcon />
                  <ListItemText primary="Vegetables" />
                </ListItem>
                <ListItem button className={classes.nested} onClick={()=>handleMenuClick('/fruits')}>
                  <ListItemIcon />
                  <ListItemText primary="Fruits" />
                </ListItem>
                <ListItem button className={classes.nested} onClick={()=>handleMenuClick('/households')}>
                  <ListItemIcon />
                  <ListItemText primary="Household" />
                </ListItem>
              </List>
            </Collapse>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Routes />
      </main>
    </div>
  )
}

export default App;