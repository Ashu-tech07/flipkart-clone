import React, { useState } from 'react'
import { Box, useTheme, useMediaQuery, Typography, Menu, MenuItem, Stack } from '@mui/material';
import { navData } from '../../data/data';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const CategoryComp = () => {
    const [anchorEl, setAnchorEl] = useState({})
    // const open = Boolean(anchorEl)

    const [openExpand, setOpenExpand] = useState(false);

    const handleOpen = (event, id) => {
        setAnchorEl(prevState => ({
            ...prevState,
            [id]: event.currentTarget
        }));
        setOpenExpand(true);
    }
    const handleClose = (id) => {
        setAnchorEl(prevState => ({
            ...prevState,
            [id]: null
        }));
        setOpenExpand(false);
    }


    const theme = useTheme();
    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <Box style={styles.boxContainer(matches2)}>
                <div style={styles.divContainer}>
                    <Box sx={{
                        '&::-webkit-scrollbar': {  // For Chrome, Safari and Opera
                            display: 'none'
                        },
                    }} style={styles.categoryBox(matches2)} >
                        {
                            navData.map((data, index) => {
                                const BoxOrLink = data.menuItems ? Box : Link;
                                return (
                                    <>

                                        {/* <Link color='text.primary' underline='none' href='#' > */}
                                        <BoxOrLink key={index} style={styles.navDataBox}
                                            to={data.menuItems ? undefined : `${data.link}`}
                                            onClick={(event) => {
                                                data.menuItems && handleOpen(event, index);
                                                setOpenExpand(true);
                                            }}
                                        // onMouseEnter={(event) => handleOpen(event, index)}
                                        // onMouseLeave={() => handleClose(index)}
                                        >
                                            <Box>
                                                <img src={data.url} alt="categories" width={60} />
                                            </Box>
                                            <Stack direction='row' alignItems='center' >
                                                <Typography color='inherit'
                                                    style={styles.text(matches2)}
                                                    id={`category-typography-${index}`}
                                                >{data.text} </Typography>
                                                {
                                                    data.arrow ? (openExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />) : ''
                                                }

                                            </Stack>

                                        </BoxOrLink>
                                        {data.menuItems && (
                                            <Menu
                                                id={`category-menu-${index}`}
                                                anchorEl={anchorEl[index]}
                                                autoFocus={false}
                                                open={Boolean(anchorEl[index])}
                                                MenuListProps={{
                                                    'aria-labelledby': `category-button-${index}`,
                                                }}
                                                onClose={() => handleClose(index)}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left'
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left'
                                                }}
                                                style={styles.menu(matches2)}
                                                sx={{
                                                    '.MuiPaper-root': {
                                                        borderRadius: 2,
                                                    },
                                                    '.MuiList-root': {
                                                        paddingTop: 0,
                                                        paddingBottom: 0,
                                                    },
                                                }}
                                            >
                                                {
                                                    data.menuItems.map(item => (
                                                        <MenuItem component={Link} to={item.link} style={{
                                                            color: 'inherit',
                                                            textDecoration: 'none',
                                                            padding: '13px 16px',
                                                            fontSize: '0.75rem',
                                                            minWidth: '240px',
                                                            // width: '100%',
                                                        }}
                                                            sx={{
                                                                '&:hover': {
                                                                    backgroundColor: 'rgba(240,245,255,255)',
                                                                    fontWeight: '600',
                                                                },
                                                            }}
                                                        // onClick={() => handleClose(index)}
                                                        >
                                                            {item.title}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Menu>
                                        )}
                                        {/* </Link> */}
                                    </>)
                            })

                        }
                    </Box>
                </div>
            </Box>
        </div>
    )
}
const styles = {
    boxContainer: (matches2) => ({
        margin: matches2 ? '4.5rem 0 0.1rem 0' : '4.5rem 1rem 0.1rem 1rem',
    }),
    divContainer: {
        overflowX: 'auto',
        scrollbarWidth: 'none',  // For Firefox
        msOverflowStyle: 'none',  // For Internet Explorer and Edge
    },
    categoryBox: (matches2) => ({
        display: 'flex',
        margin: matches2 ? '0 0 1rem 0' : '0.652rem 0 1rem 0',
        justifyContent: matches2 ? 'flex-start' : 'space-around',
        backgroundColor: '#FFFFFF',
        padding: matches2 ? '2px' : '0 7.938rem',
        overflowX: matches2 ? 'auto' : 'hidden',
        whiteSpace: 'nowrap',
    }),
    navDataBox: {
        // position: 'relative',
        padding: '12px 8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '0.5rem',
        color: '#000000',
        textDecoration: 'none',
        cursor: 'pointer',
    },
    text: (matches2) => ({
        fontSize: matches2 ? '12px' : '14px',
        fontWeight: matches2 ? 'normal' : '500',
        backgroundColor: 'transparent',
        textTransform: 'capitalize',
        // color: '#111112',
        // fontFamily: 'inter_semi_bold,fallback-inter_semi_bold,Arial,sans-serif',
    }),
    menu: (matches2) => ({
        display: matches2 ? 'none' : 'block',
    }),
}