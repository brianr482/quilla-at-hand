import React from 'react';
import PropTypes from 'prop-types';
import { Box, Badge } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './AdminAppBar.module.scss';
import profilePicture from '../../../../assets/perfil.jpg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function AdminAppBar({
  anchorEl,
  handleClose,
  handleDrawerToggle,
  handleMenu,
}) {
  const classes = useStyles();
  const open = Boolean(anchorEl);
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            className={styles['profile-wrapper']}
            color="inherit"
          >
            <Box className={styles['profile-wrapper']}>
              <Typography
                className={styles.username}
                variant="subtitle1"
                noWrap
              >
                Alvaro Uribe
              </Typography>
              <Badge
                classes={{ badge: styles.badge }}
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                variant="dot"
              >
                <Avatar
                  alt="Foto Perfil"
                  src={profilePicture}
                  className={styles.picture}
                />
              </Badge>
            </Box>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
            <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

AdminAppBar.propTypes = {
  handleClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.oneOfType([PropTypes.object]),
  handleDrawerToggle: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired,
};

AdminAppBar.defaultProps = {
  anchorEl: null,
};

export default AdminAppBar;
