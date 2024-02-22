
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

//  -> This is a common card component. You can use it in your component.
//  -> You have to pass 4 props into this. These props are imageUrl, title, subtitle & customStyle. 
//  -> You can pass true or false in customStyle props for different styles.
//  -> Eg.- <CommonCard imageUrl={'your url'} title={'your title'} subtitle={'your subtitle'} customStyle={false}/>

export const CommonCard = (props) => {
  return (
    <>    
        <Card sx={{ width:200,
        height:250, 
        border:'solid 1px #e0e0e0'}}>
      
        <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: '8.75rem',
            height:'10rem',
            objectFit: 'contain',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '8px',
            '&:hover':{
                width: '150px',
                height:'170px',
            }
        }}
          image={props.imageUrl}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom sx={{
            fontSize: (props.customStyle) ?'16px':'13px',
            color: (props.customStyle)? 'black':'grey',
            textAlign: (props.customStyle) ? 'left':'center',
          }}>
            {props.title.substr(0,17)}...
          </Typography>
          <Typography sx={{
            fontSize: (props.customStyle)? '16px':'14px',
            fontWeight:500,
            color: (props.customStyle)? 'green':'black',
            textAlign: (props.customStyle) ? 'left':'center',
          }}>
            {props.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}


