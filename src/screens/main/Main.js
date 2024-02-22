import React from 'react'
import { CarouselComp } from './CarouselComp'
import { CategoryComp } from './CategoryComp'
import { MainLandingPage } from './MainLandingPage'
import { largeFlight, largeImg } from '../header/Assets'
import { toysAndMore, topDeals, appliances, fashionBestSellers, recentlyViews, winterBuys, travelEssentials,
imageData1, imageData2, imageData3,imageData4,imageData5,imageData6,imageData7 } from '../../data/LandingData'
import { CommonLandingComp } from './CommonLandingComp'
import { MainTextArea } from './MainTextArea'
import { CardLanding } from './CardLanding'
import { ImageLanding } from './ImageLanding'
export default function Main() {
  return (
    <>
      <CategoryComp />
      <CarouselComp />
      <MainLandingPage />
      <CommonLandingComp heading={'Top Deals'} data={topDeals}/>
      <CardLanding heading={'Winter Best Buys'} data={winterBuys} largeImageUrl={largeImg}/>
      <ImageLanding imageData={imageData1}/>
      <CommonLandingComp heading={'Beauty, Food, Toys and More'} data={toysAndMore}/>
      <CardLanding heading={'Travel Essentials '} data={travelEssentials} largeImageUrl={largeFlight}/>
      <ImageLanding imageData={imageData2}/>
      <ImageLanding imageData={imageData3}/>
      <ImageLanding imageData={imageData4}/>
      <CommonLandingComp heading={'Fashion Best Sellers'} data={fashionBestSellers}/>
      <ImageLanding imageData={imageData6}/>
      <ImageLanding imageData={imageData5}/>
      <CommonLandingComp heading={'Appliances'} data={appliances}/>
      <CommonLandingComp heading={'Recently Views'} data={recentlyViews}/>
      <ImageLanding imageData={imageData7}/>
      <MainTextArea/>
    </>
  )
}

