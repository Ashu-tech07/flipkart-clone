import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarIcon from '@mui/icons-material/Star';
import SellSharpIcon from '@mui/icons-material/SellSharp';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useParams } from 'react-router-dom';
import { mobileProducts, beautyProducts, applianceProducts, sportsProducts, booksData, furnitureData, decorData, toolsData, electronicsData, laptopProducts, cameraProducts, menProducts, womenProducts, kidsProducts, petrolVehicles, electricVehicles } from '../productListPage/assets/Data';
import { addToCart, addToWishlist, removeFromWishlist } from '../../redux/actions/CartAction';
import { useDispatch, useSelector } from 'react-redux';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

export const ProductDetailsPage = (props) => {

    const [isFavorite, setIsFavorite] = useState(false);

    // const [product, setProduct] = useState(mobileProducts)
    // console.log("gfgh", product);


    // //add to cart
    // const addToCart = (link) => {
    //     console.log("add to cart id", link);
    //     dispatch(ADD(link));
    // }
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const handleAddToCart = () => {
        // Dispatch the ADD action with the product data
        dispatch(addToCart(productDetails));
        // Log the product data or perform any other desired action
        console.log('Product added to cart:', productDetails);
    };

    const handleAddToWishlist = () => {
        // dispatch(addToWishlist(productDetails));
        // console.log('Product added to wishlist:', productDetails);
        // setIsFavorite((prevIsFavorite) => !prevIsFavorite);


        // Ensure that state is defined
        if (!state) {
            console.error('State is not defined');
            return;
        }

        const isInWishlist = state.cart.wishList && state.cart.wishList.some(item => item.link === productDetails.link);

        if (isInWishlist) {
            // Product is already in wishlist, so remove it
            dispatch(removeFromWishlist(productDetails.link));
            console.log('Product removed from wishlist:', productDetails.link);
        } else {
            // Product is not in wishlist, so add it
            dispatch(addToWishlist(productDetails));
            console.log('Product added to wishlist:', productDetails);
        }

        // Toggle the state of isFavorite
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    };


    const { productId, category } = useParams();
    console.log('Product ID:', productId);

    // Fetch product details using productId
    let selectedProduct;
    // Determine the category and find the product details
    switch (category) {
        case 'mobile':
            selectedProduct = mobileProducts.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'beauty':
            selectedProduct = beautyProducts.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'appliance':
            selectedProduct = applianceProducts.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'sports':
            selectedProduct = sportsProducts.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'books':
            selectedProduct = booksData.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'furniture':
            selectedProduct = furnitureData.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'decor':
            selectedProduct = decorData.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'tools':
            selectedProduct = toolsData.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'electronics':
            selectedProduct = electronicsData.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'laptop':
            selectedProduct = laptopProducts.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'camera':
            selectedProduct = cameraProducts.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'men':
            selectedProduct = menProducts.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'women':
            selectedProduct = womenProducts.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'kids':
            selectedProduct = kidsProducts.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'petrol':
            selectedProduct = petrolVehicles.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        case 'electric':
            selectedProduct = electricVehicles.find((data) =>
                Object.values(data.details).find((product) => product.link === productId)
            );
            break;
        default:
            // Handle invalid category
            break;
    }

    if (!selectedProduct) {
        // Handle the case where the product with the given ID is not found
        return <div>Product not found</div>;
    }
    console.log('Selected Product:', selectedProduct);
    const productDetails = Object.values(selectedProduct.details).find(product => product.link === productId);

    console.log('Product Details:', productDetails);
    const isInWishlist = state.cart.wishList && state.cart.wishList.some(item => item.link === productDetails.link);

    if (!productDetails) {
        // Handle the case where the details for the specific product ID are not found
        return <div>Product details not found</div>;
    }

    // Destructure relevant properties from the selected product
    const { url, title, rating } = productDetails;
    const { mrp, cost, discount } = productDetails.price;
    return (
        <div>
            <Box mt={10} mx={11} bgcolor='background.paper'>
                <Grid container minWidth='100%'>
                    <Grid item xs={5} py={2}>
                        <Stack direction='column' px={5} rowGap={2} >
                            <Stack alignItems='center' justifyContent='center' border='1px solid #f0f0f0'
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 450,
                                    margin: '0 auto',
                                }}>
                                <Fab disableFocusRipple='true' disableRipple='true' sx={{
                                    width: '35px',
                                    height: '35px',
                                    position: 'absolute',
                                    top: '3%',
                                    right: '2%',
                                    boxShadow: '0 1px 4px 0 rgba(0,0,0,.1)',
                                    bgcolor: 'transparent',
                                    pt: '0.2rem',
                                    '&: hover': {
                                        bgcolor: 'transparent',
                                    }
                                }}
                                    onClick={handleAddToWishlist}
                                >
                                    {isInWishlist ? <FavoriteSharpIcon sx={{ fontSize: '1.1rem', color: 'red' }} /> : <FavoriteIcon sx={{ fontSize: '1.1rem', color: '#cecdcd' }} />}
                                </Fab>
                                <img src={url} alt={title}
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
                            </Stack>
                            <Stack direction='row' columnGap={1}>
                                <Button fullWidth variant='contained' startIcon={<ShoppingCartIcon />}
                                    sx={{
                                        height: '3.3rem',
                                        bgcolor: '#ff9f00',
                                        borderRadius: '2px',
                                        boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
                                        '&:hover': {
                                            bgcolor: '#ff9f00',
                                            boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
                                        },
                                    }}
                                    // onClick={() => addToCart(productId)}
                                    onClick={handleAddToCart}
                                >Add to Cart</Button>
                                <Button fullWidth variant='contained' startIcon={<FlashOnIcon />}
                                    sx={{
                                        height: '3.3rem',
                                        bgcolor: '#fb641b',
                                        borderRadius: '2px',
                                        boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
                                        '&:hover': {
                                            bgcolor: '#fb641b',
                                            boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
                                        },
                                    }}>Buy Now</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={7} py={2}>
                        <Stack rowGap={1}>
                            <Typography fontSize='1.1rem'>
                                {title}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                columnGap: '0.6rem',
                            }}>
                                <Stack direction='row' alignItems='center' columnGap='0.2rem' bgcolor='rgb(0 128 0)' color='#FFFFFF' sx={{
                                    padding: '1px 4px 1px 6px',
                                    borderRadius: '3px',
                                    maxWidth: '2rem',
                                }}>
                                    <Typography fontSize='12px' fontWeight='bold' sx={{
                                        paddingTop: '1px',
                                    }}>{rating}</Typography>
                                    <StarIcon sx={{
                                        fontSize: '0.75rem',
                                    }} />
                                </Stack>
                                <Typography variant='body2' color='text.secondary' fontWeight='600'>
                                    61,501 Ratings & 2,715 Reviews
                                </Typography>
                                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="Flipkart Assured" style={{
                                    maxWidth: '5rem',
                                }} />
                            </Box>
                            <Typography color='rgb(0 128 0)' fontSize='14px' fontWeight='500'>
                                Extra ₹2000 off
                            </Typography>
                            <Stack direction='row' alignItems='center' columnGap='0.75rem' height='29px'>
                                <Typography fontSize='28px' fontWeight='500' component='span'>
                                    {cost}
                                </Typography>
                                <Typography fontSize='16px' color='#878787' sx={{
                                    textDecoration: 'line-through',
                                }}>
                                    {mrp}
                                </Typography>
                                <Typography fontSize='16px' color='rgb(0 128 0)' fontWeight='500'>
                                    {discount}
                                </Typography>
                            </Stack>
                            <Typography fontSize='16px' fontWeight='500'>Available offers</Typography>
                            <Stack direction='row' alignItems='center'>
                                <SellSharpIcon sx={{
                                    paddingRight: '0.5rem',
                                    fontSize: '1.1rem',
                                    color: '#15bd47',
                                }} />
                                <Typography fontSize='14px' fontWeight='500'>
                                    Bank Offer
                                    <Typography component='span' fontSize='14px'> 5% Cashback on Flipkart Axis Bank Card</Typography>
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <SellSharpIcon sx={{
                                    paddingRight: '0.5rem',
                                    fontSize: '1.1rem',
                                    color: '#15bd47',
                                }} />
                                <Typography fontSize='14px' fontWeight='500'>
                                    Special Price
                                    <Typography component='span' fontSize='14px'> Get extra ₹2000 off (price inclusive of cashback/coupon)</Typography>
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <SellSharpIcon sx={{
                                    paddingRight: '0.5rem',
                                    fontSize: '1.1rem',
                                    color: '#15bd47',
                                }} />
                                <Typography fontSize='14px' fontWeight='500'>
                                    Buy More, Save More
                                    <Typography component='span' fontSize='14px'> Buy worth ₹3000 save ₹1000</Typography>
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <EventAvailableIcon sx={{
                                    paddingRight: '0.5rem',
                                    fontSize: '1.1rem',
                                    color: '#15bd47',
                                }} />
                                <Typography component='span' fontSize='14px'> EMI starting from ₹317/month</Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <SellSharpIcon sx={{
                                    paddingRight: '0.5rem',
                                    fontSize: '1.1rem',
                                    color: '#15bd47',
                                }} />
                                <Typography fontSize='14px' fontWeight='500'>
                                    Bank Offer
                                    <Typography component='span' fontSize='14px'> Extra ₹500 off on ICICI Bank Credit Card and EMI Txns on products priced ₹39,990 and above</Typography>
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <SellSharpIcon sx={{
                                    paddingRight: '0.5rem',
                                    fontSize: '1.1rem',
                                    color: '#15bd47',
                                }} />
                                <Typography fontSize='14px' fontWeight='500'>
                                    Bank Offer
                                    <Typography component='span' fontSize='14px'> Extra ₹750 off on Bank of Baroda Credit Card and EMI Txns on Net Cart Value of ₹24,990 and above</Typography>
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <SellSharpIcon sx={{
                                    paddingRight: '0.5rem',
                                    fontSize: '1.1rem',
                                    color: '#15bd47',
                                }} />
                                <Typography fontSize='14px' fontWeight='500'>
                                    Bank Offer
                                    <Typography component='span' fontSize='14px'> 10% off on ICICI Bank Debit Card and EMI Transactions, up to ₹1000, on orders of ₹5,000 and above</Typography>
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <SellSharpIcon sx={{
                                    paddingRight: '0.5rem',
                                    fontSize: '1.1rem',
                                    color: '#15bd47',
                                }} />
                                <Typography fontSize='14px' fontWeight='500'>
                                    Bank Offer
                                    <Typography component='span' fontSize='14px'> 5% Cashback on Flipkart Axis Bank Card</Typography>
                                </Typography>
                            </Stack>
                        </Stack>
                        {/* <Divider sx={{ mt: 3, mb: 2 }} /> */}
                        <img src="https://rukminim2.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50" alt="#" style={{
                            margin: '24px 0 16px 0',
                        }} />
                        <Grid container>
                            <Grid item xs={1.7}>
                                <Typography variant='body2' fontWeight='500' color='#878787'>
                                    Description
                                </Typography>
                            </Grid>
                            <Grid item xs={10.3}>
                                <Typography variant='body2' mt={3}>
                                    This {title} is loaded with features that give wings to your capabilities and improve your performance. Quick charge your mobile with the 33 W SUPERVOOC charger. Carry around this mini-capsule compact device everywhere that is only 7.99 mm thick with fashionable and glittery looks. Capture captivating photographs with the 50 MP AI camera. Transition through numerous applications smoothly as the smartphone has up to 8 GB Dynamic RAM. Protect your data and access your phone with the side-mounted fingerprint that offers enhanced security to all your sensitive information.
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* <Divider sx={{ mt: 3, mb: 2, }} /> */}
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Typography } from '@mui/material';
// import { mobileProducts, beautyProducts } from '../productListPage/assets/Data';

