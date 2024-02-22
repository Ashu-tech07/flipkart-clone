import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { petrolVehicles } from './assets/Data';
import StarIcon from '@mui/icons-material/Star';

export const PetrolVehicles = () => {
    return (
        <div>
            <Box mt={11} mb={1} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Petrol Vehicles</Typography>
                <Typography sx={{
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    color: '#878787',
                    marginBottom: '1rem',
                }}>
                    Feel the wind in your hair as you ride on a scooter or bike. You can quickly swipe and explore a range of two-wheeler vehicles online and find the most suitable option for yourself. Public transport can sometimes be unreliable when commuting. However, having a two-wheeler can help you squeeze through traffic and reach your destination in no time. Need a vehicle to travel long distances? If yes, there are plenty of two-wheelers online with comfortable seats. Furthermore, you can find options with seats that help you maintain a proper posture while riding. Apart from that, find two-wheelers with padded backrests to make any journey comfortable for the pillion. Bike shopping online enables you to check and compare each feature and specification and make a well-informed choice. Check out specifications like engine features, chassis features, suspension, wheel and tyre features, brake features, fuel tank capacity, display style, and more. You can choose from Hero models like Destini, XTREME, Maestro Edge, Glamour XTEC, and more. Learn about the dimensions of any available bike online to determine if it’ll fit in your parking space. Explore Hero bikes online with a variety of features, designs, and colours. Find bikes with diamond frames to tubular double cradle frames. Choose bikes with disc or drum brakes online. You can also select scooters with a four-stroke air-cooled engine system. Cruise through traffic on a two-wheeler with a rear mono-shock suspension and front telescopic fork suspension. So, what are you waiting for? Get a two-wheeler vehicle online and embark on a long adventurous journey or smoothen everyday travel.
                </Typography>
                <Box sx={styles.box1}>
                    {
                        petrolVehicles.map((data) => {
                            return (
                                <>
                                    <Stack direction='row' p={2} alignItems='center'>
                                        <Stack direction='column' flexGrow={1}>
                                            <Typography fontSize='22px' fontWeight='500'>{data.brandName}</Typography>
                                            <Typography variant='body2' color='#b2b2b2'>Top Deals</Typography>
                                        </Stack>
                                        <Button variant='contained' sx={styles.btn1}>View All</Button>
                                    </Stack>
                                    <Divider />
                                    <Stack direction={'row'} spacing={9} p={3} sx={styles.stack}>
                                        {
                                            Object.values(data.details).map((product) => {
                                                return (
                                                    <Box component={Link} to={`/petrol/${product.link}`} sx={styles.productBox}>
                                                        <Box component={Box} sx={styles.imgContainer}>
                                                            <img src={product.url} alt="#" style={styles.img} />
                                                        </Box>
                                                        <Typography variant='body2' fontWeight='500' align='center' color='text.primary' mt={2} sx={styles.text1}>
                                                            {product.title}
                                                        </Typography>
                                                        <Stack direction='row' alignItems='center' columnGap='0.2rem' bgcolor='rgb(0 128 0)' color='#FFFFFF' sx={{
                                                            padding: '1px 4px 1px 6px',
                                                            borderRadius: '3px'
                                                        }}>
                                                            <Typography fontSize='12px' fontWeight='bold' sx={{
                                                                paddingTop: '1px',
                                                            }}>{product.rating}</Typography>
                                                            <StarIcon sx={{
                                                                fontSize: '0.75rem',
                                                            }} />
                                                        </Stack>
                                                        <Typography variant='body1' fontWeight='500' color='text.primary' sx={styles.text1}>
                                                            {product.price.cost}
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
                        Q.I have a limited parking space. Can I know the dimensions of the two-wheeler online?<br />
                        A.Yes. You can easily check out the dimensions of two-wheelers from the product description before purchasing. There are plenty of two-wheeler vehicles online with different dimensions. Thus, it won’t be a problem for you to find a suitable option.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Are there any scooters available online?<br />
                        A.Yes. You can easily swipe and explore a variety of scooter models online.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.I have to go on long tours on my bike. Can I find a bike with a large fuel tank capacity?<br />
                        A.Yes. There are plenty of bikes available with various fuel tank capacities. You can check out Hero bikes online with larger fuel capacities.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Is it safe to purchase two-wheeler vehicles online?<br />
                        A.Yes. Shopping for scooters and bikes online will help you to understand specifications easily and quickly without having to hop from one showroom to another. You can make a well-informed decision and have the vehicle delivered to your doorstep, hassle-free.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Do Hero scooters have tubeless tires?<br />
                        A.There are some Hero scooters available with tubeless tires. You can explore the options to learn more.
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