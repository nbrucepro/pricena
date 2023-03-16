import { Box, Typography } from "@material-ui/core";
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
  featprodcont: {
    width: "91%",
    // height: "27rem",
    background: "white",
    margin:'auto'
  },
  featprodcontelement: {
    width: "100%",
    height: "100%",
    display: "flex",
    margin: "auto",
  },
  fttext: {
    width:'12%',
    color: "black",
    fontWeight:'700',
    display: "flex",
    marginLeft: "1%",
  },
  ftline: {
    width: "85%",
    marginLeft:"-1%",
    // border: "1px solid #9a9a9b",    
    border: "1px solid #dadae8",    
    // border: "3px solid #f6f6f8",    
    // #9a9a9a
    height:'0.1%',
    margin:'auto',     
  },
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
          <Typography style={{display:'flex',paddingTop:'1%'}}>
            <span className={classes.fttext}>Featured Products</span>            
            <span className={classes.ftline}></span>
          </Typography>
          <Box className={classes.featprodcontelement}>
            <Featprod
              imaga="../../assets/fproduct/samsungwmachine.png"
              texta="Samsung Front Load Washing Machine"
            />
            <Featprod
              imaga="../../assets/fproduct/samsunglaxys23.png"
              texta={"Samsung Galaxy S23 Ultra Dual SIM 12GB"}
            />
            <Featprod
              imaga="../../assets/fproduct/apple iphone 14 pro.png"
              texta={"Apple iPhone 14 Pro 128GB 5G Silver"}
            />
            <Featprod
              imaga="../../assets/fproduct/iPhone13.png"
              texta={"iPhone 13 4GB RAM 256GB 5G Blue"}
            />
            <Featprod
              imaga="../../assets/fproduct/apple iphone 14 pro max.png"
              texta={"Apple iPhone 14 Pro Max 128GB 5G Space"}
            />
            <Featprod
              imaga="../../assets/fproduct/samsunglaxys238gb.png"
              texta={"Samsun Galaxy S23 Dual SIM 8GB RAM"}
            />
          </Box>
        </Box>
        
        <Box className={classes.featprodcont}>
          <Typography style={{display:'flex',paddingTop:'1%'}}>
            <span className={classes.fttext}>Featured Products</span>            
            <span className={classes.ftline}></span>
          </Typography>
          <Box className={classes.featprodcontelement}>
            <Featprod
              imaga="../../assets/fproduct/samsungwmachine.png"
              texta="Samsung Front Load Washing Machine"
            />
            <Featprod
              imaga="../../assets/fproduct/samsunglaxys23.png"
              texta={"Samsung Galaxy S23 Ultra Dual SIM 12GB"}
            />
            <Featprod
              imaga="../../assets/fproduct/apple iphone 14 pro.png"
              texta={"Apple iPhone 14 Pro 128GB 5G Silver"}
            />
            <Featprod
              imaga="../../assets/fproduct/iPhone13.png"
              texta={"iPhone 13 4GB RAM 256GB 5G Blue"}
            />
            <Featprod
              imaga="../../assets/fproduct/apple iphone 14 pro max.png"
              texta={"Apple iPhone 14 Pro Max 128GB 5G Space"}
            />
            <Featprod
              imaga="../../assets/fproduct/samsunglaxys238gb.png"
              texta={"Samsun Galaxy S23 Dual SIM 8GB RAM"}
            /> 
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Landing;
