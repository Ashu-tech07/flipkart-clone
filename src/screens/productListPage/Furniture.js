import { Box, Button, Divider, Stack, Typography, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { furnitureData } from './assets/Data';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Furniture = () => {
    return (
        <div>
            <Box mt={10} mb={1} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>India Ka Furniture Studio</Typography>
                <Stack direction='column'>
                    <img src="https://rukminim2.flixcart.com/flap/2000/2000/image/b0b70c455a5202db.jpg?q=50" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/flap/2000/2000/image/30687a1b03d924b9.jpg?q=50" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/flap/2000/2000/image/675cb2a989de4867.jpg?q=50" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/flap/2000/2000/image/2de0b40dac8dc2b5.jpg?q=50" alt="#" width='100%' />
                </Stack>
                <Box sx={styles.box1}>
                    {
                        furnitureData.map((data) => {
                            return (
                                <>
                                    <Stack direction='row' p={2} alignItems='center'>
                                        <Stack direction='column' flexGrow={1}>
                                            <Typography fontSize='22px' fontWeight='500'>{data.brandName}</Typography>
                                        </Stack>
                                        <Button variant='contained' sx={styles.btn1}>View All</Button>
                                    </Stack>
                                    <Divider />
                                    <Stack direction={'row'} spacing={6} p={3} sx={styles.stack}>
                                        {
                                            Object.values(data.details).map((product) => {
                                                return (
                                                    <Box component={Link} to={`/furniture/${product.link}`} sx={styles.productBox}>
                                                        <IconButton sx={{
                                                            position: 'relative',
                                                            left: '44%',
                                                            top: '5%'
                                                        }}> <FavoriteIcon color='disabled' sx={{
                                                            fontSize: '1.1rem'
                                                        }} /> </IconButton>
                                                        <Box component={Box} sx={styles.imgContainer}>
                                                            <img src={product.url} alt="#" style={styles.img} />
                                                        </Box>
                                                        <Typography variant='body2' fontWeight='500' align='center' color='text.primary' mt={2} sx={styles.text1}>
                                                            {product.title}
                                                        </Typography>
                                                        <Typography variant='body2' color='rgb(0 128 0)' sx={styles.text1}>
                                                            {product.tagline}
                                                        </Typography>
                                                        <Typography variant='body2' color='text.secondary' sx={styles.text1}>
                                                            {product.byLine}
                                                        </Typography>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Stack>
                                    <Divider />
                                </>
                            )
                        })
                    }
                </Box>
            </Box>

            <Box mt={5} sx={styles.box1}>
                <Stack direction='column' spacing='10px' py={4} px={3}>
                    <Typography fontSize='16px' fontWeight='bold' >Question and Answers</Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.How do I know a towel is of good quality?<br />
                        A.A good-quality towel is much heavier when compared to how heavy it appears, and it is more absorbent.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.How to lighten up my old sofa?<br />
                        A.
                        Scatter a few cushions. The fabric and the texture of the pillows are a great way to set the mood. They come in numerous styles, colours, textures, and patterns.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What kind of fabric is recommended for a carpet or rug?<br />
                        A.Wool is a commonly used fabric when it comes to carpets and rugs. It can hold warmth, feel soft, and be a great noise insulator.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.How to select the colour of a sofa throw?<br />
                        A.A sofa throw colour can contrast the furniture colour, making the piece of furniture more appealing.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Does a glass table need linen?<br />
                        A.Table linen can enhance the look of the table, be it glass or wood, and it is a great item for enhancing home furnishing.
                    </Typography>
                </Stack>
            </Box>
        </div>
    )
}

const styles = {
    box1: {
        backgroundColor: 'background.paper',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)',
        borderTop: '2px solid #eaeaea',
    },
    btn1: {
        height: '2.3rem',
        fontSize: '0.8rem',
        fontWeight: '500',
        borderRadius: '2px',
    },
    stack: {
        overflowX: 'auto',
        '&::-webkit-scrollbar': {  // For Chrome, Safari and Opera
            display: 'none'
        },
        scrollbarWidth: 'none',  // For Firefox
        msOverflowStyle: 'none',  // For Internet Explorer and Edge
    },
    productBox: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '0.4rem',
        alignItems: 'center',
        textDecoration: 'none',
        maxWidth: '11rem',
    },
    imgContainer: {
        position: 'relative',
        width: 150,
        height: 150,
        margin: '0 auto',
    },
    img: {
        position: 'absolute',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    text1: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 'inherit',
        textOverflow: 'ellipsis',
    },
    text2: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 'inherit',
        textOverflow: 'ellipsis',
        textDecoration: 'line-through',
    },
}