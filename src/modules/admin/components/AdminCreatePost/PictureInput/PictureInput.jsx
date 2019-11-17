import React from 'react';
import PropTypes from 'prop-types';

function PictureInput({ setFieldValue }) {
  return (
    <>
      <input
        onChange={(event) => {
          setFieldValue('picture', event.currentTarget.files[0]);
        }}
        name="picture"
        multiple
        type="file"
        style={{ display: 'none' }}
      />
    </>
  );
}

PictureInput.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
};

export default PictureInput;
