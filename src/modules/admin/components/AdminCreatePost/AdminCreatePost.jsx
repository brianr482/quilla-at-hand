import React from 'react';
import {
  Box, Typography, InputBase, IconButton,
} from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {
  Formik, Form, Field,
} from 'formik';
import SaveIcon from '@material-ui/icons/Save';
import styles from './AdminCreatePost.module.scss';
import ModuleContainer from '../ModuleContainer/ModuleContainer';
import PictureInput from './PictureInput/PictureInput';

const postTypes = ['Sitio Turístico', 'Restaurante', 'Tips'];

const initialValues = {
  name: '',
  type: '',
  description: '',
  picture: undefined,

};


let submit = null;
const bindSubmit = (submitForm) => {
  submit = submitForm;
};

const handleSubmit = (e) => {
  if (submit) {
    submit(e);
  }
};
const AdminCreatePost = () => (
  <ModuleContainer
    title="Crear Publicación"
    edit={() => (
      <IconButton onClick={handleSubmit} disableRipple type="submit" className={styles.add}>
        <SaveIcon fontSize="inherit" />
      </IconButton>
    )}
    className={styles.root}
  >
    <Box className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
        }}
      >
        {({
          setFieldValue, values, submitForm,
        }) => {
          bindSubmit(submitForm);
          return (
            <Form>
              <Box className={styles.wrapper}>
                <Typography className={styles.subtitle} component="h1" variant="h6">
                  Nombre de Publicación
                </Typography>
                <Box className={styles['input-wrapper']}>
                  <Field
                    type="input"
                    name="name"
                    as={InputBase}
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
                    <Box key={type} onClick={() => setFieldValue('type', type)} className={type === values.type ? styles['type-active'] : styles.type}>
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
                    <Field
                      type="input"
                      name="description"
                      as={InputBase}
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
                    <PictureInput setFieldValue={setFieldValue} />
                  </Box>
                </Box>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  </ModuleContainer>
);

export default AdminCreatePost;
