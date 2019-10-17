import {
  Box,
  Card,
  Typography,
  CardContent,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import styles from './site-detail.module.scss';

const dummySite = {
  name: 'Iglesia San Nicolás',
  location: 'Av. El Progreso #35',
  age: 'Más de 300 años',
  publicCode: 'a4g2jfh',
  description: 'Donec et molestie eros, eu ultrices elit. Quisque tempus'
            + 'lacinia pellentesque. Fusce vel rutrum sapien, non viverra'
            + 'arcu. Ut eu libero at augue porttitor malesuada quis sit amet'
            + 'libero.',
  imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/'
        + 'Iglesia_de_San_Nicolas_de_Tolentino_%28Barranquilla%29.jpg/275px-Iglesia_de_San_Nicolas_de_Tolentino_%28Barranquilla%29.jpg',
};

function SiteDetail() {
  return (
    <Box className={styles.wrapper}>
      <Card className={styles.card}>
        <Box display="flex" flexDirection="column">
          <CardContent className={styles['card-content']}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <Box mr={0.5}>
                <IconButton
                  aria-label="delete"
                  component={Link}
                  to="/sites"
                >
                  <KeyboardArrowLeftIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography variant="h5">
                {dummySite.name}
              </Typography>
            </Box>
            <Box mb={0.75}>
              <Typography variant="subtitle2" color="textSecondary">
                {`${dummySite.age} |  ${dummySite.location}`}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              align="justify"
              color="textSecondary"
            >
              {dummySite.description}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          className={styles['cover-image']}
          component="img"
          image={dummySite.imgSrc}
          title={`Picture of the ${dummySite.name} site`}
        />
      </Card>
    </Box>
  );
}

export default SiteDetail;
