import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../data/data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Custom arrow components
const CustomRightArrow = ({ onClick }) => {
  return (
    <Button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        top: "calc(50% - 48px)",
        right: 0,
        position: "absolute",
        backgroundColor: "hsla(0,0%,100%,.98)",
        boxShadow: "0 1px 5px 0 rgba(0,0,0,.11)",
        transition: "opacity .1s ease-in",
        minWidth: "2.5rem",
        maxWidth: "2.5rem",
        height: "5.5rem",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}
      color="inherit"
      onClick={() => onClick()}
    >
      <ArrowForwardIosIcon fontSize="0.5rem" color="action" />
    </Button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <Button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        top: "calc(50% - 48px)",
        left: 0,
        position: "absolute",
        backgroundColor: "hsla(0,0%,100%,.98)",
        boxShadow: "0 1px 5px 0 rgba(0,0,0,.11)",
        transition: "opacity .1s ease-in",
        minWidth: "2.5rem",
        maxWidth: "2.5rem",
        height: "5.5rem",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}
      color="inherit"
      onClick={() => onClick()}
    >
      <ArrowBackIosIcon fontSize="0.5rem" color="action" />
    </Button>
  );
};
export const CarouselComp = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{
        margin: matches ? "0 0 1rem 0" : "0 1rem 1rem 1rem",
      }}
    >
      <Carousel
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        // dotListClass="react-multi-carousel-dot-list"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        infinite={true}
        // rewind={true} //enable if infinite=false
        // rewindWithAnimation={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        slidesToSlide={1}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // showDots={true}
        // customTransition="all .5"
        customTransition="transform 800ms ease-in-out"
        transitionDuration={800}
      >
        {bannerData.map((data) => (
          <Link to={data.path}>
            <img src={data.url} alt="#" width="100%" style={styles.image} />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
const styles = {
  image: {
    maxHeight: 250,
  },
};
