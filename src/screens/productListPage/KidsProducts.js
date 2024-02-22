import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { kidsProducts } from './assets/Data';

export const KidsProducts = () => {
    return (
        <div>
            <Box mt={11} mb={1} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Kids Wear</Typography>
                <Typography sx={{
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    color: '#878787',
                    marginBottom: '1rem',
                }}>
                    When braving the chilly winds of winter, the right attire is paramount, and the online realm offers an expansive array of winter wear clothes to cater to your warmth and style needs. Explore the vast selection of shrugs, scarves, sweatshirts, mufflers, and jackets that redefine winter fashion and functionality. Winter wear is characterised by its distinct features, designed not just to shield you from the cold but also to make a fashion statement. Shrugs provide a stylish layering option, while scarves and mufflers add flair while keeping you snug. Sweatshirts seamlessly combine comfort and trend, ideal for casual outings, while jackets, available in a myriad of designs, serve as winter armour against frosty temperatures. One of the standout features of winter clothes available online is the diversity in patterns and designs. From classic styles to contemporary creations, the options are varied to cater to your tastes. Whether you prefer subdued hues or vibrant patterns, there is a winter garment to suit your preferred aesthetic. Embrace the season in comfort and elegance as you navigate the virtual aisles teeming with winter wear selections. Some of the brands that offer these winter wear clothes include WIDERZONE, Triptee, BEMALL, Mimmy Kids, PROVOGUE, and more. Explore wide range of winter wear online for men, women & kids at best prices on Flipkart.
                </Typography>
                <Box sx={styles.box1}>
                    {
                        kidsProducts.map((data) => {
                            return (
                                <>
                                    <Stack direction='row' p={2} alignItems='center'>
                                        <Stack direction='column' flexGrow={1}>
                                            <Typography fontSize='22px' fontWeight='500'>{data.brandName}</Typography>
                                            {/* <Typography variant='body2' color='#b2b2b2'>Best Deals to SHOP</Typography> */}
                                        </Stack>
                                        <Button variant='contained' sx={styles.btn1}>View All</Button>
                                    </Stack>
                                    <Divider />
                                    <Stack direction={'row'} spacing={6} p={3} sx={styles.stack}>
                                        {
                                            Object.values(data.details).map((product) => {
                                                return (
                                                    <Box component={Link} to={`/kids/${product.link}`} sx={styles.productBox}>
                                                        <Box component={Box} sx={styles.imgContainer}>
                                                            <img src={product.url} alt="#" style={styles.img} />
                                                        </Box>
                                                        <Typography variant='body2' align='center' color='text.primary' mt={2} sx={styles.text1}>
                                                            {product.title}
                                                        </Typography>
                                                        <Typography variant='caption' color='text.secondary' sx={styles.text1}>
                                                            {product.tagline}
                                                        </Typography>
                                                        <Stack direction='row' alignItems='center' columnGap='0.45rem'>
                                                            <Typography variant='body1' color='text.primary' sx={styles.text1}>
                                                                {product.price.cost}
                                                            </Typography>
                                                            <Typography variant='body2' color='text.secondary' sx={styles.text2}>
                                                                {product.price.mrp}
                                                            </Typography>
                                                            <Typography variant='caption' color='rgb(0 128 0)' sx={styles.text1}>
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
            </Box>
            <Box sx={styles.box1}>
                <Stack direction='column' spacing='10px' py={4} px={3}>
                    <Typography fontSize='16px' fontWeight='bold' >Question and Answers</Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What is the biggest size in T-shirts for men?<br />
                        A.You can get XXL(46 cm) as the biggest size in T-shirts for men
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Do I get different-colored T-shirts with a round neck?<br />
                        A.Choose from multiple colour options in combo offers available in round neck T-shirts.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Can I get sleeveless T-shirts for men?<br />
                        A.Many brands offer sleeveless T-shirts for men. You can check online for more options
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Are these T-shirts comfortable for summer?<br />
                        A.Most T-shirts are made of cotton. Cotton absorbs sweat and helps in the easy evaporation of sweat. This allows our bodies to cool down. So, cotton T-shirts are more comfortable to wear during summers.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.I wear 38-size shirts. Should I pick the XS size for the T-shirt?<br />
                        A.Size measurements vary from brand to brand. Please check the measurements before making a purchase.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.How do I know my T-shirt size?<br />
                        A.Firstly, measure your shoulder from the edge of one arm to another. Then measure around your body under the arms at the fullest part of the chest with your arms relaxed. Now measure from the shoulder seam from the outer arm to the cuff. Finally, measure across the neck length from the highest point of the shoulder seam to the bottom hem of the garment.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Where can I find a T-shirt for my 19-year-old son?<br />
                        A.You could find T-shirts from XS or S for your teen. You can pick up the size depending on your son’s build.
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
        // alignItems: 'center',
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
        fontWeight: '500',
    },
    text2: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 'inherit',
        textOverflow: 'ellipsis',
        textDecoration: 'line-through',
    },
}