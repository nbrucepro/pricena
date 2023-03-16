import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Featprod from "../Body/Featprod";
import Coupons from "../Body/Coupons";
import RecommendePhones from "../Body/RecommendePhones";
import Featured from "../Body/Featured";
import MostPopular from "../Body/MostPopular";
import Loader from "../Loader";

const useStyles = makeStyles((theme) => ({
  boxcontainer: {
    marginTop: "2rem",
  },
  featprodcont: {
    width: "91%",
    // height: "27rem",
    background: "white",
    margin: "auto",
  },
  featprodcontelement: {
    width: "100%",
    height: "100%",
    display: "flex",
    margin: "auto",
  },
  fttext: {
    width: "12%",
    color: "black",
    fontWeight: "700",
    display: "flex",
    marginLeft: "1%",
  },
  ftline: {
    width: "85%",
    marginLeft: "-1%",
    // border: "1px solid #9a9a9b",
    border: "1px solid #dadae8",
    // border: "3px solid #f6f6f8",
    // #9a9a9a
    height: "0.1%",
    margin: "auto",
  },
  rfttext: {
    width: "25%",
    color: "black",
    fontWeight: "700",
    display: "flex",
    marginLeft: "1%",
  },
  rftline: {
    width: "72%",
    marginLeft: "-1%",
    border: "1px solid #dadae8",
    height: "0.1%",
    margin: "auto",
  },
}));
const Landing = () => {
  const classes = useStyles();
  const [amload, setamload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setamload(false);
    },[5000]); 
  }, []);
  return (
    <>
      {amload ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Box className={classes.container}>
            <Box className={classes.boxcontainer}>
              <Banner />
            </Box>
            <Box className={classes.featprodcont}>
              <Typography style={{ display: "flex", paddingTop: "1%" }}>
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
              <Typography style={{ display: "flex", paddingTop: "1%" }}>
                <span className={classes.fttext}>Coupons </span>
                {/* see all */}
                <span className={classes.ftline}></span>
              </Typography>
              <Box className={classes.featprodcontelement}>
                <Coupons
                  imaga="../../assets/coupon/amazon.png"
                  texta={`10% off for Citi Mastercard "CB10MA"`}
                  nama={"Amazon"}
                />
                <Coupons
                  imaga="../../assets/fproduct/carrefour.jpg"
                  texta={"10% off AED coupon from Carrefour"}
                  nama={"Carrefour"}
                />
                <Coupons
                  imaga="../../assets/coupon/gap.png"
                  texta={"10% off AED coupon from Gap"}
                  nama={"Gap"}
                />
                <Coupons
                  imaga="../../assets/coupon/iherb.png"
                  texta={"10% off AED coupon from iHerb"}
                  nama={"iHerb"}
                />
                <Coupons
                  imaga="../../assets/coupon/asteronline.png"
                  texta={"10% off AED coupon from Aster Online"}
                  nama={"Aster Online"}
                />
                <Coupons
                  imaga="../../assets/coupon/huawei.png"
                  texta={"10% off AED coupon from Huawei"}
                  nama={"Huawei"}
                />
              </Box>
            </Box>

            {/* RecommendePhones.jsx */}
            <Box className={classes.featprodcont}>
              <Typography style={{ display: "flex", paddingTop: "1%" }}>
                <span className={classes.rfttext}>
                  Recommended for you in Mobile Phones
                </span>
                <span className={classes.rftline}></span>
              </Typography>
              <Box className={classes.featprodcontelement}>
                <RecommendePhones
                  imaga="../../assets/fproduct/samsunglaxys23.png"
                  texta={"Samsung Galaxy S23 Ultra Dual SIM 12GB"}
                  price={"4090"}
                  compshop={"8"}
                />
                <RecommendePhones
                  imaga="../../assets/recommended/samsung s22.png"
                  texta={"Samsung Galaxy S23 Ultra Dual SIM 12GB"}
                  price={"3000"}
                  compshop={"9"}
                />
                <RecommendePhones
                  imaga="../../assets/fproduct/apple iphone 14 pro.png"
                  texta={"Apple iPhone 14 Pro 128GB 5G Silver"}
                  price={"3849"}
                  compshop={"2"}
                />
                <RecommendePhones
                  imaga="../../assets/fproduct/iPhone13.png"
                  texta={"iPhone 13 4GB RAM 256GB 5G Blue"}
                  price={"3609"}
                  compshop={"6"}
                />
                <RecommendePhones
                  imaga="../../assets/fproduct/apple iphone 14 pro max.png"
                  texta={"Apple iPhone 14 Pro Max 128GB 5G Space"}
                  price={"3189"}
                  compshop={"5"}
                />
                <RecommendePhones
                  imaga="../../assets/fproduct/samsunglaxys238gb.png"
                  texta={"Samsun Galaxy S23 Dual SIM 8GB RAM"}
                  price={"3929"}
                  compshop={"12"}
                />
              </Box>
            </Box>
            {/* RecommendePhones.jsx */}
            {/* Featured.jsx */}
            <Box className={classes.featprodcont}>
              <Typography style={{ display: "flex", paddingTop: "1%" }}>
                <span className={classes.fttext}>Featured</span>
                <span className={classes.ftline}></span>
              </Typography>
              <Box className={classes.featprodcontelement}>
                <Featured
                  imaga="../../assets/featuredimg/img1.png"
                  texta={"Nivea Men vitality Fresh Shower Gel (250 Ml) BBD7008"}
                  price={"13"}
                  compshop={"5"}
                />
                <Featured
                  imaga="../../assets/featuredimg/img2.png"
                  texta={"Nivea Natural Fairness Face Wash (100 Ml)"}
                  price={"14"}
                  compshop={"4"}
                />
                <Featured
                  imaga="../../assets/featuredimg/img3.png"
                  texta={"Sunsilk Shampoo Black Shine (400Ml)"}
                  price={"14"}
                  compshop={"3"}
                />
                <Featured
                  imaga="../../assets/featuredimg/img4.png"
                  texta={"Samsung Galaxy S23 Ultra"}
                  price={"3739"}
                  compshop={"13"}
                />
                <Featured
                  imaga="../../assets/featuredimg/img5.png"
                  texta={"Anker Zolo Liberty Plus Earphones"}
                  price={"225"}
                  compshop={"3"}
                />
                <Featured
                  imaga="../../assets/featuredimg/img6.png"
                  texta={"Hugo Boss Boss Femme for Women"}
                  price={"129"}
                  compshop={"4"}
                />
              </Box>
            </Box>
            {/* Featured.jsx */}
            {/* Mostpopular .jsx */}
            <Box className={classes.featprodcont}>
              <Typography style={{ display: "flex", paddingTop: "1%" }}>
                <span className={classes.fttext}>Most Popular</span>
                <span className={classes.ftline}></span>
              </Typography>
              <Box className={classes.featprodcontelement}>
                <MostPopular
                  imaga="../../assets/mostpop/img1.png"
                  texta={"Samsung Galaxy s23 Ultra"}
                  price={"3739"}
                  compshop={"13"}
                />
                <MostPopular
                  imaga="../../assets/mostpop/img2.png"
                  texta={"Almarai Full Fat Fresh Milk 2L"}
                  price={"12"}
                  compshop={"3"}
                />
                <MostPopular
                  imaga="../../assets/mostpop/img3.png"
                  texta={`65" BU8000 Crystal UHD 4K Smart Tv 2022 UA65BU8000UXZN`}
                  price={"2197"}
                  compshop={"2"}
                />
                <MostPopular
                  imaga="../../assets/mostpop/img5.png"
                  texta={"Creed Aventus For Men"}
                  price={"495"}
                  compshop={"5"}
                />
                <MostPopular
                  imaga="../../assets/mostpop/no_image.jpg"
                  texta={
                    "Reefel Vaginal Cream 30 mL Tube with 6 Vaginal Applicators 1's"
                  }
                  price={"129"}
                  compshop={"4"}
                />

                <MostPopular
                  imaga="../../assets/mostpop/img6.png"
                  texta={"Apple MagSafe Charger"}
                  price={"92"}
                  compshop={"2"}
                />
              </Box>
            </Box>
            {/* Mostpopular .jsx */}

            <Footer />
          </Box>
        </>
      )}
    </>
  );
};

export default Landing;
