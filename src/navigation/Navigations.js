import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../screens/header/Login';
import Signup from '../screens/header/Signup';
import Main from '../screens/main/Main';
import Terms from '../screens/header/Terms';
import PrivacyPolicy from '../screens/header/PrivacyPolicy';
import FlipkartPlus from '../screens/header/FlipkartPlus';
import Cart from '../screens/header/Cart';
import { Wishlist } from '../screens/header/Wishlist';
import { ElectronicsProduct } from '../screens/productListPage/ElectronicsProduct';
import { Mobile } from '../screens/productListPage/Mobile';
import { Appliances } from '../screens/productListPage/Appliances';
import { Travel } from '../screens/productListPage/Travel';
import { Grocery } from '../screens/productListPage/Grocery';
import { Rewards } from '../screens/header/Rewards';
import { GiftCards } from '../screens/header/GiftCards';
import { Notifications } from '../screens/header/Notifications';
import { DownloadApp } from '../screens/header/DownloadApp';
import { Advertise } from '../screens/header/Advertise';
import { BeautyProduct } from '../screens/productListPage/BeautyProduct';
import { Sports } from '../screens/productListPage/Sports';
import { Books } from '../screens/productListPage/Books';
import { HelpCenter } from '../screens/header/HelpCenter';
import { Furniture } from '../screens/productListPage/Furniture';
import { Decor } from '../screens/productListPage/Decor';
import { Tools } from '../screens/productListPage/Tools';
import { Laptop } from '../screens/productListPage/Laptop';
import { Camera } from '../screens/productListPage/Camera';
import PhoneCarouselitems from '../screens/main/PhoneCarouselitems';
import TravelCarouselitems from '../screens/main/TravelCarouselitems';
import LedCarouselitems from '../screens/main/LedCarouselitems';
import Bestelectronic from '../screens/main/Bestelectronic';
import { MenProducts } from '../screens/productListPage/MenProducts';
import { WomenProducts } from '../screens/productListPage/WomenProducts';
import { KidsProducts } from '../screens/productListPage/KidsProducts';
import { PetrolVehicles } from '../screens/productListPage/PetrolVehicles';
import { ElectricVehicles } from '../screens/productListPage/ElectricVehicles';
import { ProductDetailsPage } from '../screens/productDetails/ProductDetailsPage';
import { DestinationPage } from '../screens/productDetails/DestinationPage';
// import { ProductDetailsPage } from '../productDetails/ProductDetailsPage'

export default function Navigations() {
  return (
    <>
      <Routes>
        <Route path='/flipkart-clone' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/fk_plus' element={<FlipkartPlus />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/destination' element={<DestinationPage />} />
        <Route path='/mobile' element={<Mobile />}></Route>
        <Route path='/appliances' element={<Appliances />}></Route>
        <Route path='/travel' element={<Travel />}></Route>
        <Route path='/grocery' element={<Grocery />}></Route>
        <Route path='/beauty' element={<BeautyProduct />} ></Route>
        <Route path='/sports' element={<Sports />} ></Route>
        <Route path='/books' element={<Books />} ></Route>
        <Route path='/furniture' element={<Furniture />} ></Route>
        <Route path='/decor' element={<Decor />} ></Route>
        <Route path='/tools' element={<Tools />} ></Route>
        <Route path='/electronics' element={<ElectronicsProduct />}></Route>
        <Route path='/laptop' element={<Laptop />} ></Route>
        <Route path='/camera' element={<Camera />} ></Route>
        <Route path='/men' element={<MenProducts />} ></Route>
        <Route path='/women' element={<WomenProducts />} ></Route>
        <Route path='/kids' element={<KidsProducts />} ></Route>
        <Route path='/petrolVehicles' element={<PetrolVehicles />} ></Route>
        <Route path='/electricVehicles' element={<ElectricVehicles />} ></Route>
        {/* <Route path='/product1' element={<ConnectProductDetails />} ></Route> */}
        {/* <Route path='/product/:productId' element={<ProductDetailsPage />} /> */}
        <Route path="/:category/:productId" element={<ProductDetailsPage />} />
        {/* <Route path='/product/:productId' element={<ConnectProductDetails />} /> */}
        {/* <Route path='/laptop/:productId' element={<ConnectProductDetails />} /> */}
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/gift_cards' element={<GiftCards />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/download_app' element={<DownloadApp />} />
        <Route path='/advertise' element={<Advertise />} />
        <Route path='/helpcenter' element={<HelpCenter />} />
        <Route path='/PhoneCarouselitems' element={<PhoneCarouselitems />} />
        <Route path='/TravelCarouselitems' element={<TravelCarouselitems />} />
        <Route path='/LedCarouselitems' element={<LedCarouselitems />} />
        <Route path='/bestelectronic' element={<Bestelectronic />} />
        

      </Routes>
    </>
  )
}
