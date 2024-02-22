import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { toolsData } from './assets/Data';

export const Tools = () => {
    return (
        <div>
            <Box mt={10} mb={1} mx={1}>
                <Typography mb={1} fontWeight='500' fontSize='1.115rem'>Tools & Equipment</Typography>
                <Typography sx={{
                    fontSize: '0.75rem',
                    lineHeight: '1.5',
                    color: '#878787',
                    marginBottom: '1rem',
                }}>
                    A very useful piece of equipment to organise your tools is a toolbox that comes in handy whether you are a professional or a homemaker. Whether you are working on a large-scale DIY project or fixing a minor fault at home, reliable tools are necessary. Every household repair requires a handy tools kit consisting of screwdrivers, pliers, drill machines, wrenches, and many more. If you assemble furniture, tighten screws, or hang pictures, you have to rely on dependable tools India. While buying a toolbox, you should keep the colour and coating in mind, especially if you are using it for industrial purposes. You also need to keep your storage requirements in mind while buying it. The next thing to check is portability, i.e., if your toolbox is easy to carry around because a bulky toolbox would be a burden itself. And last but not least, these instruments should be sturdy and of professional quality for a hassle-free repair. You can buy such quality tool kits online from various brands such as BUILDSKILL, TAPARIA, VISKO, JACKLY, and BOSCH, consisting of various instruments including screwdriver sets, wrench sets, drill power, etc. Choose the one according to your needs after comparing their aesthetics, design, and price. This information is updated on 04-Jan-24.
                </Typography>
                <Box sx={styles.box1}>
                    {
                        toolsData.map((data) => {
                            return (
                                <>
                                    <Stack direction='row' p={2} alignItems='center'>
                                        <Stack direction='column' flexGrow={1}>
                                            <Typography fontSize='22px' fontWeight='500'>{data.brandName}</Typography>
                                        </Stack>
                                        <Button variant='contained' sx={styles.btn1}>View All</Button>
                                    </Stack>
                                    <Divider />
                                    <Stack direction={'row'} spacing={6} p={3} sx={styles.stack}>
                                        {
                                            Object.values(data.details).map((product) => {
                                                return (
                                                    <Box component={Link} to={`/tools/${product.link}`} sx={styles.productBox}>
                                                        <Box component={Box} sx={styles.imgContainer}>
                                                            <img src={product.url} alt="#" style={styles.img} />
                                                        </Box>
                                                        <Typography variant='body2' fontWeight='500' align='center' color='text.primary' mt={2} sx={styles.text1}>
                                                            {product.title}
                                                        </Typography>
                                                        <Typography variant='caption' color='text.secondary' sx={styles.text1}>
                                                            {product.byLine}
                                                        </Typography>
                                                        <Stack direction='row' alignItems='center' columnGap='0.45rem'>
                                                            <Typography variant='body1' color='text.primary' fontWeight='500' sx={styles.text1}>
                                                                {product.price.cost}
                                                            </Typography>
                                                            <Typography variant='body2' color='text.secondary' sx={styles.text2}>
                                                                {product.price.mrp}
                                                            </Typography>
                                                            <Typography variant='caption' fontWeight='500' color='rgb(0 128 0)' sx={styles.text1}>
                                                                {product.price.discount}
                                                            </Typography>
                                                        </Stack>
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
                        Q.Classify some of the clock types that are available online?<br />
                        A.You can explore a variety of clocks online, from classic to chic styles, such as wall clocks, alarm clocks, table clocks, analogue clocks, and digital clocks. Choose the one that complements your home décor and theme.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.Do the table clocks come along with storage space for stationery?<br />
                        A.Yes. You can choose from analogue table clocks that are compact, stylish, and add personality to your desk.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.How to decide whether to buy digital or analogue wall clocks?<br />
                        A.If you want to mount a clock that seamlessly goes well with your wall décor, then go for a decorative analogue wall clock that comes in a variety of designs, dial shapes, themes, etc.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What are the popular variants of wall clocks available here?<br />
                        A.From classic old designs to trendy designs, you can explore popular wall clock variants, such as grandfather clocks, pendulum wall clocks, fancy and creative clocks, etc.
                    </Typography>
                    <Divider />
                    <Typography fontSize='12px' >
                        Q.What are the top brands that offer the best clocks?<br />
                        A.Titan, Timex, Kadio, 13House, 7CR, etc., are some popular clock brands.
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