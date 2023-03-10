import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress sx={{color:'green'}} />
    </div>
  );
};

export default Loader;
 