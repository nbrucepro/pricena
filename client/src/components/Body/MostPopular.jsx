import React, { useState } from "react";
import { styled } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box, makeStyles } from "@material-ui/core";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  // transition: theme.transitions.create('transform', {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

const useStyles = makeStyles((theme) => ({
  card: {
    width: "15rem",
    height: "25rem",
    marginTop: "10px",
    marginLeft:'2.5%'
  },
  Cardmmedia:{
    width:"100%",
    margin: 'auto',
    cursor:'pointer',
    paddingTop:"10px"
  }
})); 
const MostPopular = ({imaga,texta,price}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <> 
        <Box className={classes.card}>
      <Card>
        <CardMedia
          component="img"
        //   width={10}
        //   height={10} okay tothis whynyo 
          className={classes.Cardmmedia} 
        //   width="0"     
          image={imaga}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">          
          {texta}
          </Typography>
        </CardContent>
        <CardContent>
          {/* <img src="../../assets/fproduct/carrefour.jpg" alt="" srcset="" /> */}
          <Typography style={{cursor:'pointer',marginTop:'-16%',color:"blue"}} 
          > 
            AED {price} 
          </Typography>
        </CardContent>
        <CardContent>
          {/* <img src="../../assets/fproduct/carrefour.jpg" alt="" srcset="" /> */}
          <Typography style={{cursor:'pointer',marginTop:'-16%',color:"gray",fontSize:"14px"}}  
          > 
            Compare 2 online shops
          </Typography>
        </CardContent>
      </Card>
    </Box>    
    </>
  );
};

export default MostPopular;
