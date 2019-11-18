import React, { useState } from 'react';
import {
  Box, Typography, IconButton, TextField, Avatar,
} from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import useForm from 'react-hook-form';
import SaveIcon from '@material-ui/icons/Save';
import * as yup from 'yup';
import styles from './AdminCreatePost.module.scss';
import ModuleContainer from '../ModuleContainer/ModuleContainer';
import PictureInput from './PictureInput/PictureInput';
import InputContainer from './InputContainer/InputContainer';

const postTypes = ['Sitio Turístico', 'Restaurante', 'Tips'];

const defaultValues = {
  name: '',
  type: '',
  description: '',
  picture: undefined,

};
const validationSchema = yup.object().shape({
  name: yup.string().required('Este campo es obligatorio'),
  description: yup.string().required('Este campo es obligatorio'),
  type: yup.string().required('Este campo es obligatorio'),
  file: yup
    .mixed()
    .required('Este campo es obligatorio')
    .test('filesLength', 'Este campo es obligatorio', (value) => value && value.length > 0),
});


const AdminCreatePost = () => {
  const [selectedType, setSelectedType] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [uploadFileFlag, setUploadFileFlag] = useState(false);
  const {
    handleSubmit, register, errors, setValue, getValues,
  } = useForm({
    defaultValues,
    validationSchema,
  });
  React.useEffect(() => {
    register({ name: 'type' });
  }, [register]);

  const onProgressChange = (progress) => {
    console.log(progress);
  };

  const onFileUpload = (url) => {
    console.log(url);
  };

  const onSubmit = (values) => {
    setUploadFileFlag(true);
  };
  return (
    <ModuleContainer
      title="Crear Publicación"
      edit={() => (
        <IconButton disableRipple type="submit" onClick={handleSubmit(onSubmit)} className={styles.add}>
          <SaveIcon fontSize="inherit" />
        </IconButton>
      )}
      className={styles.root}
    >
      <form className={styles.container} noValidate>
        <InputContainer
          className={`${styles.wrapper}`}
          subtitle="Nombre de Publicación"
          error={errors.name && errors.name.message}
        >
          <TextField
            type="input"
            name="name"
            error={!!errors.name}
            fullWidth
            inputRef={register({
              required: 'Campo requerido',
            })}
            variant="outlined"
            placeholder="Nombre"
            inputProps={{ 'aria-label': 'nombre publicación' }}
          />
        </InputContainer>
        <InputContainer className={`${styles.wrapper}`} select subtitle="Tipo de Publicación" error={errors.type && errors.type.message}>
          {postTypes.map((type) => (
            <Box
              key={type}
              onClick={() => {
                setSelectedType(type);
                setValue('type', type, true);
              }}
              className={type === selectedType ? styles['type-active'] : styles.type}
            >
              <Typography className={styles.text} component="h1" variant="subtitle2">
                {type}
              </Typography>
            </Box>
          ))}
        </InputContainer>
        <Box className={`${styles.wrapper} ${styles['row-wrapper']}`}>
          <InputContainer
            className={`${styles.wrapper} ${styles.description}`}
            subtitle="Descripción de Publicación"
            error={errors.description && errors.description.message}
          >
            <TextField
              error={!!errors.description}
              variant="outlined"
              type="input"
              name="description"
              multiline
              rows={8}
              inputRef={register({
                required: 'Campo requerido',
              })}
              className={styles.input}
              placeholder="Descripción"
              inputProps={{ 'aria-label': 'nombre publicación' }}
            />
          </InputContainer>
          <InputContainer className={`${styles.wrapper} ${styles.image}`} file subtitle="Imagen de Publicación" error={errors.file && errors.file.message}>
            {selectedFile ? (
              <Box className={styles.imageBox}>
                <img alt="Preview File" src={URL.createObjectURL(getValues().file[0])} className={styles['file-preview']} />
              </Box>
            )
              : (
                <>
                  <AddAPhotoIcon className={styles.icon} />
                  <Typography className={styles['icon-footer']} component="h1" variant="subtitle2">
                      Agregar Imagen
                  </Typography>
                </>
              )}
            <PictureInput
              register={register}
              onFileUpload={onFileUpload}
              onProgressChange={onProgressChange}
              uploadFileFlag={uploadFileFlag}
              setSelectedFile={setSelectedFile}
            />

          </InputContainer>
        </Box>
      </form>
    </ModuleContainer>
  );
};

export default AdminCreatePost;
