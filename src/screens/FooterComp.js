import React from 'react'
import { Box, Divider, Grid, Link, Typography, useTheme, useMediaQuery } from '@mui/material'

export const FooterComp = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const matches1 = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <Box component='footer' style={styles.footer(matches1)}>
                <Grid container columnSpacing={1} rowGap={2} pt='2.3rem' px='1.5rem'>
                    <Grid item md={4} lg={2}>
                        <Typography style={styles.footerHeadings}>ABOUT</Typography>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Contact Us</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>About Us</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Careers</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Flipkart Stories</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Press</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Flipkart Wholesale</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Cleartrip</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Corporate Information</Link>
                    </Grid>
                    <Grid item md={4} lg={2}>
                        <Typography style={styles.footerHeadings}>HELP</Typography>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Payments</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Shipping</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Cancellation & Returns</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>FAQ</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Report Infringement</Link>
                    </Grid>
                    <Grid item md={4} lg={2}>
                        <Typography style={styles.footerHeadings}>CONSUMER POLICY</Typography>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Cancellation & Returns</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Terms Of Use</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Security</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Privacy</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Sitemap</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Grievance Redressal</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>EPR Compliance</Link>
                    </Grid>
                    <Grid item md={4} lg={1}>
                        <Typography style={styles.footerHeadings}>SOCIAL</Typography>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Facebook</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>Twitter</Link>
                        <Link underline='hover' href='#' color='inherit' style={styles.link}>YouTube</Link>
                    </Grid>
                    <Grid item md={4} lg={3} style={styles.gridItem(matches)}>
                        <Typography style={styles.footerHeadings}>Mail Us:</Typography>
                        <Typography style={styles.footerText}>Flipkart Internet Private Limited,</Typography>
                        <Typography style={styles.footerText}>Buildings Alyssa, Begonia & </Typography>
                        <Typography style={styles.footerText}>Clove Embassy Tech Village, </Typography>
                        <Typography style={styles.footerText}>Outer Ring Road, Devarabeesanahalli Village, </Typography>
                        <Typography style={styles.footerText}>Bengaluru, 560103, </Typography>
                        <Typography style={styles.footerText}>Karnataka, India</Typography>
                    </Grid>
                    <Grid item md={4} lg={2}>
                        <Typography style={styles.footerHeadings}>Registered Office Address:</Typography>
                        <Typography style={styles.footerText}>Flipkart Internet Private Limited, </Typography>
                        <Typography style={styles.footerText}>Buildings Alyssa, Begonia & </Typography>
                        <Typography style={styles.footerText}>Clove Embassy Tech Village, </Typography>
                        <Typography style={styles.footerText}>Outer Ring Road, Devarabeesanahalli Village, </Typography>
                        <Typography style={styles.footerText}>Bengaluru, 560103, </Typography>
                        <Typography style={styles.footerText}>Karnataka, India </Typography>
                        <Typography style={styles.footerText}>CIN : U51109KA2012PTC066107 </Typography>
                        <Typography style={styles.footerText}>Telephone: <Link href='#' underline='hover'>044-45614700</Link> </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Box style={styles.flexBox1}>
                    <Box component='span' style={styles.flexBox2} >
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="#" width={13} height={12} />
                        <Link href='#' style={styles.link1}>Become a Seller</Link>
                    </Box>
                    <Box component='span' style={styles.flexBox2} >
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg" alt="#" width={13} height={12} />
                        <Link href='#' style={styles.link1}>Advertise</Link>
                    </Box>
                    <Box component='span' style={styles.flexBox2} >
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg" alt="#" width={13} height={12} />
                        <Link href='#' style={styles.link1}>Gift Cards</Link>
                    </Box>
                    <Box component='span' style={styles.flexBox2} >
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg" alt="#" width={13} height={12} />
                        <Link href='#' style={styles.link1}>Help Center</Link>
                    </Box>
                    <Box component='span' style={styles.flexBox2} >
                        <Typography style={styles.link1}>© 2007-2023 Flipkart.com</Typography>
                    </Box>
                    <Box component='span' style={styles.flexBox2} >
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="#" />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
const styles = {
    footer: (matches1) => ({
        backgroundColor: 'rgba(33,33,33,255)',
        color: 'white',
        position: 'static',
        marginTop: '2rem',
        display: matches1 ? 'none' : 'flex',
        flexDirection: 'column',
        rowGap: '1rem',
    }),
    link: {
        fontSize: '12px',
        fontWeight: 'bold',
        fontFamily: 'inter_semi_bold,fallback-inter_semi_bold,Arial,sans-serif',
        display: 'block',
        lineHeight: '18px',
    },
    footerHeadings: {
        color: '#878787',
        fontSize: '12px',
        marginBottom: '12px',
    },
    footerText: {
        fontSize: '12px',
        fontFamily: 'inter_semi_bold,fallback-inter_semi_bold,Arial,sans-serif',
        lineHeight: '18px',
    },
    gridItem: (matches) => ({
        borderLeft: matches ? '1px solid #454d5e' : 'none',
        paddingLeft: matches ? '32px' : 7,
    }),
    link1: {
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: '12px',
    },
    flexBox1: {
        borderTop: '1px solid #454d5e',
        paddingTop: '1.3rem',
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '1.6rem',
    },
    flexBox2: {
        display: 'flex',
        columnGap: '0.5rem',
        alignItems: 'center',
    },
}
