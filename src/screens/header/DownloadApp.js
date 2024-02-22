import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import {backgroundImg,fkLogo, genuineProduct,securePic,hashleFree,playStore,appStore} from './Assets'
import { Link } from 'react-router-dom'


export const DownloadApp = () => {
    return (
        <>
            <Container maxWidth='lg' sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: 'no-repeat',
                mt: 10,
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '65%',
                    pt: 8
                }}>
                    <Box sx={{
                        width: '30%',
                        alignSelf: 'center',
                    }}>
                        <img alt='cart' src={fkLogo} style={{
                            width: '100%',
                            height: 'auto'
                        }} />
                    </Box>
                    <Typography sx={{
                        fontSize: '48px',
                        color: 'whitesmoke',
                        fontWeight: 550,
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        mt: 1,
                    }}>
                        India's most popular!
                    </Typography>
                    <Typography sx={{
                        fontSize: '42px',
                        color: 'whitesmoke',
                        textAlign: 'center',
                        textTransform: 'uppercase',

                    }}>
                        shopping app
                    </Typography>

                    <Box sx={{
                        display: 'inline-flex',
                        justifyContent:'center',
                        pt:6
                    }} >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems:'center',
                        }}>
                            <Box sx={{
                                //width:'20%'
                            }}>
                                <img alt='cart' src={genuineProduct} style={{
                                    width: 'auto',
                                    height: 'auto'
                                }} />
                            </Box>
                            <Typography sx={{
                                color:'whitesmoke',
                                fontSize:'16px',
                                pl:2, pr:4,
                            }}>
                                Genuine Products
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems:'center',
                        }}>
                            <Box sx={{
                                //width:'20%'
                            }}>
                                <img alt='cart' src={securePic} style={{
                                    width: 'auto',
                                    height: 'auto'
                                }} />
                            </Box>
                            <Typography sx={{
                                color:'whitesmoke',
                                fontSize:'16px',
                                pl:2,
                                pr:4,
                            }}>
                                Secure Shopping
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems:'center',
                        }}>
                            <Box sx={{
                                //width:'20%'
                            }}>
                                <img alt='cart' src={hashleFree} style={{
                                    width: 'auto',
                                    height: 'auto',
                                }} />
                            </Box>
                            <Typography sx={{
                                color:'whitesmoke',
                                fontSize:'16px',
                                pl:2,
                            }}>
                                Hashle-free Returns
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display:'inline-flex',
                        justifyContent:'center',
                        pt: 12,
                        pb:22,
                    }}>
                        <Box component={Link} to={'https://apps.apple.com/in/app/flipkart-online-shopping-app/id742044692'}>
                                <img alt='cart' src={appStore} style={{
                                    width: '80%',
                                    height: 'auto'
                                }} />
                            </Box>
                            <Box component={Link} to={'https://apps.apple.com/in/app/flipkart-online-shopping-app/id742044692'}>
                                <img alt='cart' src={playStore} style={{
                                    width: '80%',
                                    height: 'auto'
                                }} />
                            </Box>

                    </Box>
                </Box>
            </Container>
        </>
    )
}

