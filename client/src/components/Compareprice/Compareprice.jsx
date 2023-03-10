import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  Divider,
  Grid,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
// import FormGroup from '@mui/material/FormGroup';
import axios from "axios";
// import './Compareprice.css'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
    marginTop: 20,
    width: "70rem",
    marginBottom: 20,
    marginLeft: "12rem",
  },
  breaka: {
    //  width:100,
    marginTop: 22,
  },
  label: {
    fontWeight: "bold",
    marginRight: 460,
    color: "blue",
    // color: "#4c4c4c",
    width:"35%",
    marginBottom:8
    // display:'inline-block'  
    
  },
  spana:{   
    color: "grey",
    marginLeft:9,
    fontSize:12
  }, 
  value: {
    color: "#666666",
    marginRight: 300,
  },
  header: {
    color: "#4c4c4c",
    fontWeight: "bold",
    marginBottom: 20,
    marginRight: 440,
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  formgroupa: {
    display: "flex",
    marginRight: 150,
    marginTop: 20,
    flexDirection: "row",
  },
  formControla: {
    width: 122,
    marginLeft: 10,
  },
}));

const ProductDetails = ({ product }) => {
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [pname,setpname] = useState('AED 2599');

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    if(color){
      if(color=='blue'){
        setpname('AED 3747.96')
      }
      if(color=='grey'){
        setpname('AED 3118.77')
      }
      if(color=='black'){
        setpname('AED 1899')
      }
      if(color=='green'){
        setpname('AED 3038.99')
      }
      if(color=='sliver'){
        setpname('AED 3220')
      }
    }
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const classes = useStyles();
  const [prod,setprod]= useState([]); 
  useEffect(() => {
    const token =
      "eyJraWQiOiIwMWU5MGEwOS1kZmZkLTRjNzItOGQ2ZC01ODNkOWFiOWM1NGEiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJwbXdzLWFwcGxpY2F0aW9uLWlkOjU3MjMiLCJhenAiOiJQdWJsaXNoZXJzIiwicm9sZXMiOlsiU2hvcHBpbmdBUEkiLCJSZXBvcnRpbmdBUEkiXSwiaXNzIjoiS2Vsa29vIEdyb3VwIiwiaWF0IjoxNjc4MTk2NTU5LCJqdGkiOiJiN2NlMTdlZS02OTkxLTQ3ODAtYjk1Mi1iNmY5YzZkMGQ1MjgifQ.o7ryCysrXvXH-McO_haMYYvUJuxyj06TeiOaBg19ixKyp7eulxmSnlIPCUtedHP3wPMetmSi05rGJHpwXICMA8QAHqngTtKN5U4vk3Ylo0NaZ-UtGp86YEMFHUAzcw2Bkmgax4bwe2FwXQlaZB2ywzVPVjVEPf4k-qNFCtGVB6UsM65X-vh1EHHBtqgER8WhqixWVdw44VOLlPHD9g6sfGjBzHEaDXurD3vePoyssFNcfpbeV4DtrkYJXWBYJFvU6UjcxVpn9ZyXGPBYj59gGLpet59bJpXxfvZwivFPmVdjNpPNEpBLJUSbmOhD_hCxP4qw4GqVIzG4O9jJv310imfYXI6-9wY9Scwviox31mIyh79v2WoTBuOYOKgauhPXh1XMQtlG6XOuFbdE2TV3-K9-gDxC7WzV2xlleXREVUGwRYMdFRYv9HCKt0xZOzfQuYHL2d0nuUtSFRwAis6IHze-wA4i9O9ISxFw-82i1f1tnMJlq91i_9UElHbl44rlUi8YWklhTm9W9nhhwBnhxrIbwspUqaKzUq1JXfv-xGp9vE7DzpdPnK3cWWx-M6tOHw23BSDnDHFilh3UpFgW91r7tRIfxmHHR5E5T6TwY-fyMZzvsstxclSmfJc1pvMNB7Sy2zBihhNAKcXp-RYygCkTrEwssuXrBybZja-egwY";

    try {
      axios
        .get(
          "http://localhost:3002/api/search",
          // "https://api.kelkoogroup.net/publisher/shopping/v2/search/offers?country=ae&query=Microsoft Surface Pro&fieldsAlias=minimal&facetValues=10",
          {
            headers: {
              // "Access-Control-Allow-Origin": "*",
              // "Content-type": "Application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(
          (response) => {
            var response1 = response?.data?.offers;
            const response2 = response?.data
            // console.log(response);
            const ln= response1.length; 
            // console.log(ln)
            for(let i = 0; i < ln ; i++){
              console.log(response1[i])
              // console.log(response1[i].title.split(" "))
            }
            // setprod(responsa);

          },
          (error) => {
            var status = error?.response?.status;
            console.log(status);
          }
        );
    } catch (error) {
      console.error(error);
      console.log("Server Error");
    }
  }, []);
// console.log(prod?prod:"nothing to show")
const arr1 = [];

  return (
    <Paper className={classes.card}>
      <Grid container spacing={3}>
        <Grid item xs={4} sm={4}>
          <img
            src="https://r.kelkoo.com/resize.php?country=ae&merchantId=100512102&categoryId=113501&trackingId=96986255&width=300&height=300&image=https%3A%2F%2Fwww.virginmegastore.ae%2Fmedias%2FDetail-837643-main.jpg%3Fcontext%3DbWFzdGVyfHJvb3R8NTI4MDB8aW1hZ2UvanBlZ3xoMjkvaGJiLzEwMjgzNDI2NzA5NTM0L0RldGFpbF84Mzc2NDNfX21haW4uanBnfDJmMDgwMWUxM2VjZjMyMmJkMWMxYzA3Y2NmMTZjYzE5MjRjNzhkOTNlMzUxMDdmMWFkNjJiNjRjOTI2NGFhYzg&sign=AoXjWmJpLOTsBggNeVUve2pSrUHdEYMjcq6JcLZI98c"
            alt="hi"
            className={classes.image}
          />
          {/* <img src='../../assets/logo.png' alt='hi' className={classes.image} /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h2" className={classes.header}>
            Lenovo
          </Typography>
          <Typography className={classes.label}>{pname}
          <span className={classes.spana}>From Amazon</span>         
          </Typography>
          <Typography className={classes.value}>
            Lenovo Ideapad 1 i5-SHD Laptop
          </Typography>
          <Divider className={classes.breaka} />
          <FormGroup className={classes.formgroupa}>
            <FormControl className={classes.formControla}>
              <InputLabel id="size-label">Size</InputLabel>
              <Select
                labelId="size-label"
                id="size"
                value={size}
                onChange={handleSizeChange}
              >
                <MenuItem value="small">Small</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="large">Large</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControla}>
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                value={color}
                onChange={handleColorChange}
              >
                <MenuItem value="blue">Blue</MenuItem>
                <MenuItem value="grey">Grey</MenuItem>
                <MenuItem value="black">Black</MenuItem>
                <MenuItem value="green">Green</MenuItem>
                <MenuItem value="sliver">Sliver</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControla}>
              <InputLabel id="quantity-label">Quantity</InputLabel>
              <Select
                labelId="quantity-label"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
              >
                <MenuItem
                  value="
1"
                >
                  1
                </MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
            </FormControl>
          </FormGroup> 
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;

// v16.17.1
