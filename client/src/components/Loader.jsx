import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', width:'100%',height:'100%',marginTop:'25%'}}> 
      <CircularProgress sx={{color:'green'}} />
    </div>
  );
};

export default Loader;
// display: 'flex', justifyContent: 'center', alignItems: 'center',