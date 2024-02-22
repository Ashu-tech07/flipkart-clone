import { Box, Button, Divider, Fab, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../../redux/actions/CartAction';


export const Wishlist = () => {

    const dispatch = useDispatch();
    const wishList = useSelector((state) => state.cart.wishList);
    console.log('wishlist: ', wishList)
    const handleRemoveFromWishlist = (productId) => {
        dispatch(removeFromWishlist(productId));
    };

    return (
        <div>
            <Box sx={{
                maxWidth: '78rem',
                mt: 12,
                mx: 'auto',
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Stack rowGap={2}>
                            <Stack direction='row' columnGap={2} alignItems='center' sx={{
                                bgcolor: 'Background',
                                boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)',
                                p: '0.7rem 1rem',
                            }}>
                                <Box>
                                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="#" />
                                </Box>
                                <Typography variant='h6'>Hello</Typography>
                            </Stack>
                            <Stack sx={{
                                bgcolor: 'Background',
                                boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)',
                                p: '1rem',
                            }}>
                                <Stack direction='row' alignItems='center' columnGap={1}>
                                    <DriveFolderUploadRoundedIcon color='primary' />
                                    <Button endIcon={<KeyboardArrowRightIcon style={{
                                        fontSize: '1.5rem',
                                        paddingLeft: '6rem'
                                    }}
                                    />} sx={{
                                        color: '#878787',
                                        fontSize: '1rem'
                                    }}>
                                        My Orders
                                    </Button>
                                </Stack>
                                <Divider sx={{
                                    mt: '8px',
                                    mb: '16px'
                                }} />
                                <Stack direction='row' alignItems='center' columnGap={2}>
                                    <PersonIcon color='primary' />
                                    <Typography sx={{
                                        textTransform: 'uppercase',
                                        color: '#878787',
                                        fontWeight: '500',
                                    }}>
                                        Account Settings
                                    </Typography>
                                </Stack>
                                <Stack pt={2.4} rowGap={2}>
                                    <Typography variant='body2' pl={5.2}>Profile Information</Typography>
                                    <Typography variant='body2' pl={5.2}>Manage Address</Typography>
                                    <Typography variant='body2' pl={5.2}>PAN Card Information</Typography>
                                </Stack>
                                <Divider sx={{
                                    my: '1.6rem',
                                }} />
                                <Stack direction='row' alignItems='center' columnGap={2}>
                                    <PersonIcon color='primary' />
                                    <Typography sx={{
                                        textTransform: 'uppercase',
                                        color: '#878787',
                                        fontWeight: '500',
                                    }}>
                                        Account Settings
                                    </Typography>
                                </Stack>
                                <Stack pt={2.4} rowGap={2}>
                                    <Typography variant='body2' pl={5.2}>Profile Information</Typography>
                                    <Typography variant='body2' pl={5.2}>Manage Address</Typography>
                                    <Typography variant='body2' pl={5.2}>PAN Card Information</Typography>
                                </Stack>
                                <Divider sx={{
                                    my: '1.6rem',
                                }} />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={9}>
                        <Box sx={{
                            bgcolor: 'Background',
                            boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)',
                            p: '1.2rem 1rem',
                        }}>
                            <Typography fontWeight='500' gutterBottom>
                                My Wishlist
                            </Typography>
                            <Divider />
                            {wishList.map((item, index) => (
                                <>
                                    <Stack direction='row' key={index}>
                                        <Stack component={Link} to={`/product`} direction='row' columnGap={4} px={2} py={3} sx={{
                                            textDecoration: 'none'
                                        }}>
                                            <Box sx={{
                                                position: 'relative',
                                                width: 110,
                                                height: 110,
                                                margin: '0 auto',
                                            }}>
                                                <img src={item.url} alt="#" style={{
                                                    position: 'absolute',
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    margin: 'auto',
                                                    top: 0,
                                                    bottom: 0,
                                                    right: 0,
                                                    left: 0,
                                                }} />
                                            </Box>
                                            <Stack rowGap={1}>
                                                <Typography color='text.primary'>{item.title}</Typography>
                                                <Stack direction='row' columnGap={1}>
                                                    <Stack direction='row' alignItems='center' columnGap='0.2rem' bgcolor='rgb(0 128 0)' color='#FFFFFF' sx={{
                                                        padding: '1px 4px 1px 6px',
                                                        borderRadius: '3px',
                                                        maxWidth: '2rem',
                                                    }}>
                                                        <Typography fontSize='12px' fontWeight='bold' sx={{
                                                            paddingTop: '1px',
                                                        }}>{item.rating}</Typography>
                                                        <StarIcon sx={{
                                                            fontSize: '0.75rem',
                                                        }} />
                                                    </Stack>
                                                    <Typography variant='body2' color='#878787' fontWeight='500'>
                                                        (61,501)
                                                    </Typography>
                                                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="Flipkart Assured" style={{
                                                        maxWidth: '5rem',
                                                    }} />
                                                </Stack>
                                                <Stack direction='row' alignItems='center' columnGap='0.75rem' height='29px' pt={1.6}>
                                                    <Typography fontSize='22px' fontWeight='500' color='text.primary' component='span'>
                                                        {item.price.cost}
                                                    </Typography>
                                                    <Typography fontSize='14px' color='#878787' sx={{
                                                        textDecoration: 'line-through',
                                                    }}>
                                                        {item.price.mrp}
                                                    </Typography>
                                                    <Typography fontSize='13px' color='rgb(0 128 0)' fontWeight='500'>
                                                        {item.price.discount}
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                        </Stack>
                                        <Fab size='small' sx={{
                                            ml: 'auto',
                                            bgcolor: 'transparent',
                                            boxShadow: 'none',
                                            '&: hover': {
                                                bgcolor: 'transparent',
                                                boxShadow: 'none',
                                            },
                                        }}
                                            onClick={() => handleRemoveFromWishlist(item.link)}
                                        >
                                            <DeleteIcon color='disabled' fontSize='small' />
                                        </Fab>
                                    </Stack>
                                    <Divider />
                                </>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
