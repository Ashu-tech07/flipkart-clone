import { Box, Button, Divider, Stack, Typography, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { beautyProducts } from './assets/Data';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const BeautyProduct = () => {
    return (
        <div>
            <Box mt={11} mb={1} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Beauty & Grooming</Typography>
                <Typography sx={{
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    color: '#878787',
                    marginBottom: '1rem',
                }}>
                    Everyone strives to look presentable and at their best at all times. The clothes you wear and the way you style yourself says a lot about your personality. The first step to nailing the perfect look is by getting clear and healthy-looking skin. You can achieve this by eating healthy foods, leading a healthy lifestyle, hydrating your body, and taking care of your skin in the best possible way. The second method is by using cosmetics. Concealers, foundation creams, correctors, primers, and more help hide your skin imperfections almost immediately. Mascaras, kajal, lipsticks, lip liners, blush, bronzers, and more help enhance your look and give you an almost perfect appearance. You can buy make-up kits online at attractive prices. For men as well, to achieve the perfectly groomed look, you need to maintain your facial hair and keep your skin free from pimples. Check out the wide range of beauty products and grooming products online. Your hair also needs to be taken care of. Check out haircare products online to achieve lustrous-looking hair. Use deodorants and fragrances to keep body odor at bay and smell fresh all day. Buy the best beauty products and grooming products from your favorite online shopping site at attractive prices.
                </Typography>
                <Box sx={styles.box1}>
                    {
                        beautyProducts.map((data) => {
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
                                                    <Box component={Link} to={`/beauty/${product.link}`} sx={styles.productBox}>
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
                                                        <Typography variant='caption' color='text.secondary' sx={styles.text1}>
                                                            {product.tagline}
                                                        </Typography>
                                                        <Stack direction='row' alignItems='center' columnGap='0.45rem'>
                                                            <Typography variant='body1' color='text.primary' fontWeight='500' sx={styles.text1}>
                                                                {product.price.cost}
                                                            </Typography>
                                                            <Typography variant='body2' color='text.secondary' sx={styles.text2}>
                                                                {product.price.mrp}
                                                            </Typography>
                                                            <Typography variant='caption' fontWeight='500' color='rgb(0 128 0)' sx={styles.text1}>
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
                        Q.Is Clean and Clear good for pimple-prone skin?<br />
                        A.Unlike most beauty products, this one is good for pimple-prone skin. It helps in oil control and removes surface oil and dirt, which often leads to breakouts.
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
    },
    text2: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 'inherit',
        textOverflow: 'ellipsis',
        textDecoration: 'line-through',
    },
}