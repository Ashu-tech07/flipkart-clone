import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesVehicles, petrolVehicles } from '../productListPage/assets/Data'
import { ProductDetailsPage } from '../productDetails/ProductDetailsPage'


export const MobileNavigation = () => {
    return (
        <>
            <Routes>
                {
                    routesVehicles.map((data) => {
                        <Route path={data.link} element={< ProductDetailsPage imgUrl={data.url} title={data.title} rating={data.rating} />} />
                    })
                }

            </Routes>
            {/* {
          // routesVehicles.map((data) => {
          //   <Route path={data.link} element={< ProductDetailsPage imgUrl={data.url} title={data.title} rating={data.rating} />} />
          // })

          mobileProducts.map((data) => {
            return (
              <>
                {
                  Object.values(data.details).map((prod) => {
                    <Route path={prod.link} element={<ProductDetailsPage imgUrl={prod.url} title={prod.title} rating={prod.rating} />} />
                  })
                }
              </>
            )
          })
        } */}
        </>
    )
}
