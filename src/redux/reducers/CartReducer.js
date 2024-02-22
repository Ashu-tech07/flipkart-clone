import { ADD_TO_CART, RMV_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, ADD_TO_WISHLIST, RMV_FROM_WISHLIST } from "../actions/CartAction";

const initialState = {
    cartItems: [],
    wishList: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // return {
            //     ...state,
            //     cartItems: [...state.cartItems, action.payload],
            // };

            const existingItem = state.cartItems.find(item => item.link === action.payload.link);

            if (existingItem) {
                // If the item already exists, increment the quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.link === action.payload.link ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                // If the item doesn't exist, add it to the cart
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }
        case RMV_CART:
            const updatedCartItems = state.cartItems.filter((item) => item.link !== action.payload);
            return {
                ...state,
                cartItems: updatedCartItems,
            };

        // // Remove the item from the cart or decrement its quantity
        // const updatedCartItems = state.cartItems.map(item =>
        //     item.link === action.payload.link ? { ...item, quantity: item.quantity - 1 } : item
        // ).filter(item => item.quantity > 0);

        // return {
        //     ...state,
        //     cartItems: updatedCartItems,
        // };
        case INCREMENT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.link === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };

        case DECREMENT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.link === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                ).filter(item => item.quantity > 0),
            };

        case ADD_TO_WISHLIST:
            // return {
            //     ...state,
            //     cartItems: [...state.cartItems, action.payload],
            // };

            // Check if the product is already in the wishlist
            if (state.wishList.some(item => item.link === action.payload.link)) {
                // If it is, return the current state without adding a duplicate entry
                return state;
            }

            return {
                ...state,
                wishList: [...state.wishList, action.payload],
            };

        case RMV_FROM_WISHLIST:
            const updatedWishlistItems = state.wishList.filter((item) => item.link !== action.payload);
            return {
                ...state,
                wishList: updatedWishlistItems,
            };

        default:
            return state;
    }
};
// export default cartReducer;