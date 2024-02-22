import React from "react";
import { Box } from "@mui/material";
export default function Carouselitems3() {
  return (
    <Box style={{ marginTop: "5%" }}>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}>
        <Box style={{ width: "30rem" }}>
          <img
            style={{ width: "75%" }}
            src="https://rukminim2.flixcart.com/image/128/128/xif0q/monitor/l/c/t/mon-0061-hd-18-5-2023-mon-0061-frontech-original-imagugmzhgwt97qf.jpeg?q=70"
            alt="img"
          />
        </Box>
        <Box style={{ width: "30rem" }}>
          <img
            style={{ width: "75%" }}
            src="https://rukminim2.flixcart.com/image/128/128/xif0q/monitor/6/v/l/19-inch-hd-led-monitor-hd-19-2023-e-mo-a01-enter-original-imags2xcb2qzw6zt.jpeg?q=70"
            alt="img"
          />
        </Box>
        <Box style={{ width: "30rem" }}>
          <img
            style={{ width: "75%" }}
            src="https://rukminim2.flixcart.com/image/128/128/xif0q/monitor/o/v/r/-original-imagwb8qbz7gmuga.jpeg?q=70"
            alt="img"
          />
        </Box>
      </Box>
    </Box>
  );
}
