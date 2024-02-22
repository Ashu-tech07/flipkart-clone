
import { Box, Button, Divider, Grid, IconButton, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';
import { grocery } from './Assets'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/actions/CartAction';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Cart() {

    const dispatch = useDispatch();

    // Retrieve the cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.cartItems);

    //Sum of item prices
    const totalPrice = cartItems.reduce((acc, item) => {
        const numericCost = Number(item.price.mrp.replace(/[^0-9.-]+/g, ''));
        return acc + numericCost * item.quantity;
        // acc + item.price.cost, 0
    }, 0);

    const totalCost = cartItems.reduce((acc, item) => {
        const numericCost = Number(item.price.cost.replace(/[^0-9.-]+/g, ''));
        return acc + numericCost * item.quantity;
    }, 0);

    const discount = totalPrice - totalCost;
    const totalAmount = totalPrice - discount;

    // Function to handle removal of an item from the cart
    const handleRemoveFromCart = (productId) => {
        // Dispatch the REMOVE action with the product data
        dispatch(removeFromCart(productId));
    };

    const handleIncrement = (productId) => {
        dispatch(incrementQuantity(productId));
    };

    const handleDecrement = (productId) => {
        dispatch(decrementQuantity(productId));
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{
                maxWidth: '78rem',
                margin: '0 auto',
            }}>
                <Grid container columnSpacing={2}>
                    <Grid item xs={8.4}>
                        <Paper elevation={0} sx={{
                            borderBottom: 1,
                            borderColor: 'transparent',
                            borderRadius: 0,
                            mt: 12,
                            display: 'flex',
                            // width: '70%'
                        }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                                sx={{
                                    width: '100%',
                                    // ml: 8,
                                }}>
                                <Tab label="Flipkart" {...a11yProps(0)} sx={{
                                    textTransform: 'capitalize',
                                    textAlign: 'center',
                                    m: '0rem 3rem 0rem 3rem',
                                    width: '100%'
                                }} />
                                <Tab label="Grocery" {...a11yProps(1)} sx={{
                                    textTransform: 'capitalize',
                                    textAlign: 'center',
                                    m: '0px 20px 0px 20px',
                                    width: '100%'
                                }} />

                            </Tabs>
                        </Paper>
                        <Paper elevation={0} sx={{
                            borderBottom: 1,
                            borderColor: 'transparent',
                            borderRadius: 0,
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            // width: '70%'
                        }}>
                            <CustomTabPanel value={value} index={0} sx={{
                                width: '100%',
                            }}>
                                {/* Design for Login */}
                                {/* <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            //justifyContent:'center',
                            alignItems: 'center',
                        }}>

                            <Box sx={{
                                width: '30%',
                            }}>
                                <img alt='cart' src={cart} style={{
                                    width: '100%',
                                    height: 'auto'
                                }} />
                            </Box>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                Missing Cart Items?
                            </Typography>
                            <Typography sx={{
                                mt: '13px',
                                fontSize: '13px'
                            }}>
                                Login to see the items you added previously
                            </Typography>
                            <Button component={Link} to={'/login'} size='large' variant='contained' sx={{
                                textTransform: 'capitalize',
                                width: '25%',
                                mt: 2,
                                pt: '10px',
                                pb: '10px',
                                boxShadow: 0,
                                bgcolor: '#f4511e',
                                '&:hover': {
                                    bgcolor: '#f4511e'
                                }
                            }}>Login</Button>

                        </Box> */}


                                <Box>
                                    {cartItems.map((item, index) => (
                                        <>
                                            <Grid container key={index} >
                                                <Grid item xs={1.5}
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',

                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            position: 'relative',
                                                            width: 150,
                                                            height: 150,
                                                            margin: '0 auto',
                                                        }}>
                                                        <img src={item.url} alt="#"
                                                            style={{
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
                                                </Grid>
                                                <Grid item xs={6.5} py={1} minHeight='10rem' pl={5}>
                                                    <Box>
                                                        <Typography gutterBottom color='text.primary' sx={{
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            maxWidth: 'inherit',
                                                            textOverflow: 'ellipsis',
                                                        }}>
                                                            {item.title}
                                                        </Typography>
                                                        <Stack direction='row' columnGap='0.5rem' alignItems='center' pb={3}>
                                                            <Typography variant='body2' color='text.secondary'>
                                                                Seller: Truenet Commerce
                                                            </Typography>
                                                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="Flipkart Assured" style={{
                                                                maxWidth: '4rem',
                                                                maxHeight: '1rem',
                                                            }} />
                                                        </Stack>
                                                        <Stack spacing={2}>
                                                            <Stack direction='row' alignItems='center' columnGap='0.5rem'>
                                                                <Typography variant='body2' color='#878787' sx={{
                                                                    textDecoration: 'line-through',
                                                                }}>
                                                                    {item.price.cost !== item.price.mrp ? item.price.mrp : null}
                                                                </Typography>
                                                                <Typography fontWeight='500' color='text.primary' fontSize='1.1rem'>
                                                                    {item.price.cost}
                                                                </Typography>
                                                                <Typography variant='body2' fontWeight='500' color='rgb(0 128 0)'>
                                                                    {item.price.discount}
                                                                </Typography>
                                                            </Stack>
                                                            <Button sx={{
                                                                color: '#000000',
                                                                bgcolor: 'transparent',
                                                                maxWidth: '4rem',
                                                                '&:hover': {
                                                                    color: '#1976d2',
                                                                    bgcolor: 'transparent'
                                                                }
                                                            }}
                                                                onClick={() => handleRemoveFromCart(item.link)}
                                                            >
                                                                Remove
                                                            </Button>
                                                            <Stack direction='row' alignItems='center' columnGap={1}>
                                                                <IconButton size='small' sx={{
                                                                    border: '1px solid #c2c2c2',
                                                                    padding: '0.5rem',
                                                                }} onClick={() => handleDecrement(item.link)}>
                                                                    <RemoveIcon sx={{
                                                                        color: '#000000',
                                                                        fontSize: '0.8rem',
                                                                    }} />
                                                                </IconButton>
                                                                <Typography border='1px solid #c2c2c2' sx={{
                                                                    px: '1.2rem',
                                                                    py: '0.1rem',
                                                                    borderRadius: '2px',
                                                                    fontWeight: '500'
                                                                }}>{item.quantity}</Typography>
                                                                <IconButton size='small' sx={{
                                                                    border: '1px solid #c2c2c2',
                                                                    padding: '0.5rem',
                                                                }} onClick={() => handleIncrement(item.link)}>
                                                                    <AddIcon sx={{
                                                                        color: '#000000',
                                                                        fontSize: '0.8rem',
                                                                    }} />
                                                                </IconButton>
                                                            </Stack>
                                                        </Stack>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4} pl={13} py={1} minHeight='10rem'>
                                                    <Typography variant='caption'>
                                                        Delivery by Mon Jan 22
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider sx={{
                                                my: '1rem'
                                            }} />
                                        </>
                                    ))}
                                </Box>

                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <Grid Container sx={{
                                    // flexDirection:'column',
                                    justifyContent: 'center',
                                }} >
                                    <Grid item xs={4} sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <Box sx={{
                                            width: '35%',
                                        }}>
                                            <img alt='cart' src={grocery} style={{
                                                width: '100%',
                                                height: 'auto'
                                            }} />
                                        </Box>
                                        <Typography sx={{
                                            fontSize: '16px',
                                            fontWeight: 500,
                                        }}>
                                            Your basket is empty!
                                        </Typography>
                                        <Typography sx={{
                                            mt: '13px',
                                            fontSize: '13px'
                                        }}>
                                            Enjoy Upto 50% Savings on Grocery
                                        </Typography>
                                        <Button component={Link} to={'/grocery'} size='large' variant='contained' sx={{
                                            textTransform: 'capitalize',
                                            width: '25%',
                                            mt: 2,
                                            pt: '10px',
                                            pb: '10px',
                                            boxShadow: 0,

                                        }}>Shop Now</Button>
                                    </Grid>
                                </Grid>
                            </CustomTabPanel>
                        </Paper>


                    </Grid>
                    <Grid item xs={3.6}>
                        <Paper elevation={0} sx={{
                            borderBottom: 1,
                            borderColor: 'transparent',
                            borderRadius: 0,
                            mt: 12,
                            display: 'flex',
                            // width: '70%'
                        }}>
                            <Box sx={{
                                // bgcolor: 'red',
                                width: '100%'
                            }}>
                                <Typography gutterBottom color='#878787' fontWeight='500' sx={{
                                    p: '0.6rem 1.7rem',
                                }}>
                                    PRICE DETAILS
                                </Typography>
                                <Divider />
                                <Stack rowGap={2} sx={{
                                    p: '1rem 1.7rem',
                                }}>
                                    <Stack direction='row' justifyContent='space-between'>
                                        <Typography>
                                            {`Price (${cartItems.length} items)`}
                                        </Typography>
                                        <Typography>
                                            ₹{totalPrice}
                                        </Typography>
                                    </Stack>
                                    <Stack direction='row' justifyContent='space-between'>
                                        <Typography>
                                            Discount
                                        </Typography>
                                        <Typography color='#388e3c'>
                                            − ₹{discount}
                                        </Typography>
                                    </Stack>
                                    <Stack direction='row' justifyContent='space-between'>
                                        <Typography>
                                            Delivery Charges
                                        </Typography>
                                        <Stack direction='row' columnGap={1}>
                                            <Typography color='#878787' sx={{
                                                textDecoration: 'line-through',
                                            }}>
                                                ₹250
                                            </Typography>
                                            <Typography color='#388e3c'>
                                                Free
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Divider />
                                    <Stack direction='row' justifyContent='space-between'>
                                        <Typography fontSize='1.13rem' fontWeight='500'>
                                            Total Amount
                                        </Typography>
                                        <Typography fontSize='1.13rem' fontWeight='500'>
                                            ₹{totalAmount}
                                        </Typography>
                                    </Stack>
                                    <Divider />
                                    <Typography color='#388e3c' fontWeight='500'>
                                        You will save ₹{discount} on this order
                                    </Typography>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
