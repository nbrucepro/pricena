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
    height: "15rem",
    marginTop: "10px",
    marginLeft:'2.5%',
    // marginright:'2.5%',
    cursor:'pointer',
  },
  Cardmmedia:{
    // display:'flex',

    width:"90px",
    height:"80px",
    display:"flex",
    margin: 'auto',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:"10px",
    border:'1px solid gray',
    borderRadius:'50%'
  },
  Cardmmediaimg:{
    width:"80%",
    height:"40%"
  }
})); 
const Coupons = ({imaga,texta,nama}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <> 
        <Box className={classes.card}>
      <Card>
        <Box style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

        <div className={classes.Cardmmedia}>
          <img className={classes.Cardmmediaimg} src={imaga} alt="imaga" srcset="" />
        </div>
          <Typography style={{color:'gray'}} >{nama}</Typography>
        </Box>
        {/* <CardMedia
          component="img"
          className={classes.Cardmmedia} 
          image={imaga}
          alt="Paella dish"   
        /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">          
          {texta}
          </Typography>
        </CardContent>
        <CardContent>
          {/* <img src="../../assets/fproduct/carrefour.jpg" alt="" srcset="" /> */}
          <Typography style={{cursor:'pointer',marginTop:'-16%',color:"green"}} 
          >
            View eligible products
          </Typography>
        </CardContent>
      </Card>
    </Box>    
    </>
  );
};

export default Coupons;
