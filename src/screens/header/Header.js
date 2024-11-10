import {
    AppBar, Box, Button, FormControl, IconButton, InputAdornment,
    OutlinedInput, Toolbar, alpha, Menu, MenuItem, ListItemIcon,
    Typography, Divider, Avatar, Badge,
} from '@mui/material'
import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fkHeaderLogo from './assets/fkheaderlogo_exploreplus-44005d.svg'
import fkplus from './assets/fkplus.svg'
import giftCard from './assets/giftCard.svg'
import orders from './assets/orders.svg'
import rewards from './assets/rewards.svg'
import wishlist from './assets/wishlist.svg'
import download from './assets/download.svg'
import profile from './assets/profile.svg'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
//import { fkHeaderLogo } from "./Assets"
import { useSelector } from 'react-redux'


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 14,
        top: 2,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function Header() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);
    const wishList = useSelector((state) => state.cart.wishList);

    const [anchorMore, setAnchorMore] = useState(null);
    const [anchorLogin, setAnchorLogin] = useState(null);
    const [openMore, setOpenMore] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openExpand, setOpenExpand] = useState(true);
    // const [loggedIn, setLoggedIn] =useState(false);

    const handleMoreClick = (event) => {
        setAnchorMore(event.currentTarget);
        setOpenMore(true);
    }

    const handleLoginClick = (event) => {
        setAnchorLogin(event.currentTarget);
        setOpenLogin(true);
        setOpenExpand(false);
    }

    const handleMoreClose = () => {
        setAnchorMore(null);
        // setTimeout(()=>{
        //     setOpenMore(false);
        // },300);
        setOpenMore(false);
    }

    const handleLoginClose = () => {
        setAnchorLogin(null);
        setOpenLogin(false);
        setOpenExpand(true);
    }

    return (
        <>

            <AppBar sx={Styles.appBar}>
                <Toolbar>
                    <IconButton>
                        <MenuIcon sx={{ display: { xs: 'flex', sm: 'none' }, }} />
                    </IconButton>
                    <Box component={Link} to='/' sx={{ marginRight: '3rem', ml: 0 }}>
                        {console.log("data", fkHeaderLogo)}
                        <img alt='fk_title' src={fkHeaderLogo} />
                    </Box>

                    <FormControl size='small'
                        sx={{
                            width: '55%', border: '0px solid #e1f5fe',
                            display: { sm: 'flex', xs: 'none' }
                        }}>
                        <OutlinedInput sx={Styles.searchInput}
                            id='search'
                            placeholder='Search for Products, Brands and More'

                            startAdornment={<InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>}
                            inputProps={{
                                'aria-label': 'search',
                            }}
                        />
                    </FormControl>
                    <IconButton>
                        <Avatar src={download} sx={{
                            display: { xs: 'flex', sm: 'none', },
                            color: '#2d2e2d', ml: 10, height: 'auto', width: 'auto'
                        }} />
                    </IconButton>
                    <Button variant='text' sx={Styles.headerBtn}
                        onClick={handleLoginClick}>
                        <AccountCircleOutlinedIcon sx={Styles.loginIcon} />
                        Login
                        {openExpand ? <ExpandMore /> : <ExpandLess />}
                    </Button>

                    {/* Starting Login Menu */}
                    <Menu
                        id='login_menu'
                        anchorEl={anchorLogin}
                        open={openLogin}
                        onClose={handleLoginClose}
                    >

                        <MenuItem sx={Styles.menuText} onClick={handleLoginClose} >
                            <Typography sx={Styles.loginMenuText}>New Customer?</Typography>
                            <Link to='/signup' ><Button variant='text' sx={Styles.signUp}>Sign Up</Button></Link>
                        </MenuItem>
                        <Divider />
                        <MenuItem sx={Styles.menuItemCss} component={Link} to={'/login'} onClick={handleLoginClose}>
                            <ListItemIcon>
                                <Avatar src={profile} sx={Styles.avatar} />
                            </ListItemIcon>
                            <Typography sx={Styles.loginMenuText}>My Profile</Typography>
                        </MenuItem>
                        <MenuItem sx={Styles.menuItemCss} component={Link} to={'/fk_plus'} onClick={handleLoginClose}>
                            <ListItemIcon>
                                <Avatar src={fkplus} sx={Styles.avatar} />
                            </ListItemIcon>
                            <Typography sx={Styles.loginMenuText}>Flipkart Plus Zone</Typography>
                        </MenuItem>
                        <MenuItem sx={Styles.menuItemCss} component={Link} to={'./login'} onClick={handleLoginClose}>
                            <ListItemIcon>
                                <Avatar src={orders} sx={Styles.avatar} />
                            </ListItemIcon>
                            <Typography sx={Styles.loginMenuText}>Orders</Typography>
                        </MenuItem>
                        <MenuItem sx={Styles.menuItemCss} component={Link} to={'./wishlist'} onClick={handleLoginClose}>
                            <ListItemIcon>
                                <Avatar src={wishlist} sx={Styles.avatar} />
                            </ListItemIcon>
                            <Typography sx={Styles.loginMenuText} flexGrow={1}>Wishlist</Typography>
                            <Box bgcolor='#f0f0f0' px={1.4} borderRadius='6px'>
                                <Typography color='#878787' variant='body2'>{wishList.length}</Typography>
                            </Box>
                        </MenuItem>
                        <MenuItem sx={Styles.menuItemCss} component={Link} to={'./login'} onClick={handleLoginClose}>
                            <ListItemIcon>
                                <Avatar src={rewards} sx={Styles.avatar} />
                            </ListItemIcon>
                            <Typography sx={Styles.loginMenuText}>Rewards</Typography>
                        </MenuItem>
                        <MenuItem sx={Styles.menuItemCss} component={Link} to={'./gift_cards'} onClick={handleLoginClose}>
                            <ListItemIcon>
                                <Avatar src={giftCard} sx={Styles.avatar} />
                            </ListItemIcon>
                            <Typography sx={Styles.loginMenuText}>Gift Cards</Typography>
                        </MenuItem>
                    </Menu>
                    {/* Closing Login Menu */}

                    <Box component={Link} to={'/cart'} sx={Styles.headerLink}>
                        <StyledBadge badgeContent={cartItems.length} color='error'>
                            <ShoppingCartOutlinedIcon sx={Styles.btnIcon} />
                        </StyledBadge>
                        <Typography sx={Styles.linkText}> Cart</Typography>
                    </Box>



                    <Box component={Link} to={'https://seller.flipkart.com/sell-online?utm_source=fkwebsite&utm_medium=websitedirect'} sx={Styles.headerSellerLink}>
                        <StorefrontIcon sx={Styles.btnIcon} />
                        <Typography sx={Styles.linkText}> Become a Seller</Typography>
                    </Box>


                    <IconButton sx={{ marginRight: '1rem', display: { xs: 'none', sm: 'flex' } }} onClick={handleMoreClick} >
                        <MoreVertIcon />
                    </IconButton>
                    {/* Starting More Options menu  */}
                    <Menu
                        id='more_menu'
                        anchorEl={anchorMore}
                        open={openMore}
                        onClose={handleMoreClose}
                    >

                        <MenuItem component={Link} to={'/notifications'}
                            sx={Styles.moreMenuText} onClick={handleMoreClose}>
                            <NotificationsOutlinedIcon sx={Styles.moreIcon} /> Notifications Preferences
                        </MenuItem>
                        <MenuItem component={Link} to={'/helpcenter'}
                            sx={Styles.moreMenuText} onClick={handleMoreClose}>
                            <HeadsetMicOutlinedIcon sx={Styles.moreIcon} /> 24x7 Customer Care
                        </MenuItem>
                        <MenuItem component={Link} to={'/advertise'}
                            onClick={handleMoreClose} sx={Styles.moreMenuText}>
                            <TrendingUpIcon sx={Styles.moreIcon} /> Advertise
                        </MenuItem>
                        <MenuItem component={Link} to={'/download_app'}
                            sx={Styles.moreMenuText} onClick={handleMoreClose}>
                            <FileDownloadOutlinedIcon sx={Styles.moreIcon} /> Download App
                        </MenuItem>
                    </Menu>
                    {/* Closing More Options menu  */}
                </Toolbar>

            </AppBar>

            <Divider />
        </>
    )
}

