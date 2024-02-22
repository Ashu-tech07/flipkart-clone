import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { womenProducts } from './assets/Data';

export const WomenProducts = () => {
    return (
        <div>
            <Box mt={11} mb={1} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Women's Wear</Typography>
                <Typography sx={{
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    color: '#878787',
                    marginBottom: '1rem',
                }}>
                    If you want to buy affordable T-shirts for women, then you can check them online on Flipkart. They are available in materials such as cotton, cotton blend, lycra, georgette, fleece, crepe, and more. Hence, you can buy them for each season. T-shirts undoubtedly fall under the category of clothes that can be worn to, both, formal occasions and informal events. As they are easy to team-up with most western clothing items, you can buy a variety of them if you wear western clothes frequently. They are available in several patterns and cuts too. You can check them and buy the ones that will accentuate your body type and height. You can also purchase T-shirts for women according to the neck types like double-collared neck, halter neck, cowl neck and off-shoulder. You can also select them on the basis of their sleeve types like short sleeves, 3/4th sleeves, full sleeves, puff sleeves, etc. So, what are you waiting for? Buy women's T-shirts from popular brands such as Wrangler, Levi's, Lee, U.S. Polo Assn, Adidas, United Colors of Benetton, and more at best prices on Flipkart.
                </Typography>
                <Box sx={styles.box1}>
                    {
                        womenProducts.map((data) => {
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
                                                    <Box component={Link} to={`/women/${product.link}`} sx={styles.productBox}>
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
                        Q.Do I get extra sleeves with sleeveless dresses?<br />
                        A.Extra sleeves are not available with sleeveless dresses. If you are looking for a sleeved dress, look for dresses with sleeves.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What kind of dress should I buy?<br />
                        A.You can choose dresses based on the occasion. You can choose from formal, casual, and partywear. You can decide and buy based on your requirements and preferences.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.I am a little overweight. What women's dresses will suit me?<br />
                        A.You can check women's dresses with vertical patterns. Also, try dresses with prints or go for wrap dresses.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What should I do if the size I ordered doesn’t fit?<br />
                        A.If the size doesn’t fit, you can opt for a return or exchange for a suitable size. Check the return and exchange policy to know more.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What kind of dresses should I buy for summer?<br />
                        A.You can check the online collection. You will find plenty of dress options such as, sleeveless, short sleeves, three-fourth sleeve dresses made out of cotton, rayon, linen, soft georgettes etc., which are very comfortable to wear in summers.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.How to order the right size?<br />
                        A.Consult the size chart with all the dresses available online. You can choose the size based on your size and place an order.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Can these dresses be machine washed?<br />
                        A.Please follow the washing instructions mentioned on the label and do the needful accordingly.
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