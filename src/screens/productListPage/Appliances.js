import { Box, Button, Divider, Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { applianceProducts } from './assets/Data';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Appliances = () => {
    return (
        <div>
            <Box my={11} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Big Year End Sale</Typography>
                <Stack direction='column'>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/3600/3600/image/fe6b7a9a36348ed6.png?q=80" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/10fc9c5815e63e5f.jpg?q=50" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/5ffb9311fcbf0584.jpg?q=50" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/d99bdd1b59fd0d9a.jpg?q=50" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/4cef20b1747c8766.jpg?q=50" alt="#" width='100%' />
                </Stack>
                <Box sx={styles.box1}>
                    {
                        applianceProducts.map((data) => {
                            return (
                                <>
                                    <Stack direction='row' p={2} alignItems='center'>
                                        <Stack direction='column' flexGrow={1}>
                                            <Typography fontSize='22px' fontWeight='500'>{data.brandName}</Typography>
                                            <Typography variant='body2' color='#b2b2b2'>Best Deals to SHOP</Typography>
                                        </Stack>
                                        <Button variant='contained' sx={styles.btn1}>View All</Button>
                                    </Stack>
                                    <Divider />
                                    <Stack direction={'row'} spacing={6} p={3} sx={styles.stack}>
                                        {
                                            Object.values(data.details).map((product) => {
                                                return (
                                                    <Box component={Link} to={`/appliance/${product.link}`} sx={styles.productBox}>
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
                                                        <Typography variant='body2' align='center' color='text.primary' fontWeight='500' mt={2} sx={styles.text1}>
                                                            {product.title}
                                                        </Typography>
                                                        <Typography variant='body2' color='rgb(0 128 0)' sx={styles.text1}>
                                                            {product.tagline}
                                                        </Typography>
                                                        <Typography variant='body2' color='text.secondary' sx={styles.text1}>
                                                            {product.byline}
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
}