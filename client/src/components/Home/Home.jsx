import { Box } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Featprod from "../Banner/Featprod";

const useStyles = makeStyles((theme) => ({
  boxcontainer: {
    marginTop: "2rem",
  },
  featprodcont:{
    display:'flex',
    width: "100%",
    height: "34rem",
    background:'white'
  }
}));
const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.container}>
        <Box className={classes.boxcontainer}>
          <Banner />
        </Box>
        <Box className={classes.featprodcont}>
          <Featprod  />
          <Featprod />
          <Featprod /> 
          <Featprod  />
          <Featprod />
          <Featprod /> 
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Landing;
