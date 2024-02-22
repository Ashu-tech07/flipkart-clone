import { Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

export const DestinationPage = () => {
    // Retrieve the cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);

    // const cartItem = cartItems.length > 0 ? cartItems[0] : null;

    // Use cartItems data as needed in your component
    return (
        <div>
            <Box mt={11}>
                <Typography>Cart</Typography>
                {/* {
                    cartItem ? (
                        <div>
                            <Typography>
                                {cartItem.title}
                            </Typography>
                            <Typography>
                                {cartItem.price.mrp}
                            </Typography>
                            <Typography>
                                {cartItem.rating}
                            </Typography>
                        </div>
                    ) : (
                        <Typography>Your cart is Empty</Typography>
                    )
                } */}

                {cartItems.map((item, index) => (
                    <Box key={index}>
                        <Typography >
                            {item.title}
                        </Typography>
                        <Typography >
                            {item.price.mrp}
                        </Typography>
                        <Typography >
                            {item.rating}
                        </Typography>
                    </Box>
                ))}

            </Box>
        </div>
    )
}
