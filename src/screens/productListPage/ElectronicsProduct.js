import { Box, Button, Divider, Stack, Typography, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { electronicsData } from './assets/Data';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const ElectronicsProduct = () => {
    return (
        <div>
            <Box mt={11} mb={1} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Best of Electronics</Typography>
                <Box sx={styles.box1}>
                    {
                        electronicsData.map((data) => {
                            return (
                                <>
                                    <Stack direction='row' p={2} alignItems='center'>
                                        <Stack direction='column' flexGrow={1}>
                                            <Typography fontSize='22px' fontWeight='500'>{data.brandName}</Typography>
                                            <Typography variant='body2' color='#b2b2b2'>Top Deals</Typography>
                                        </Stack>
                                        <Button variant='contained' sx={styles.btn1}>View All</Button>
                                    </Stack>
                                    <Divider />
                                    <Stack direction={'row'} spacing={9} p={3} sx={styles.stack}>
                                        {
                                            Object.values(data.details).map((product) => {
                                                return (
                                                    <Box component={Link} to={`/electronics/${product.link}`} sx={styles.productBox}>
                                                        <IconButton sx={{
                                                            position: 'relative',
                                                            left: '44%',
                                                            top: '5%'
                                                        }}> <FavoriteIcon color='disabled' sx={{
                                                            fontSize: '1.1rem'
                                                        }} /> </IconButton>
                                                        <Box component={Box} sx={styles.imgContainer}>
                                                            <img src={product.url} alt="#" style={styles.img} />
                                                        </Box>
                                                        <Typography variant='body2' fontWeight='500' align='center' color='text.primary' mt={2} sx={styles.text1}>
                                                            {product.title}
                                                        </Typography>
                                                        <Typography variant='body2' color='rgb(0 128 0)' sx={styles.text1}>
                                                            {product.tagline}
                                                        </Typography>
                                                        <Typography variant='body2' color='text.secondary' sx={styles.text1}>
                                                            {product.byLine}
                                                        </Typography>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Stack>
                                    <Divider />
                                </>
                            )
                        })
                    }
                </Box>
            </Box>

            <Box mt={5} sx={styles.box1}>
                <Stack direction='column' spacing='10px' py={4} px={3}>
                    <Typography fontSize='16px' fontWeight='bold' >Question and Answers</Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What books should I read?<br />
                        A.This answer solely depends on the genre you are looking for. There are many books that you can want to read. We would suggest you narrow down your preferences according to your preferred genre, then read the synopsis and finalise the books that you would like to read.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What are the most popular books right now?<br />
                        A.As mentioned above, a few of the best-selling books are The 12-week Fitness Project by Rujuta Diwekar, Ikigai by Héctor García, With Love by Terribly Tiny Tales, No Limits by Mukesh Bansal and Death by Sadhguru. You can buy these books from our online store.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Where can I order books from?<br />
                        A.You can order a wide range of books from Flipkart. We have an assortment of books in different styles, subjects and genres. Browse through our site to know more about the huge collection we have in store for you.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Are books better than E-books?<br />
                        A.According to me, books are far better than E-books. The mere smell of a new book excites me enough to read half of it the same day I bought it. Holding a book in your hands and reading it the authentic way feels more satisfying than reading it from a screen.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Are books better than movies?<br />
                        A.This answer is subjective and depends on the personal choice of a person. For me, sometimes books are better and sometimes movies. For instance, when it comes to Harry Potter, I preferred the books over movies. As cliched as it sounds, the movies missed out on a number of scenes that are beautifully expressed in the books.
                    </Typography>
                </Stack>
            </Box>
        </div>
    )
}

const styles = {
    box1: {
        backgroundColor: 'background.paper',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)',
        borderTop: '2px solid #eaeaea',
    },
    btn1: {
        height: '2.3rem',
        fontSize: '0.8rem',
        fontWeight: '500',
        borderRadius: '2px',
    },
    stack: {
        overflowX: 'auto',
        '&::-webkit-scrollbar': {  // For Chrome, Safari and Opera
            display: 'none'
        },
        scrollbarWidth: 'none',  // For Firefox
        msOverflowStyle: 'none',  // For Internet Explorer and Edge
    },
    productBox: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '0.4rem',
        alignItems: 'center',
        textDecoration: 'none',
        maxWidth: '11rem',
    },
    imgContainer: {
        position: 'relative',
        width: 150,
        height: 150,
        margin: '0 auto',
    },
    img: {
        position: 'absolute',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    text1: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 'inherit',
        textOverflow: 'ellipsis',
    },
    text2: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 'inherit',
        textOverflow: 'ellipsis',
        textDecoration: 'line-through',
    },
}