// export const ProductDetailsPage = () => {
//     const { category, productId } = useParams();
//     let selectedProduct;
//     // let productDetails = null;

//     // Determine the category and find the product details
//     switch (category) {
//         case 'mobiles':
//             selectedProduct = mobileProducts.find((data) =>
//                 Object.values(data.details).find((product) => product.link === productId)
//             );
//             console.log(selectedProduct);
//             // productDetails = mobileProducts.find((data) =>
//             //     Object.values(data.details).find((product) => product.link === productId)
//             // );
//             break;
//         case 'beauty':
//             selectedProduct = beautyProducts.find((data) =>
//                 Object.values(data.details).find((product) => product.link === productId)
//             );
//             // productDetails = beautyProducts.find((data) =>
//             //     Object.values(data.details).find((product) => product.link === productId));
//             break;
//         default:
//             // Handle invalid category
//             break;
//     }
//     // console.log(selectedProduct);

//     if (!selectedProduct) {
//         // Handle the case where the product with the given ID is not found
//         return <div>Product not found</div>;
//     }

//     const productDetails = Object.values(selectedProduct.details).find(product => product.link === productId);
//     console.log(productDetails);

//     if (!productDetails) {
//         // Handle the case where the details for the specific product ID are not found
//         return <div>Product details not found</div>;
//     }

//     // Destructure relevant properties from the selected product
//     const { url, title } = productDetails;

//     console.log(category);
//     console.log(productId);

//     // Render product details
//     return (
//         <div>

//             <Box mt={10} mx={11} bgcolor="background.paper">
//                 <Typography variant="h4">{title}</Typography>
//                 <img src={url} alt={title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
//             </Box>
//         </div>
//     );
// };


