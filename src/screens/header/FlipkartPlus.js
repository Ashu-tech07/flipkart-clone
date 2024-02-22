import { Box, Container } from '@mui/material'
import React from 'react'
import {pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13} from './Assets'



export default function FlipkartPlus() {
    return (
        <>
            <Container maxWidth='md' sx={{mt:12}}>
                <Box sx={Styles.box}>
                    <img alt='fk_p1' src={pic1} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p2' src={pic2} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic3} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic4} style={Styles.image}/>
                </Box>
                <Box  sx={Styles.box}>
                    <img alt='fk_p3' src={pic5} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic6} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic7} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic8} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic9} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic10} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic11} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic12} style={Styles.image}/>
                </Box>
                <Box sx={Styles.box}>
                    <img alt='fk_p3' src={pic13} style={Styles.image}/>
                </Box>
               
            </Container>
        </>
    )
}

const Styles={
    image:{
        width:'100%',
        height:'auto',
    },
    box:{
        mb:-0.5,
    },
}