const Styles = {
    // headerBox: {
    //     padding: '10px 10px 10px 10px',   backgroundColor: 'white',

    // },
    appBar: {
        position: 'fixed',
        boxShadow: 'none',
        padding: '5px 10px 5px 10px',
        backgroundColor: 'white',
        minHeight: '10vh',
    },
    headerBtn: {
        textTransform: 'unset',
        color: '#212121', fontSize: '16px',
        padding: '5px 25px 5px 25px',
        marginLeft: '1rem',
        marginRight: '1rem',

        '&:hover': {
            backgroundColor: '#0288d1',
            color: 'whitesmoke',
        },
        borderRadius: '10px'
    },
    headerLink: {
        textTransform: 'unset',
        display: 'flex',
        color: '#212121', fontSize: '18px',
        marginLeft: '1rem',
        textWrap: 'nowrap',
        textDecoration: 'none',
    },
    headerSellerLink: {
        textTransform: 'unset',
        display: { xs: 'none', sm: 'flex' },
        color: '#212121', fontSize: '18px',
        marginLeft: '1rem',
        textWrap: 'nowrap',
        textDecoration: 'none',
    },
    linkText: {
        marginRight: '1.5rem',
        display: { xs: 'none', md: 'none', lg: 'flex' },
    },
    searchInput: {
        backgroundColor: alpha('#e1f5fe', 0.45),
        borderRadius: '10px',
        borderColor: '#e1f5fe',
    },
    'input': {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: 'grey',
            fontSize: '18px',
        }
    },
    btnIcon: {
        color: '#2d2e2d',
        marginRight: '8px',
    },
    loginIcon: {
        margin: '5px 10px 5px 2px',
        width: 'auto'
    },
    menuText: {
        padding: '0px 2px 0px 16px',
        '&: hover': {
            backgroundColor: '#fafafa',
        }
    },
    menuItemCss: {
        '&: hover': {
            backgroundColor: '#fafafa',
        }
    },
    loginMenuText: {
        fontSize: '15px',
    },
    moreMenuText: {
        fontSize: '15px',
        pt: 0, pb: 0,
    },
    signUp: {
        textTransform: 'capitalize',
        fontSize: '15px',
        fontWeight: 600,
        margin: '0px 5px 0px 25px'
    },

    avatar: {
        color: 'grey',
        margin: '5px 10px 5px 2px',
        height: '17px',
        width: '17px'
    },
    moreIcon: {
        color: 'grey',
        margin: '10px 10px 10px 2px',
        width: 'auto'
    },

}
