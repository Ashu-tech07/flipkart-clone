import { Box, Grid } from '@mui/material'
import React from 'react'

export const ImageLanding = (props) => {

    const { imageData } = props
  return (
    <>
    <Grid container spacing={1} sx={{
        bgcolor: 'background.paper',
        mt:1, mb:1, justifyContent:'center',
    }}>
        {
            imageData.map((item)=>(
                <Grid item xs={3.9}>
                    <Box sx={{
                        width:'100%',
                    }}> 
                    <img alt='offers_image' src={item.imgUrl} style={{
                        width:'100%',
                        height:'auto',
                    }}/>
                    </Box>
                    </Grid>
            ))
        }
    </Grid>
      
    </>
  )
}

