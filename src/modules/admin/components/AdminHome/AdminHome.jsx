import React from 'react';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import styles from './AdminHome.module.scss';
import ModuleCard from './ModuleCard/ModuleCard';
import ModuleContainer from '../ModuleContainer/ModuleContainer';

const AdminHome = () => (
  <ModuleContainer title="Inicio">
    <ModuleCard
      title="Sitios Turisticos"
      icon={<RoomOutlinedIcon className={styles.icon} />}
    />
    <ModuleCard
      title="Restaurantes"
      icon={<FastfoodOutlinedIcon className={styles.icon} />}
    />
    <ModuleCard
      title="Tips"
      icon={<EmojiObjectsOutlinedIcon className={styles.icon} />}
    />
  </ModuleContainer>
);

export default AdminHome;
