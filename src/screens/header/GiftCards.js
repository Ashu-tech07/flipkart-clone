import { Divider, Grid, Paper, Typography } from '@mui/material'
import {giftcards, gift2, gift3, gift4,  gift6, gift7, gift8, gift9, gift10, gift11, gift12, gift13, gift14} from './Assets'

import React from 'react'
import { Link } from 'react-router-dom'

export const GiftCards = () => {
    return (
        <>
            <Typography sx={Styles.giftHeading}>
                Gift Card Store
            </Typography>
            <Typography sx={Styles.text}>Special occasions call for special gifts. Whether it’s a birthday or an anniversary,
                finding the right gift for your loved ones is always a difficult task. And after you get a gift,
                you have to hope that they like what you got. Well, there’s a simple solution to this conundrum -
                Flipkart Gift Cards Store. You can give Flipkart gift cards and Vouchers across multiple occasions to your
                friends or family and give them the chance to shop for whatever their heart desires. So, what are you waiting
                for? Get gift vouchers online on Flipkart, gift or redeem them and do more with this feature. Flipkart Gift Card
                Store also has a wide range of Gift Cards from categories such as travel, jewellery, fashion, grocery, and apps
                & more. You can choose from a diverse range of denominations available or enter any preferred amount between
                Rs 25 to Rs 10,000. Bid adieu to gifting troubles, send online gift cards to your friends and family, bring
                a smile to their faces and make special moments even more special!. The information you are reading has been
                last updated on 29-Dec-23.
            </Typography>
            <Paper elevation={0} sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <img alt='giftcards' src={giftcards}
                    style={Styles.img} />
                <img alt='giftcards' src={gift2}
                    style={Styles.img} />
               <Link to='/login'> <img alt='giftcards' src={gift3}
                    style={Styles.img} /></Link>
                <img alt='giftcards' src={gift4}
                    style={Styles.img} />

                <Grid container direction={'row'} sx={{

                }}>
                    <Grid item xs={3} container direction={'column'}>
                        <img alt='giftcards' src={gift13}
                            style={Styles.imgPrice} />
                        <img alt='giftcards' src={gift10}
                            style={Styles.imgPrice} />
                        <Divider orientation='vertical' sx={{ borderRightWidth: 5 }} />
                    </Grid>
                    <Grid item xs={3} container direction={'column'}>
                        <img alt='giftcards' src={gift14}
                            style={Styles.imgPrice} />
                        <img alt='giftcards' src={gift7}
                            style={Styles.imgPrice} />
                        <Divider orientation='vertical' sx={{ borderRightWidth: 5 }} />
                    </Grid>
                    <Grid item xs={3} container direction={'column'}>
                        <img alt='giftcards' src={gift12}
                            style={Styles.imgPrice} />
                        <img alt='giftcards' src={gift8}
                            style={Styles.imgPrice} />
                        <Divider orientation='vertical' sx={{ borderRightWidth: 5 }} />
                    </Grid>
                    <Grid item xs={3} container direction={'column'}>
                        <img alt='giftcards' src={gift11}
                            style={Styles.img} />
                        <img alt='giftcards' src={gift9}
                            style={Styles.img} />

                    </Grid>
                </Grid>


                <img alt='giftcards' src={gift6}
                    style={Styles.img} />


            </Paper>

            <Paper elevation={0} sx={{
                mt:4,
            }}>
                <Typography sx={Styles.footerHeading}>
                    Flipkart Gift Cards - For Those Special Moments
                </Typography>
                <Typography sx={Styles.footerText}>
                    Gift Cards provide for an ideal gifting solution for all occasions in addition to the ease of gifting
                    it also provides a choice to the individual to buy something they want and when they want.
                    If you can’t decide what to get someone, there’s a simple solution for this - Go to the Gift Cards
                    Section on Flipkart. From something as small as fashion accessories and groceries to travel coupons
                    and jewellery vouchers, gift vouchers offer a great way to let the recipient choose what they want.
                    Gift Cards range from Rs. 50 to Rs. 10,000 and above. You can choose one as per your wish and the category
                    you want to choose. You can gift them Flipkart Gift Cards or choose from 100+ brands like Myntra,
                    Tanishq, Croma, Google Play, Big Bazar & others from categories such as Fashion, Travel, Jewellery,
                    Grocery, Apps and Subscriptions.
                </Typography>
                <Typography sx={Styles.footerHeading}>
                    Buy Flipkart Gift Cards & Vouchers Online
                </Typography>
                <Typography sx={Styles.footerText}>
                    Purchasing gift vouchers online is very simple. At the product page, select the value of the gift
                    card you would like to purchase, click on buy now and then enter the recipient details , address
                    (if required) and 'proceed to pay’. You can then pay using a credit card, debit card,
                    net banking & UPI. After the checkout process, you will receive an email with the Gift card details.

                    If you have irregular working hours and do not have time to do shopping,
                    or if a special event is around the corner and you’re still wondering what
                    to get, then Flipkart gift cards are the best option for you. Send your loved ones
                    Flipkart vouchers and give them the freedom of choosing what their heart desires the most.
                </Typography>
            </Paper>


        </>
    )
}

const Styles={
    giftHeading:{
        fontSize: '16px',
        fontWeight: 550,
        mb: 3,
        ml: 1,
        mt: 12,
    },
    text:{
        fontSize: '12px',
        whiteSpace: 'normal',
        mb: 1,
        ml: 1,
        color: 'grey',
    },
    img:{
        width: '100%',
        height: 'auto',
    },
    imgPrice:{
        width: '98%',
        height: 'auto',
    },
    footerHeading:{
        color:'grey',
        fontSize:'16px',
        fontWeight:600,
        ml:2,
        pt:3,
        mb:1,
    },
    footerText:{
        color:'grey',
        fontSize:'12px',
        ml:2,
        pb:2,
    }
    

}
