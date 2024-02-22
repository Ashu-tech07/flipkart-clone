import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { CommonCard } from '../../components/CommonCard'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';



export const CardLanding = (props) => {
    const { heading, largeImageUrl, data}= props
  return (
    <>
      <Grid container justifyContent={'space-evenly'}>
        <Grid item container spacing={1} sm={12} md={4} sx={{
            bgcolor: 'background.paper',
            mt:2, pb:2, ml:0.5
        }}>
            <Box sx={{
               display:'inline-flex',
               width:'97%',
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
      
            {
                data.map((item)=>{
                    return(
                        <Grid item xs={6} sm={3} md={6}>
                            <CommonCard imageUrl={item.imgUrl} title={item.title} subtitle={item.subtitle} 
                            customStyle={item.customStyle} />
                        </Grid>
                    )
                })
            }
           
        </Grid>
        <Grid item md={7.5} sx={{
            bgcolor: 'background.paper',
            mt:2, display:{  md:'flex',sm:'none', xs:'none'},
        }}>
            <Box sx={{
                width:'100%',
                height:'100%'
            }}>
                <img alt='large_image' src={largeImageUrl} style={{
                    height:'100%',
                    width:'100%'
                    }}/>
            </Box>
        </Grid>
      </Grid>
    </>
  )
}

