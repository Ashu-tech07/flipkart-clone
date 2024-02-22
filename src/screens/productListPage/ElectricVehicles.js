import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { electricVehicles } from './assets/Data';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const ElectricVehicles = () => {
    return (
        <div>
            <Box mt={11} mb={1} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Electric Vehicles</Typography>
                <Typography sx={{
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    color: '#878787',
                    marginBottom: '1rem',
                }}>
                    An electric vehicle is an effective solution to save fuel. Buying an electric vehicle online is an easy way to bring home your vehicle. Their energy-efficiency and environment-friendly designs are two main reasons for the rising popularity of electric vehicles. Among these vehicles, electric scooters have grabbed the attention of many customers. People often use these scooters for daily use and to commute short distances. These scooters are available in various colours, including red, black, blue, silver, and grey. You can pick any of these as per your choice. These scooters can cover a distance of 75-160 km easily. These electric vehicles are convenient and comfortable to use. Whether you use these scooters for everyday use or late-night fun rides, you can use them as per your requirement. Check brands that sell these vehicles are bounce infinity, Okaya, Ampere, BGauss and more. Thanks to their noise-free engine, these vehicles prevent noise pollution. It is a good alternative to vehicles that run on fuel. While driving these vehicles, you can easily pass through a congested road. Before purchasing a new electric scooter, you should check all the important features. It would help if you researched all the details, including the body, tyres, batteries, etc. You should also check the motor power, body material, charging time, etc. Enjoy your ride with a stylish and sophisticated vehicle. There are many new models available online. You can pick any of these as per your choice and requirement. You can also check and compare electric scooters prices online. Buy an electric vehicle online and enjoy your ride.
                </Typography>
                <Box sx={styles.box1}>
                    {
                        electricVehicles.map((data) => {
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
                                                    <Box component={Link} to={`/electric/${product.link}`} sx={styles.productBox}>
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
                        Q.Name some brands that offer electric scooters online.<br />
                        A.Brands such as Okaya, Ampere, Bounce Infinity, BGauss, etc., offer electric scooters online.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What are the advantages of online electric vehicles?<br />
                        A.Electric vehicles charge their batteries with electricity rather than using fossil fuels like petrol or diesel. Due to their greater efficiency and the lower cost of power, charging an electric vehicle is more affordable than buying petrol or diesel to meet your travel needs
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What are the main features of the Okaya Faast F2B electric scooter?<br />
                        A.The Okaya Faast F2B is jam-packed with features such as LED lights with DRL, telescopic suspension, LFP battery, and more. Additionally, it has three complete riding settings (Eco, City, and Sport), reverse, and walk assistance.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What is the battery capacity of the Okaya Faast F2B electric scooter?<br />
                        A.This product has a battery capacity of 2.2 kWh.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What are the battery specifications of Okaya ClassIQ?<br />
                        A.The Okaya ClassIQ is driven by a 250 W brushless DC hub motor with a top speed of 25 km/h. The motor is coupled to a replaceable 48 V 30 Ah Lithium-ion battery pack having a range of 60–70 kilometres. It takes 5 to 6 hours to charge the battery.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What is Okaya ClassIQ's battery capacity?<br />
                        A.The Okaya ClassIQ has a battery capacity of 1.4 kWh
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Can I remove the battery from a Bounce Infinity E1?<br />
                        A.Yes, the Bounce Infinity E1 scooter includes a portable charger and a detachable battery. Any plug location will allow you to remove the battery and charge it.
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