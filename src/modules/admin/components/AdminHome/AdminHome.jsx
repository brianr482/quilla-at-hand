import React from 'react';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Box from '@material-ui/core/Box';
import styles from './AdminHome.module.scss';
import ModuleCard from './ModuleCard/ModuleCard';
import ModuleContainer from '../ModuleContainer/ModuleContainer';

const AdminHome = () => (
  <ModuleContainer title="Inicio">
    <Box className={styles.content}>
      <ModuleCard
        title="Sitios Turisticos"
        url="sitios"
        icon={<RoomOutlinedIcon className={styles.icon} />}
      />
      <ModuleCard
        title="Restaurantes"
        url="restaurantes"
        icon={<FastfoodOutlinedIcon className={styles.icon} />}
      />
      <ModuleCard
        title="Tips"
        url="tips"
        icon={<EmojiObjectsOutlinedIcon className={styles.icon} />}
      />
    </Box>
  </ModuleContainer>
);

export default AdminHome;
