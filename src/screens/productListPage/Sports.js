import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { sportsProducts } from './assets/Data';

export const Sports = () => {
    return (
        <div>
            <Box mt={11} mb={1} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Sports and Fitness Equipment</Typography>
                <Typography sx={{
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    color: '#878787',
                    marginBottom: '1rem',
                }}>
                    In our hectic and fast-paced life, we have become more dependent on machines and instant food. To remain healthy, it’s important we exercise daily. Whether you go to the gym or get gym equipment home for home workouts, it’s essential you take out some time to exercise every day. These equipment are mostly used for two important exercise routines - cardio workouts and weight training. If you are looking to buy some exercising machines, look for gym equipment (India) online. You can find a variety of machines including cross trainers, treadmills, stationary cycles, dumbbells, barbells, leg workout machines, and chest workout machines. Gym equipment prices may vary widely depending on the nature of the equipment, the material, and its functionality. You can opt for simple equipment like dumbells, barbells, kettlebells, and fitness bands that are easily available. You can also look at different features and technology while buying heavy equipment like treadmills, cross trainers, multi-purpose gym sets. The price also varies based on the brand selling it and the quality of the equipment. One can easily buy gym equipment online from brands such as RPM Fitness, Rocket Sales, KRX, RASCO, and Powermax Fitness from the comfort of one’s homes.
                </Typography>
                <Box sx={styles.box1}>
                    {
                        sportsProducts.map((data) => {
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
                                                    <Box component={Link} to={`/sports/${product.link}`} sx={styles.productBox}>
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
            <Box mt={5} sx={styles.box1}>
                <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={1} py={4} px={3}>
                    <Box>
                        <Typography mb={2} fontWeight='600' color='#878787' fontSize='0.875rem'>Sports for all</Typography>
                        <Typography sx={{
                            fontSize: '0.688rem',
                            lineHeight: '1.5',
                            color: '#878787',
                            marginBottom: '1rem',
                            maxWidth: '40rem',
                        }}>
                            Sports gets us all excited and pumped up, be it watching a game on TV or playing it ourselves. It is something that unites us all. There are different kinds of sports in the world such as cricket, football, badminton, tennis, basketball, swimming, golf, volleyball, squash, rugby, soccer, and so on. Playing a sport is not just fun, it’s also good for the well-being of our body and mind. It’s never too late to get into sports, no matter what kind. Playing any kind of sport is good for the soul.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontSize: '0.688rem',
                            fontWeight: '500',
                            lineHeight: '1.5',
                            color: '#878787',
                        }}>
                            Buy Sports Items Online
                        </Typography>
                        <Typography sx={{
                            fontSize: '0.688rem',
                            lineHeight: '1.5',
                            color: '#878787',
                            maxWidth: '40rem',
                        }}>
                            Buy sports equipment on Flipkart at discounted rates and start working on your skills. An array of different sports products are easily available to you. When it comes to payments, you can make an informed buying decision by paying through debit card EMI option. This option has made buying stuff online very convenient. There are other safe payment gateways as well. Get your sports products delivered to your doorstep without any hassle.
                        </Typography>
                    </Box>
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