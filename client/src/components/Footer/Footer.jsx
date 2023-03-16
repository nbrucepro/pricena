import React from "react";
import { Typography, Link, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    color: "#333",
    padding: theme.spacing(4), 
     position: "relative",
    bottom: 0,
    width: "95%",
    marginTop:"5rem" 
  },
  link: {
    fontSize: "1.1rem",
    fontWeight: "normal",
    margin: `0 ${theme.spacing(5)}px`,
    color:'black',
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "none",
    },
    paddingBottom: 15,
  }, 
  link2: {
    fontSize: "0.8rem", 
    fontWeight: "normal", 
    margin: `0 ${theme.spacing(5)}px`,
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "none",
    },
  }, 
}));

 
function Footer() {
  const classes = useStyles();
 
  return (
    <Box className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            color="inherit"
            href="#" 
            className={classes.link}
          >
            <a href="#">
              <Typography className={classes.link}>Categories</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Mobile Phones</Typography>
            </a> 
            {/* what's gonna woatat nithin il ahawwa */} 
            <a href="#">
              <Typography className={classes.link2}>Tablets</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Smart Watches</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Computers</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Cameras</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Gaming Consoles</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Home Appliances</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Women Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Men Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Fifa 17 UAE</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Samsung TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>
                Michael kors Bags
              </Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>All Categories</Typography>
            </a>
            {/* </Link>    */}
          </Box>
        </Grid>
        <Grid item>
        <Box
            sx={{ display: "flex", flexDirection: "column" }}
            color="inherit"
            href="#"
            className={classes.link}
          >
            <a href="#">
              <Typography className={classes.link}>Popular on Pricena</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>OnePlus 3T</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>OnePlus Two</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Smart Watches</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Computers</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Cameras</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Gaming Consoles</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Home Appliances</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Women Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Men Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Fifa 17 UAE</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Samsung TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>
                Michael kors Bags
              </Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>All Categories</Typography>
            </a>
            {/* </Link>    */}
          </Box>
        </Grid>
        <Grid item>
        <Box
            sx={{ display: "flex", flexDirection: "column" }}
            color="inherit"
            href="#"
            className={classes.link}
          >
            <a href="#">
              <Typography className={classes.link}>Pricena</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>About us</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>OnePlus Two</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Smart Watches</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Computers</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Cameras</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Gaming Consoles</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Home Appliances</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Women Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Men Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Fifa 17 UAE</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Samsung TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>
                Michael kors Bags
              </Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>All Categories</Typography>
            </a>
            {/* </Link>    */}
          </Box>
        </Grid>
        <Grid item>
        <Box
            sx={{ display: "flex", flexDirection: "column" }}
            color="inherit"
            href="#"
            className={classes.link}
          >
            <a href="#">
              <Typography className={classes.link}>Newsletter</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>About us</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>OnePlus Two</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Smart Watches</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Computers</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Cameras</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Gaming Consoles</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Home Appliances</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Women Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Men Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Fifa 17 UAE</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Samsung TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>
                Michael kors Bags
              </Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>All Categories</Typography>
            </a>
            {/* </Link>    */}
          </Box>
        </Grid>
        <Grid item>
        <Box
            sx={{ display: "flex", flexDirection: "column" }}
            color="inherit"
            href="#"
            className={classes.link}
          >
            <a href="#">
              <Typography className={classes.link}>Pricena Middle East</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>About us</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>OnePlus Two</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Smart Watches</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Computers</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Cameras</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Gaming Consoles</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Home Appliances</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Women Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Men Fashion</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Fifa 17 UAE</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>Samsung TVs</Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>
                Michael kors Bags
              </Typography>
            </a>
            <a href="#">
              <Typography className={classes.link2}>All Categories</Typography>
            </a>
            {/* </Link>    */}
          </Box>
        </Grid>
      </Grid>
      {/* Disclaimer: Pricena.com only acts as online price comparison website, all product names, trademarks, service marks, logos, brands, industrial models and designs featured or referred to within this site are the sole property of their respective owners and/or right holders and are only provided for the purpose of this site. Pricena.com acts as independent party and shall not be considered the representative, agent, employee, sponsor, joint venture partner or otherwise of such owners or right holders. © 2023 Pricena FZ LLC. All rights reserved. */}
    </Box>
  );
}

export default Footer;
