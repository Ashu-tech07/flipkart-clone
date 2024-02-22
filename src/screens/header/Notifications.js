import { Box, Grid, Paper, Typography, Button, Checkbox, List, ListItem, Divider, ListItemText, ListItemIcon, } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { notif1, notif2, notif3, notif4, notif5, notif6, notif7, lock } from './Assets'



export const Notifications = () => {
    return (
        <>
            <Grid container spacing={2} sx={{
                justifyContent: 'center',
                flexDirection: 'row',
                mt: 12,
            }}>
                <Grid item xs={3} >
                    <Paper elevation={0} sx={Styles.leftPaper}>
                        <Box sx={Styles.noti_Box}>
                            <NotificationsIcon color='primary' />
                            <Typography sx={{
                                color: 'grey',
                                fontSize: '14px',
                                fontWeight: 600,
                                ml: 1.5, pr: 6,
                                pb: 3,
                            }}>
                                NOTIFICATION PREFERENCES
                            </Typography>

                        </Box>
                        <Button variant='text' sx={{
                            textTransform: 'capitalize',
                            pb: 2, mb: 2,
                            color: 'black',
                        }}>
                            Desktop Notifications
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={8} container>
                    <Grid item xs={6}>
                        <Paper elevation={0} sx={{
                            borderRadius: '0px',
                            
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            minHeight:'120vh',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                pt: 2,
                                pl: 3,

                            }}>
                                <Typography sx={{
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    pr: 6,
                                    pb: 3,
                                }}>
                                    Desktop Notifications
                                </Typography>
                                <Box sx={{
                                    display: 'flex', opacity:0.5
                                }}>
                                    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemIcon>
                                               <Checkbox defaultChecked sx={{ 
                                                ':disabled':{
                                                    backgroundColor:'blue',
                                                }
                                               }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="My Orders"
                                                secondary={
                                                    <React.Fragment>     
                                                        {'Latest updates on your orders'}
                                                    </React.Fragment>
                                                }
                                            />
                                            <ListItemIcon>
                                               <ExpandMoreIcon style={{paddingLeft:'55px'}}/>
                                            </ListItemIcon>
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            <ListItemIcon>
                                               <Checkbox defaultChecked />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Reminders"
                                                secondary={
                                                    <React.Fragment>     
                                                        {'Price Drops, Back-in-stock Products, etc.'}
                                                    </React.Fragment>
                                                }
                                            />
                                            <ListItemIcon>
                                               <ExpandMoreIcon style={{paddingLeft:'55px'}}/>
                                            </ListItemIcon>
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            <ListItemIcon>
                                               <Checkbox defaultChecked />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Recommendations By Flipkarts"
                                                secondary={
                                                    <React.Fragment>     
                                                        {'Products, offers and curated content based on your interest'}
                                                    </React.Fragment>
                                                }
                                            />
                                            <ListItemIcon>
                                               <ExpandMoreIcon style={{paddingLeft:'55px'}}/>
                                            </ListItemIcon>
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            <ListItemIcon>
                                               <Checkbox defaultChecked />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="New Offers"
                                                secondary={
                                                    <React.Fragment>     
                                                        {'Top Deals and more'}
                                                    </React.Fragment>
                                                }
                                            />
                                            <ListItemIcon>
                                               <ExpandMoreIcon style={{paddingLeft:'55px'}}/>
                                            </ListItemIcon>
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            <ListItemIcon>
                                               <Checkbox defaultChecked />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="My Flipkart community"
                                                secondary={
                                                    <React.Fragment>     
                                                        {'Profile updates, Newsletters, etc.'}
                                                    </React.Fragment>
                                                }
                                            />
                                            <ListItemIcon>
                                               <ExpandMoreIcon style={{paddingLeft:'55px'}}/>
                                            </ListItemIcon>
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            <ListItemIcon>
                                               <Checkbox defaultChecked />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Feedback and Review"
                                                secondary={
                                                    <React.Fragment>     
                                                        {'Rating and Reviews for your purchase'}
                                                    </React.Fragment>
                                                }
                                            />
                                            <ListItemIcon>
                                               <ExpandMoreIcon style={{paddingLeft:'55px'}}/>
                                            </ListItemIcon>
                                        </ListItem>
                                        
                                        </List>

                                        
                                       
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={0} sx={{
                            borderRadius: '0px',
                            
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight:'120vh'
                        }}>
                        <Box sx={{
                            dislpay:'flex',
                            flexDirection:'row',
                            pt:10,
                           textAlign:'center',
                        }}>
                            <img alt='notifications' src={notif1} style={{
                                width:'auto',
                                height:'auto',
                            }}/>
                             <img alt='notifications' src={notif2} style={{
                                width:'auto',
                                height:'auto',
                            }}/>
                             <img alt='notifications' src={notif3} style={{
                                width:'auto',
                                height:'auto',
                            }}/>
                        </Box>
                        <Box sx={{
                            dislpay:'flex',
                            flexDirection:'row',
                            width:'100%',
                           textAlign:'center',
                           
                        }}>
                            <img alt='notifications' src={notif4} style={{
                                width:'auto',
                                height:'auto',
                              
                            }}/>
                            
                        </Box>
                        <Box sx={{
                            dislpay:'flex',
                            flexDirection:'row',
                           textAlign:'center',
                             pb:4
                        }}>
                            <img alt='notifications' src={notif5} style={{
                                width:'auto',
                                height:'auto',
                            }}/>
                             <img alt='notifications' src={notif6} style={{
                                width:'auto',
                                height:'auto',
                            }}/>
                             <img alt='notifications' src={notif7} style={{
                                width:'auto',
                                height:'auto',
                            }}/>
                        </Box>
                        <Typography sx={{
                            color:'red',
                            fontSize:'12px',
                              width:'80%',
                            textAlign:'center',
                             pl:4,
                            pb:3,
                        }}>Oops! You are missing out on a lot of important notifications.
                             Please switch it on from Browser Settings.</Typography>
                             <Typography sx={{
                                color:'grey',
                                fontSize:'13px',
                                fontWeight: 600,
                                textAlign:'center',
                                pb:1,
                             }}> How to unlock</Typography>
                             <Box sx={{
                                display:'inline-flex',
                               
                                justifyContent:'center',
                             }}>
                                <img alt='lock' src={lock} style={{
                                    width:'15px',
                                    height:'15px',
                                    
                                }} />
                                <Typography sx={{
                                    fontSize:'12px',
                                    pl:1
                                }}>
                                     &gt; Notificatons &gt; Allow
                                </Typography>

                             </Box>
                        </Paper>
                    </Grid>
                </Grid>

            </Grid>

        </>
    )
}

const Styles={
    leftPaper:{
            borderRadius: '0px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        
    },
    noti_Box:{
        display: 'inline-flex',
        pt: 2,
        pl: 3,
    },
}