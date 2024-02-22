export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const RMV_CART = "RMV_CART";
export const RMV_FROM_WISHLIST = 'RMV_FROM_WISHLIST';
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId) => {
    return {
        type: RMV_CART,
        payload: productId,
    };
};

export const incrementQuantity = (productId) => ({
    type: INCREMENT_QUANTITY,
    payload: productId,
});

export const decrementQuantity = (productId) => ({
    type: DECREMENT_QUANTITY,
    payload: productId,
});

export const addToWishlist = (product) => ({
    type: ADD_TO_WISHLIST,
    payload: product,
});

export const removeFromWishlist = (productId) => {
    return {
        type: RMV_FROM_WISHLIST,
        payload: productId,
    };
};