import { Box, Button, Divider, Grid, Stack, Typography, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { laptopProducts } from './assets/Data';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Laptop = () => {
    return (
        <div>
            <Box mt={11} mb={1} mx={2}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Laptops and Desktops</Typography>
                <Typography sx={{
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    color: '#878787',
                    marginBottom: '1rem',
                }}>
                    Laptops are a quick and easy way to store information from the web. They can be used for gaming, entertainment, travel and business, processing and multitasking, and much more. Unlike desktop machines, these devices are lightweight and can be carried around anywhere. Working on word processor documents and spreadsheets is more convenient in these devices. Laptops come in a variety of screen sizes and designs. Gadgets with Wi-Fi connectivity, backlit keyboards, touchscreen, and MS office are also available online. You can compare all the alternatives and select the mini computer that meets your requirements. These gadgets are available in various stylish and professional designs that can surely grab everyone’s attention. The backlit keyboards help you to work comfortably without any interruptions, even in dimly lit environments. Their USB ports allow you to connect an external monitor via the HDMI port and transfer data packs quickly from one device to another. Choose from different types of storage options such as HDD, SSD, and eMMC. Some of the popular graphic processors in stock are Qualcomm Adreno, AMD Radeon, and NVIDIA GeForce. Intel integrated and MediaTek integrated processors are also available online. Top brands like Infinix, HP, Smartron, LG, Lenovo, and more are selling these devices. Browse online and get these products delivered to your doorstep. This information updated on 05-Jan-24
                </Typography>
                <Box sx={styles.box1}>
                    {
                        laptopProducts.map((data) => {
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
                                                    // <Box component={Link} to={'/mobileAccessories'} sx={styles.productBox}>
                                                    //     <Box component={Box} sx={styles.imgContainer}>
                                                    //         <img src={product.url} alt="#" style={styles.img} />
                                                    //     </Box>
                                                    //     <Typography variant='body2' fontWeight='500' align='center' color='text.primary' mt={2} sx={styles.text1}>
                                                    //         {product.title}
                                                    //     </Typography>
                                                    //     <Typography variant='caption' color='text.secondary' sx={styles.text1}>
                                                    //         {product.tagline}
                                                    //     </Typography>
                                                    //     <Stack direction='row' alignItems='center' columnGap='0.45rem'>
                                                    //         <Typography variant='body1' color='text.primary' fontWeight='500' sx={styles.text1}>
                                                    //             {product.price.cost}
                                                    //         </Typography>
                                                    //         <Typography variant='body2' color='text.secondary' sx={styles.text2}>
                                                    //             {product.price.mrp}
                                                    //         </Typography>
                                                    //         <Typography variant='caption' fontWeight='500' color='rgb(0 128 0)' sx={styles.text1}>
                                                    //             {product.price.discount}
                                                    //         </Typography>
                                                    //     </Stack>
                                                    // </Box>
                                                    <Grid container component={Link} to={`/laptop/${product.link}`} sx={styles.productBox}>
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
                        Q.Which laptop is best for gaming?<br />
                        A.These are some of the factors you should look into while buying a gaming laptop: GPU (Graphics Processing Unit)- choose from AMD Radeon and NVIDIA GeForce and the like, the CPU for assuring smooth performance- choose from Intel, AMD and the like, RAM – the amount of RAM is important for smooth gaming. Go for laptops like Acer Predator Helios 300 Core i7 7th Gen, MSI CX Core i7 7th Gen, Lenovo Legion Core i7 7th Gen among others.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Does the Navratna Ayurvedic Cool Hair Oil reduce hair fall?<br />
                        A.This product is best suited for stress relief and does not affect hair fall or growth.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What is the best sulphate-free hair growth vitalizer for men?<br />
                        A.The Beardo Hair Growth Vitalizer is a paraben, phthalate and sulphate-free product. It enhances hair growth, prevents oily scalp and dandruff, and keeps men's hair silky and smooth.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.How long does the smell of Fogg Perfumes last?<br />
                        A.This beauty product is a blend of elegant fragrances, and the scent lasts for 7-8 hours without reapplication.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Does Durex Naturals Lubricant have any fragrance?<br />
                        A.This Intimate Gel is a water-based, natural, pH-friendly formula with no artificially added fragrance. It helps in moisturising your intimate areas for smooth performance and perfect climax.
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