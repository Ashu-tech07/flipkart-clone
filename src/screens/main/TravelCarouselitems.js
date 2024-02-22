import React from "react";
import { Box} from "@mui/material";
export default function Carouselitems1() {
  return (
    <Box style={{ marginTop: "5%" }}>
      <Box style={{ width: "100%" }}>
        <Box style={{ height: "30rem" }}>
          <img
            style={{ width: "100%", height: "30rem" }}
            src="https://rukminim2.flixcart.com/www/2000/2000/promos/06/01/2021/276bd352-f8b3-49cf-87e9-c853e6dbd5ac.jpg?q=50"
            alt="img"
          />
        </Box>
        <img
          style={{ width: "100%" }}
          src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/314d78512857f86d.png?q=50"
          alt="img"
        />
        <Box 
        style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/480/480/image/f5e49d1f18e0b545.jpg?q=50"
              alt="img"
            />
          </Box>
          <Box>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/480/480/image/1d9cd2285f4108e2.jpg?q=50"
              alt="img"
            />
          </Box>
          <Box>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/480/480/image/de221519489bb3b5.jpg?q=50"
              alt="img"
            />
          </Box>
        </Box>
        <Box>
        <img
          style={{ width: "100%" }}
          src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/e663b3a676e18a40.png?q=50"
          alt="img"
        />
        </Box>
      </Box>
    </Box>
  );
}
