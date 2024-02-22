import React, { useState } from 'react'
import { Box, Button, Card, CardContent, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { bannerData2 } from './assets/Data';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

// Custom arrow components
const CustomRightArrow = ({ onClick }) => {
    return (
        <Button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            top: 'calc(50% - 52px)',
            right: 0,
            position: 'absolute',
            backgroundColor: 'hsla(0,0%,100%,.98)',
            boxShadow: '0 1px 5px 0 rgba(0,0,0,.11)',
            transition: 'opacity .1s ease-in',
            minWidth: '3rem',
            maxWidth: '2.938rem',
            height: '6.5rem',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        }} color='inherit' onClick={() => onClick()}>
            <ArrowForwardIosIcon sx={{
                fontSize: '1.8rem'
            }} />
        </Button>
    );
};

const CustomLeftArrow = ({ onClick }) => {
    return (
        <Button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            top: 'calc(50% - 52px)',
            left: 0,
            position: 'absolute',
            backgroundColor: 'hsla(0,0%,100%,.98)',
            boxShadow: '0 1px 5px 0 rgba(0,0,0,.11)',
            transition: 'opacity .1s ease-in',
            minWidth: '3rem',
            maxWidth: '3rem',
            height: '6.5rem',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        }} color='inherit' onClick={() => onClick()}>
            <ArrowBackIosIcon sx={{
                fontSize: '1.8rem'
            }} />
        </Button>
    );
};

export const Travel = () => {
    const [fields, setFields] = useState({
        from: '',
        to: '',
        departOn: '',
        returnOn: '',
        class: '',
    });

    const handleChange = (event) => {
        setFields({ ...fields, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Fields:', fields);
    };

    return (
        <div>
            <Box style={{
                margin: '5.5rem 0.5rem 0.5rem 0.5rem',
                width: 'auto',
                minWidth: '1500px',
            }}>
                <Stack direction='column' spacing={1}>
                    <Box component={Box} style={{
                        height: '30rem',
                        backgroundImage: "url('https://rukminim2.flixcart.com/www/2000/2000/promos/06/01/2021/276bd352-f8b3-49cf-87e9-c853e6dbd5ac.jpg?q=50')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Card style={{
                            position: 'absolute',
                            width: '82%',
                            bottom: '7%',
                            padding: '0.5rem',
                        }}>
                            <CardContent>
                                <Box component='form' autoComplete='off' onSubmit={handleSubmit} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            defaultValue="One Way"
                                            name="radio-buttons-group">
                                            <FormControlLabel value='One Way' control={<Radio size='small' />} label='One Way' />
                                            <FormControlLabel value='Round Trip' control={<Radio size='small' />} label='Round Trip' />
                                        </RadioGroup>
                                    </FormControl>
                                    <Stack direction='row' justifyContent='space-evenly' mt={2}>
                                        <TextField type='text' id='from' value={fields.from} label='From' onChange={handleChange} size='small' helperText='Any worldwide city or airport'
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    height: '3rem',
                                                    width: '17rem',
                                                }
                                            }} />
                                        <TextField type='text' id='to' value={fields.to} label='To' onChange={handleChange} size='small' helperText='Any worldwide city or airport'
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    height: '3rem',
                                                    width: '17rem',
                                                }
                                            }} />
                                        <TextField type='date' size='small' id='departOn' value={fields.departOn} helperText='Depart On'
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    height: '3rem',
                                                    width: '8rem',
                                                }
                                            }}
                                        />
                                        <TextField type='date' size='small' id='returnOn' value={fields.returnOn} helperText='Return On'
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    height: '3rem',
                                                    width: '8rem',
                                                }
                                            }}
                                        />
                                        <TextField type='text' id='class' value={fields.class} label='Travellers | Class' onChange={handleChange} size='small'
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    height: '3rem',
                                                }
                                            }} />
                                        <Button variant='contained' type="submit" startIcon={<SearchIcon fontSize='small' />} sx={{
                                            height: '2.9rem',
                                            fontSize: '0.8rem',
                                            fontWeight: '500',
                                            // boxShadow: 'none',
                                            borderRadius: '2px',
                                            width: '8rem',
                                        }}>Search</Button>
                                    </Stack>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box style={{
                        position: 'relative'
                    }}>
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/314d78512857f86d.png?q=50" alt="#" width='100%' />
                    </Box>

                    <Carousel
                        customRightArrow={<CustomRightArrow />}
                        customLeftArrow={<CustomLeftArrow />}
                        responsive={responsive}
                        dotListClass="custom-dot-list-style"
                        // dotListClass="react-multi-carousel-dot-list"
                        itemClass="carousel-item-padding-40-px"
                        containerClass="carousel-container"
                        swipeable={false}
                        draggable={false}
                        infinite={true}
                        // rewind={true} //enable if infinite=false
                        // rewindWithAnimation={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        slidesToSlide={1}
                        // removeArrowOnDeviceType={["tablet", "mobile"]}
                        // showDots={true}
                        // customTransition="all .5"
                        customTransition='transform 800ms ease-in-out'
                        transitionDuration={800}
                    >
                        {
                            bannerData2.map(data => (
                                <img src={data.url} alt="#" width='100%' style={{
                                    maxHeight: 250,
                                }} />
                            ))
                        }
                    </Carousel>

                    <Stack direction='column'>
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/8bc53f67ccad6427.jpg?q=50" alt="#" width='100%' />
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/3600/3600/image/10256a9f3d5d1c9a.png?q=80" alt="#" width='100%' />
                    </Stack>
                    <Typography mb={2} color='text.secondary' style={{
                        fontSize: '0.75rem',
                        lineHeight: '1.5',
                    }}>
                        Thanks to online portals, you don’t have to depend on travel agents or anyone else to make flight bookings. You can use your laptop or mobile phone to go through all the available flights, hotels, resorts, and more to make all your flight ticket bookings. Most of these portals offer many festive flight offers that will help you book international and domestic flights at great prices. This way, you can stay within your budget. Once you take care of your travel arrangements, you can also look through all the accommodation options available. Make sure that you go through all the reviews of the various properties listed online so that you can have a pleasant stay. Without doing enough research, you may end up paying a lot of money for a place that doesn’t suit your needs. So, while looking at the best flight offers online, you can also go through numerous blogs and articles about the best places to stay at your destination. This will help you find romantic, adventurous, or chilled-out properties. Once all your arrangements are done, you can plan your itinerary, pack your bags, and countdown the days until your much-awaited getaway. The information you are reading has been last updated on 29-Dec-23.
                    </Typography>
                </Stack>
            </Box>
        </div>
    )
}
