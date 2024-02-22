import { Box, Button, Divider, Grid, Stack, Typography, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { cameraProducts } from './assets/Data';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Camera = () => {
    return (
        <div>
            <Box mt={11} mb={1} mx={2}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Cameras</Typography>
                <Typography sx={{
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    color: '#878787',
                    marginBottom: '1rem',
                }}>
                    Cameras are being used widely today for various reasons. The picture taken from a smartphone may be good but not the same as taken with a good quality camcorder. Whether you are a beginner or professional, you can opt for DSLR ones and get more confident in your photography skills. One of the best things to check online is the latest camcorder and compare them with different models from the comfort of your home. DSLR comes with features like high shutter speed, a large sensor area, better sensitivity to light, the use of different lenses for different purposes, and more reasons that allure photographers to buy them online. They are available in colours like black, blue, and silver. They come with sensor types CCD, CMOS, MOS, and BSI CMOS. You can explore options like Canon EOS 15000 DSLR, Canon EOS 3000 DSLR, and more as they come with Wi-Fi connectivity and 1080p on 30fps video recording. Check and compare prices to make an informed decision. Check out various brands available online such as Canon, Nikon, Sony, Panasonic, Samsung, etc. So, hurry up and add a camera to your shopping cart, place your order by making payment through secured gateways and have them delivered to your doorstep hassle-free.
                </Typography>
                <Box sx={styles.box1}>
                    {
                        cameraProducts.map((data) => {
                            return (
                                <>
                                    <Stack direction='row' p={2} alignItems='center'>
                                        <Stack direction='column' flexGrow={1}>
                                            <Typography fontSize='22px' fontWeight='500' pl={2}>{data.brandName}</Typography>
                                            {/* <Typography variant='body2' color='#b2b2b2'>Best Deals to SHOP</Typography> */}
                                        </Stack>
                                        <Button variant='contained' sx={styles.btn1}>View All</Button>
                                    </Stack>
                                    <Divider />
                                    <Stack spacing={6} p={3} sx={styles.stack}>
                                        {
                                            Object.values(data.details).map((product) => {
                                                return (
                                                    <Grid container component={Link} to={`/camera/${product.link}`} sx={styles.productBox}>
                                                        <Grid item xs={2}>
                                                            <IconButton sx={{
                                                                position: 'relative',
                                                                left: '84%',
                                                                top: '5%'
                                                            }}> <FavoriteIcon color='disabled' sx={{
                                                                fontSize: '1.1rem'
                                                            }} /> </IconButton>
                                                            <Box component={Box} sx={styles.imgContainer}>
                                                                <img src={product.url} alt="#" style={styles.img} />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Typography variant='body2' pl={8} pt={2} color='text.primary' sx={styles.text1}>
                                                                {product.title}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Box pl={19}>
                                                                <Typography variant='body1' color='text.primary' fontSize='1.563rem' fontWeight='500'>
                                                                    {product.price.cost}
                                                                </Typography>
                                                                <Stack direction='row' alignItems='center' columnGap='0.45rem'>
                                                                    <Typography color='#878787' fontSize='0.875rem' sx={styles.text2}>
                                                                        {product.price.mrp}
                                                                    </Typography>
                                                                    <Typography fontWeight='500' fontSize='0.75rem' color='#388e3c'>
                                                                        {product.price.discount}
                                                                    </Typography>
                                                                </Stack>
                                                                <Typography variant='caption' color='text.primary'>Free Delivery</Typography>
                                                                <Typography component='p' fontSize='0.875rem' fontWeight='700' color='rgb(38, 165, 65)'>Bank Offer</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
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
            <Box sx={styles.box1}>
                <Stack direction='column' spacing='10px' py={4} px={3}>
                    <Typography fontSize='16px' fontWeight='bold' >Question and Answers</Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Why are Canon cameras considered the best?<br />
                        A.Canon is one of the most popular brands for cameras. Its features are loved by photography enthusiasts. Canon offers quality products with a wide range of features.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What are some of the best Canon cameras in the market?<br />
                        A.Canon-5Ds, Canon EOS 80D camera body with 18-135 mm lens, Canon EOS 7D Mark II DSLR camera, Canon PowerShot GIX Mark III, Canon PowerShot GIX Mark II, Canon PowerShot SX430 IS are some of the popular camera models.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What is the speciality of Canon cameras?<br />
                        A.Canon has been serving its customers with advanced features and technologies for more than 75 years now. Canon products are equipped with technologically advanced features.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Who is the founder of Canon cameras, and where is the headquarters of Canon?<br />
                        A.Canon cameras were founded by Goro Yoshida, Saburo Uchida, and Takeo Maeda of Japan and headquarters in Ota, Tokyo, Japan.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.When were the first Canon cameras made?<br />
                        A.The very first canon camera was made in the year 1956. The name of the first canon camera was The VT Model, which was designed for mass production.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What is the reason behind the success of the Canon cameras?<br />
                        A.Canon is known for its digital SLR cameras. The products are designed to be used by a diverse range of users, be they a beginner or an experienced, skilled photographer.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.How should I take care of my Canon Camera?<br />
                        A.Wipe your equipment with a clean cloth before and after use. Store it in an appropriate case and handle your product with care.
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
        // display: 'flex',
        // flexDirection: 'column',
        // rowGap: '0.4rem',
        // columnGap: '0.4rem',
        // alignItems: 'center',
        textDecoration: 'none',
        // maxWidth: '11rem',
    },
    imgContainer: {
        position: 'relative',
        width: 200,
        height: 200,
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
        // whiteSpace: 'nowrap',
        // overflow: 'hidden',
        // maxWidth: 'inherit',
        // textOverflow: 'ellipsis',
        fontWeight: '500',
        fontSize: '1.125rem'
    },
    text2: {
        // whiteSpace: 'nowrap',
        // overflow: 'hidden',
        // maxWidth: 'inherit',
        // textOverflow: 'ellipsis',
        textDecoration: 'line-through',
    },
}