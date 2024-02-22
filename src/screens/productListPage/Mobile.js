import { Box, Button, Divider, Stack, Typography, Grid, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { mobileProducts } from './assets/Data'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Mobile = () => {
    return (
        <div>
            <Box sx={styles.boxContainer1}>
                <Box>
                    <Typography sx={styles.h1}>
                        Mobile Phones Winter Fest Sale
                    </Typography>
                    <Typography sx={styles.text1}>
                        Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on Flipkart. Whether you’re looking for waterdrop notch screens, a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs. The information you are reading has been last updated on 29-Dec-23.
                    </Typography>
                </Box>
                <Stack direction='column' spacing={1}>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/17e6151af0b5aef3.jpg?q=50" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/39ac8320d6b035c2.png?q=50" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/6b9674d4ff87b98b.jpg?q=50" alt="#" width='100%' />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/8d12f236bd7274a2.jpg?q=50" alt="#" width='100%' />
                </Stack>
                <Grid container columnSpacing={2} pt={1}>
                    <Grid item xs={2}>
                        <Box bgcolor='background.paper' sx={styles.gridLeft}>
                            <Typography fontWeight='500' fontSize='1.125rem' p={2}>
                                Filters
                            </Typography>
                            <Divider />
                            <Box p={2}>
                                <Typography fontWeight='500' fontSize='0.75rem'>
                                    CATEGORIES
                                </Typography>
                                <Box pt={1}>
                                    <Stack direction='row' alignItems='center'>
                                        <KeyboardArrowLeftIcon color='action' fontSize='small' />
                                        <Typography color='#878787' fontSize='0.875rem'>Mobiles & Accessories</Typography>
                                    </Stack>
                                    <Typography fontSize='0.875rem' fontWeight='500' pl={2} py={1}>
                                        Mobiles
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider />
                            <Box p={2}>
                                <Typography fontWeight='500' fontSize='0.75rem' letterSpacing='0.3px'>
                                    CUSTOMER RATINGS
                                </Typography>
                                <Stack direction='row' p={2}>
                                    4
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10}>
                        <Box sx={styles.boxContainer2}>
                            {
                                mobileProducts.map((data) => {
                                    return (
                                        <>
                                            <Stack direction='row' p={2} alignItems='center'>
                                                <Stack direction='column' flexGrow={1}>
                                                    <Typography variant='h6' fontWeight='500'>{data.brandName}</Typography>
                                                </Stack>
                                                <Button variant='contained' sx={styles.btn}>
                                                    View All
                                                </Button>
                                            </Stack>
                                            <Divider />
                                            <Stack direction={'row'} spacing={4} p={2}
                                                sx={styles.stackContainer}>
                                                {
                                                    Object.values(data.details).map((product) => {
                                                        return (
                                                            <Box component={Link} to={`/mobile/${product.link}`}
                                                                sx={styles.productContainer}>
                                                                <IconButton sx={{
                                                                    position: 'relative',
                                                                    left: '44%',
                                                                    top: '5%'
                                                                }}> <FavoriteIcon color='disabled' sx={{
                                                                    fontSize: '1.1rem'
                                                                }} /> </IconButton>
                                                                <Box component={Box}
                                                                    sx={styles.imgContainer}>
                                                                    <img src={product.url} alt="#"
                                                                        style={styles.img} />
                                                                </Box>
                                                                <Typography variant='body2' align='center' color='text.primary'
                                                                    sx={styles.titleText}>
                                                                    {product.title}
                                                                </Typography>
                                                                <Typography variant='body2' color='rgb(0 128 0)'>
                                                                    From Rs.99
                                                                </Typography>
                                                                <Stack direction='row' alignItems='center' columnGap='0.5rem'>
                                                                    <Typography fontWeight='500' color='text.primary'>{product.price.cost}
                                                                    </Typography>
                                                                    <Typography variant='body2' color='text.secondary' style={styles.text2}>
                                                                        {product.price.mrp}
                                                                    </Typography>
                                                                    <Typography variant='caption' fontWeight='500' color='rgb(0 128 0)'>
                                                                        {product.price.discount}
                                                                    </Typography>
                                                                </Stack>
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
                    </Grid>
                </Grid>
            </Box>
            <Box sx={styles.boxContainer2}>
                <Stack direction='column' spacing={2} py={4} px={3}>
                    <Typography gutterBottom fontSize='14px' fontWeight='500' color='#878787'>FAQ</Typography>
                    <Typography sx={styles.text3}>
                        Q. Which are the best mobile phone brands available in India?<br />
                        A. Samsung, iPhone, Redmi, Realme, and POCO are some of the best mobile phone brands available in the Indian market.
                    </Typography>

                    <Typography sx={styles.text3}>
                        Q. Which are the best mobile phone brands available in India?<br />
                        A. Samsung, iPhone, Redmi, Realme, and POCO are some of the best mobile phone brands available in the Indian market.
                    </Typography>

                    <Typography sx={styles.text3}>
                        Q. Which are the best mobile phone brands available in India?<br />
                        A. Samsung, iPhone, Redmi, Realme, and POCO are some of the best mobile phone brands available in the Indian market.
                    </Typography>

                    <Typography sx={styles.text3}>
                        Q. Which are the best mobile phone brands available in India?<br />
                        A. Samsung, iPhone, Redmi, Realme, and POCO are some of the best mobile phone brands available in the Indian market.
                    </Typography>

                    <Typography sx={styles.text3}>
                        Q. Which are the best mobile phone brands available in India?<br />
                        A. Samsung, iPhone, Redmi, Realme, and POCO are some of the best mobile phone brands available in the Indian market.
                    </Typography>
                </Stack>

                <Stack direction='column' spacing={1} py={4} px={3}>
                    <Typography fontSize='16px' fontWeight='bold' >Question and Answers</Typography>
                    <Divider />

                    <Typography fontSize='12px' >
                        Q.What are the different display options available on smartphones?<br />
                        A.Capacitive touchscreen LCD, IPS-LCD, AMOLED, OLED, and Super AMOLED are the different display types available in smart mobile phones.
                    </Typography>
                    <Divider />

                    <Typography fontSize='12px' >
                        Q.What are the best display resolutions available on smartphones?<br />
                        A.You can find smartphones with HD, FHD, and HD+ resolutions. The higher the display resolution, the sharper the displayed content will appear on the screen.
                    </Typography>
                    <Divider />

                    <Typography fontSize='12px' >
                        Q.What are the best quad-camera mobile phones available in India?<br />
                        A.Redmi Note 10S, Samsung Galaxy M32, POCO X3 Pro, vivo X70 Pro, and realme 8 are some of the best mobile phones with a quad-camera setup.
                    </Typography>
                    <Divider />

                    <Typography fontSize='12px' >
                        Q.What is the benefit of fast charging in mobile phones?<br />
                        A.Fast charging enables the mobile phone to charge faster than the current charging standard, and it can significantly reduce the time you would typically require to charge your phone.
                    </Typography>
                    <Divider />

                    <Typography fontSize='12px' >
                        Q.What are some important features to consider when buying a mobile phone?<br />
                        A.Before purchasing a mobile phone, you must ensure that you consider features and specifications such as the battery capacity, screen size, display type, camera quality, operating system, and SIM compatibility to ensure you purchase a variant that meets all your requirements.
                    </Typography>
                </Stack>
            </Box>
        </div>
    )
}

const styles = {
    boxContainer1: {
        margin: '5rem 0.5rem 2rem 0.5rem',
    },
    h1: {
        fontSize: '1.125rem',
        fontWeight: '500',
        marginBottom: '0.5rem',
    },
    text1: {
        fontSize: '0.75rem',
        lineHeight: '1.5',
        color: '#878787',
        marginBottom: '1rem',
    },
    gridLeft: {
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)',
        borderTop: '2px solid #eaeaea',
        minHeight: '66.6%',
    },
    boxContainer2: {
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)',
        borderTop: '2px solid #eaeaea',
        backgroundColor: 'background.paper',
    },
    btn: {
        height: '2.3rem',
        fontSize: '0.8rem',
        fontWeight: '500',
        borderRadius: '2px',
    },
    stackContainer: {
        overflowX: 'auto',
        '&::-webkit-scrollbar': {  // For Chrome, Safari and Opera
            display: 'none',
        },
        scrollbarWidth: 'none',  // For Firefox
        msOverflowStyle: 'none',  // For Internet Explorer and Edge
    },
    productContainer: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '0.8rem',
        alignItems: 'center',
        textDecoration: 'none',
        maxWidth: '12rem',
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
    titleText: {
        overflow: 'hidden',
        maxWidth: 'inherit',
        textOverflow: 'ellipsis',
        marginTop: '1rem',
    },
    text2: {
        textDecoration: 'line-through',
    },
    text3: {
        fontSize: '11px',
        color: '#878787',
    },
}