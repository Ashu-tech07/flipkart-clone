import React from "react";
import { Box, Typography } from "@mui/material";
export default function Carouselitems() {
  return (
    <Box style={{marginTop:"5%"}}>
      <Box>
        <Typography variant="h5">
          Redmi Note 13 Pro Plus Comning Soon
        </Typography>
      </Box> 
          <Box style={{width:"100%"}}>
            <img 
            style={{width:"100%"}}
              src="https://rukminim2.flixcart.com/fk-p-flap/1800/1800/image/1b213fa61a894f9b.jpg?q=80"
              alt="img"
            />
            <img
            style={{width:"100%"}}
              src="https://rukminim2.flixcart.com/fk-p-flap/2500/2500/image/f47c1a7000f8efc8.jpg?q=80"
              alt="img"
            />
            <img 
            style={{width:"100%"}}
            src="https://rukminim2.flixcart.com/fk-p-flap/1800/1800/image/e0bd99e381269d93.jpg?q=80"
            alt="img"/>
          </Box>
  
    </Box>
  );
}
