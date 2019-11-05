import React from 'react';
import {
  Box, Typography, InputBase,
} from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import styles from './AdminCreatePost.module.scss';
import ModuleContainer from '../ModuleContainer/ModuleContainer';

const postTypes = ['Sitio Turístico', 'Restaurante', 'Tips'];

const AdminCreatePost = () => {
  const [activeType, setActiveType] = React.useState(null);

  return (
    <ModuleContainer title="Crear Publicación" edit className={styles.root}>
      <Box className={styles.container}>
        <Box className={styles.wrapper}>
          <Typography className={styles.subtitle} component="h1" variant="h6">
            Nombre de Publicación
          </Typography>
          <Box className={styles['input-wrapper']}>
            <InputBase
              className={styles.input}
              placeholder="Nombre"
              inputProps={{ 'aria-label': 'nombre publicación' }}
            />
          </Box>
        </Box>
        <Box className={styles.wrapper}>
          <Typography className={styles.subtitle} component="h1" variant="h6">
            Tipo de Publicación
          </Typography>
          <Box className={styles.types}>
            {postTypes.map((type) => (
              <Box key={type} onClick={() => setActiveType(type)} className={type === activeType ? styles['type-active'] : styles.type}>
                <Typography className={styles.text} component="h1" variant="subtitle2">
                  {type}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={`${styles.wrapper} ${styles['row-wrapper']}`}>
          <Box className={`${styles.wrapper} ${styles.description}`}>
            <Typography className={styles.subtitle} component="h1" variant="h6">
            Descripción de Publicación
            </Typography>
            <Box className={styles['input-wrapper']}>
              <InputBase
                multiline
                rows={8}
                className={styles.input}
                placeholder="Descripción"
                inputProps={{ 'aria-label': 'nombre publicación' }}
              />
            </Box>
          </Box>
          <Box className={`${styles.wrapper} ${styles.image}`}>
            <Typography className={styles.subtitle} component="h1" variant="h6">
            Imagen de Publicación
            </Typography>
            <Box component="label" className={styles['input-wrapper']}>
              <AddAPhotoIcon className={styles.icon} />
              <Typography className={styles.text} component="h1" variant="subtitle2">
              Agregar Imagen
              </Typography>
              <input
                multiple
                type="file"
                style={{ display: 'none' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ModuleContainer>
  );
};

export default AdminCreatePost;
