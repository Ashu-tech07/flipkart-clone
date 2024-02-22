import React from 'react'
import { ProductDetailsPage } from './ProductDetailsPage'
import {mobileProducts} from '../productListPage/assets/Data'

export const ConnectProductDetails = () => {
    console.log(mobileProducts);
    return (
        <>
            <ProductDetailsPage mobileData={mobileProducts} />
        </>
    )
}
