import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { CommonCard } from '../../components/CommonCard';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const responsive = {
   desktop: {
       breakpoint: { max: 3000, min: 1024 },
       items: 6,
       
   },
   tablet: {
       breakpoint: { max: 1024, min: 600 },
       items: 5,
       
   },
   mobile: {
       breakpoint: { max: 600, min: 0 },
       items: 2,
      
   }
};


//    custom right arrow 
const CustomRightArrow = ({ onClick }) => {
   return (
       <Button style={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-around',
           top: 'calc(50% - 52px)',
           right: 0,
           position: 'absolute',
           backgroundColor: 'hsla(0,0%,100%,.98)',
           boxShadow: '0 1px 5px 0 rgba(0,0,0,.11)',
           transition: 'opacity .1s ease-in',
           minWidth: '3rem',
           maxWidth: '3rem',
           height: '6.2rem',
           borderTopRightRadius: 0,
           borderBottomRightRadius: 0,
       }} color='inherit' onClick={() => onClick()}>
           <ArrowForwardIosIcon />
       </Button>
   );
};

   // custom left arrow button 
const CustomLeftArrow = ({ onClick }) => {
       return (
           <Button style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-around',
               top: 'calc(50% - 52px)',
               left: 0,
               position: 'absolute',
               backgroundColor: 'hsla(0,0%,100%,.98)',
               boxShadow: '0 1px 5px 0 rgba(0,0,0,.11)',
               transition: 'opacity .1s ease-in',
               minWidth: '3rem',
               maxWidth: '3rem',
               height: '6.2rem',
               borderTopLeftRadius: 0,
               borderBottomLeftRadius: 0,
           }} color='inherit' onClick={() => onClick()}>
               <ArrowBackIosIcon />
           </Button>
       );
   };
export const CommonLandingComp = (props) => {
    const {heading, data,}= props;
  return (
    <>
       {/* Component main page started  */}
   <Grid container sx={{
       justifyContent:'center'
     }}>
        <Grid item xs={11.7} sx={{
           bgcolor: 'background.paper',
           mt:2, pb:2,
       }}>
           <Box sx={{
               display:'inline-flex',
               width:'98%',
               pt:2, pl:1, pb:1
           }}>
               <Typography sx={{
                   flexGrow:1,
                   fontSize: '20px',
                   fontWeight:500,
                   pl:1
               }}>
                  {heading}
               </Typography>
               <ArrowCircleRightRoundedIcon sx={{
                   color:'#0288d1',                  
               }}/>
           </Box>
      
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
               infinite={false}
               //rewind={true} //enable if infinite=false
               // rewindWithAnimation={true}
              // autoPlay={true}
               //autoPlaySpeed={2000}
               slidesToSlide={5}
               ssr={true}
               removeArrowOnDeviceType={["tablet", "mobile"]}
               // showDots={true}
               // customTransition="all .5"
               customTransition='transform 800ms ease-in-out'
               //transitionDuration={800}
           >
               {
                   data.map( (item) => {
                       return(
                           <Box sx={{pl:'8px', pr:'8px'}}>
                           <CommonCard imageUrl={item.imgUrl} 
                           title={item.title} 
                           subtitle={item.subtitle} 
                           customStyle={item.customStyle}/>
                           </Box>
                       )
                      })
               }
              
           </Carousel>
       </Grid>
     </Grid>

   {/* component main page closed  */}
    </>
  )
}



