import { Typography, Box, Paper } from "@mui/material";
import React from "react";
import { electronicsData } from "../../data/LandingData";
function Bestelectronic() {
  return (
    <>
      <Paper style={{ marginTop:"5%"}}>
        <Box style={Elecronic.headingBox}>
          <Typography style={Elecronic.head1}>Best Electronic</Typography>
          <Typography style={Elecronic.head2}>10 Items</Typography>
        </Box>
      </Paper>
      <Paper style={{}}>
        <Box style={Elecronic.gridContainer}>
          {electronicsData.map((item) => {
            return (
               <Box style={{display:"flex",marginTop: "5%"}}>
                  <Box style={{margin:"auto"}}>
                    <Box style={{height:"200px"}}>
                    <img style={{height:"201px",width:"200px"}} src={item.imgUrl} alt="test"/>
                    </Box>
                    <Typography style={{fontSize:"20px",fontWeight:"300",textAlign:"center"}}>{item.title}</Typography>
                    <Typography style={{textAlign:"center"}}>{item.subtitle}</Typography>
                  </Box>
               </Box>
            );
          })}     
        </Box>
      </Paper>
    </>
  );
}
export default Bestelectronic;
const Elecronic = {
  headingBox: {
    padding: "32px",
    borderBottom: "1px solid rgba(0,0,0,.1)",
    textAlign: "center",
  },
  head1: {
    fontWeight: "500",
    fontSize: "24px",
  },
  head2: {
    marginTop: "8px",
    opacity: ".5",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "65px",
  },
};
