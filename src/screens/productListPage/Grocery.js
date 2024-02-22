import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { groceryData } from './assets/Data'
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Grocery = () => {

    // const theme = useTheme();
    // const mediaquery = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <Stack mt={11} mb={4} mx={1} style={{
                // display: mediaquery ? 'none' : 'block',
                minWidth: '902px',
            }}>
                <Typography mb={4} style={{
                    fontSize: '0.75rem',
                    color: '#878787',
                }}>
                    Whether you work from home or office or other workplaces, daily grocery items are a requisite for everybody. Regardless of the size of the family or where you live, one can easily browse for the required food or other daily use products and have them brought to your home. Explore the variety of products, whether oils or foodgrains, from the online stock and choose the quantity required. You can save the time otherwise lost in waiting in lengthy queues for billing and payments by easily adding the chosen items to your cart online. Select the required date for delivery and pay with a suitable payment option. This will help you receive the items whenever you need them and in the available quantity. Essentials needed every day, like spices, daals, sugar, coffee powder, salt, etc., can be easily shopped online and delivered to your home. Other items like cleaning liquids, shower gels, fabric softeners, toothpaste, etc., can also be bought online. Buy grocery and more from brands such as Kellogg’s, Tata Gold, Parle G, Lays, etc. Order the online grocery comfortably from home for timely doorstep delivery. You may also place an order for the comfort and convenience of your loved ones who cannot move out of the house and shop. The information you are reading has been last updated on 01-Jan-24.
                </Typography>
                <img src="https://rukminim2.flixcart.com/flap/2000/2000/image/37ba2d80e7566df1.jpg?q=50" alt="#" width='100%' />
                <Grid container columnSpacing={2} rowSpacing={1} >
                    <Grid item xs={8}>
                        <Box component={Link} to={`/staples`} >
                            <img src="https://rukminim2.flixcart.com/flap/1400/1400/image/ed04b09381eec3f9.jpg?q=50" alt="#" style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container
                            columnSpacing={1}
                            rowSpacing={1}
                        >
                            <Grid item xs={12}>
                                <Box component={Link} to={`/pulses`}>
                                    <img src="https://rukminim2.flixcart.com/flap/960/960/image/15cbd99e6fcb6fc1.jpg?q=75" alt="#" style={{
                                        maxWidth: '99.25%',
                                        maxHeight: '99.25%',
                                    }} />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box component={Link} to={`/spices`}>
                                    <img src="https://rukminim2.flixcart.com/flap/960/960/image/7991ac0613e2ddd5.png?q=75" alt="#" style={{
                                        maxWidth: '99.25%',
                                        maxHeight: '99.25%',
                                    }} />
                                </Box>
                            </Grid>
                        </Grid>
                        {/* <Stack spacing={1}
                        // bgcolor='green'
                        >
                            <Box component={Link} to={`/pulses`}>
                                <img src="https://rukminim2.flixcart.com/flap/960/960/image/15cbd99e6fcb6fc1.jpg?q=75" alt="#" style={{
                                    maxWidth: '99.25%',
                                    maxHeight: '99.25%',
                                }} />
                            </Box>
                            <Box component={Link} to={`/spices`}>
                                <img src="https://rukminim2.flixcart.com/flap/960/960/image/7991ac0613e2ddd5.png?q=75" alt="#" style={{
                                    maxWidth: '99.25%',
                                    maxHeight: '99.25%',
                                }} />
                            </Box>
                        </Stack> */}
                    </Grid>
                </Grid>

                <img src="https://rukminim2.flixcart.com/flap/2000/2000/image/7f003daeaf4ae8dc.jpg?q=50" alt="#" width='100%' />

                <Grid container columnSpacing={1}>
                    {
                        groceryData.map((data) => {
                            return (
                                <Grid item xs={4}>
                                    <Box component={Link} to={`${data.link}`} >
                                        <img src={data.url} alt="#" style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                        }} />
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Stack>
            {/* <Stack bgcolor='Background' style={{
                display: mediaquery ? 'block' : 'none',
            }}>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1500/250/image/0593baff193a250d.jpg?q=90" alt="#" width='100%' />
                <Stack direction='row' px={3} py={2} borderBottom='1px solid #c5c5c578'>
                    <Stack direction='row' alignItems='center' flexGrow={1} spacing={2}>
                        <LocationOnIcon color='primary' />
                        <Typography fontSize='0.87rem'>Delivery to 226201, Lucknow</Typography>
                    </Stack>
                    <Button variant='outlined' sx={{
                        fontSize: '0.8rem',
                        textTransform: 'capitalize',
                        border: '2px solid #dbdbdb99',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            border: '2px solid #dbdbdb99',
                        },
                    }}>Change</Button>
                </Stack>
                <Box bgcolor='rgb(255, 247, 225)' px={2} py={1}>
                    <Typography fontSize='0.75rem' fontFamily='Times'>Delivery by Jan3</Typography>
                </Box>
                <Stack direction='row' bgcolor='Background' p={3}>
                    <Typography variant='caption'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea dolorum unde iusto aut iste, rerum cum temporibus vel perspiciatis ad ducimus vitae ipsam mollitia perferendis placeat necessitatibus dolore. Id!
                    </Typography>
                </Stack>
            </Stack> */}
        </div>
    )
}
