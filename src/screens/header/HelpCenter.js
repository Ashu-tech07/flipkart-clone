import { Box, Button, Divider, Grid, IconButton, List, ListItem,  ListItemButton,  ListItemText,Typography } from '@mui/material'
import React from 'react'
import { helpImg } from './Assets'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const issues = ['your issues', 'your order', 'other issues']
const helptopics = ['Delivery related', 'Delivery related','Login and my account','Refunds related',
'Flipkart Pay Later', 'Payment','Returns & Pickup related','Cancellation related','Grocery','SuperCoins',
'Flipkart Plus','Flipkart Travel', '2 Wheelers','Others','VIP','Personal Loan','Recharges']

const helpIssues=[['I want to manage my order', 'View, cancel or return an order'],
['I want to help with returns & refunds', 'Manage and track returns'],
['I want to help with other issues', 'Offers,payment,Flipkart PLus & all other issues'],
['I want to contact the seller','']]

const HelpCenterTop = () => {
    return(
        <>
         {/* Top right items started*/}
         <Grid item xs={12} sx={{ 
                    bgcolor: 'background.paper',  
                    mt:2, 
                 }}>              
                        <Typography sx={{
                            color: 'grey',
                            opacity: 0.8,
                            fontSize: '12px',
                            pb:2, pt:2, pl:2
                        }}>
                            Help Centre
                        </Typography>
                        <Divider sx={{
                            opacity: 0.1,
                        }} />

                        <Box sx={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',

                        }}>
                            <Box sx={{
                                width:'25%',
                                height:'30%',
                                alignSelf:'center',
                                pt:6,
                            }}>
                                <img alt='helpImg' src={helpImg}
                                style={{
                                    width:'100%',
                                    height:'100%',
                                }}/>
                            </Box>
                            <Typography sx={{
                                fontSize: '14px',
                                pt:1,pb:1,
                                textAlign:'center',
                            }}>
                            Login to get help with your recent orders and issues
                            </Typography>
                            <Button component={Link} to={'/login'} size='medium' variant='contained'
                                        sx={{
                                            mt: 2, mb:4,
                                            pt: '5px',
                                            pb: '5px',
                                            textTransform: 'none',
                                            bgcolor: '#f4511e',
                                            width:120,
                                            borderRadius:'2px',
                                            boxShadow:'none',
                                            alignSelf:'center',
                                            '&:hover': {
                                                bgcolor: '#f4511e',
                                                boxShadow:'none'
                                            }
                                        }}>
                                        Log in
                                    </Button>
                        </Box>
                        </Grid>
                        {/* Top right items closed */}

                        {/* Right bottom items started  */}
                        <Grid item xs={12} sx={{ 
                    bgcolor: 'background.paper',  
                    mt:2, 
                 }}>              
                       <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                pt: 2,

                            }}>
                                <Typography sx={{
                                    fontSize: '16px',
                                    pb: 3,
                                }}>
                                    What issue are you facing?
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                }}>
                                    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                                    {
                                        helpIssues.map( (item)=>(
                                            <>
                                         <ListItem alignItems="flex-start"
                                            secondaryAction={
                                                <IconButton edge="end" >
                                                 <NavigateNextIcon />
                                               </IconButton>
                                             }>
                                               <ListItemText
                                                   primary={`${item[0]}`}
                                                   secondary={
                                                       <React.Fragment>     
                                                           {`${item[1]}`}
                                                       </React.Fragment>
                                                   }
                                                   />
                                           </ListItem>
                                           <Divider/>
                                         {/* { (indexof(item)===item.length-1)? '':<Divider/>  }  */}
                                                   </>
                                        ))
                                    }
                                    </List>
     
                                       
                                </Box>
                            </Box>
                        </Grid>
                        {/* Right bottom items closed  */}
        </>
        );
}

// const HelpWithOther =() =>{

//     return(
//         <>
//          <Grid item xs={12}  sx={{ 
//                     bgcolor: 'background.paper',  
//                     mt:2, 
//                  }}><Typography sx={{
//                     color: 'grey',
//                     opacity: 0.8,
//                     fontSize: '12px',
//                     pb:2, pt:2, pl:2
//                 }}>
//                     Help Centre '&gt;' Help with you...
//                 </Typography>
//                 <Divider sx={{
//                     opacity: 0.1,
//                 }} />

//                 <Box sx={{
//                 display:'flex' ,
//                 pl:2,   
//                 }}>
//                     <Typography sx={{
//                         fontSize:'14px',
//                     }}>Select an item to change address,delivery date,and more</Typography>
//                      <Button component={Link} to={'/login'} size='small' variant='contained'
//                                         sx={{                                           
//                                             textTransform: 'none',
//                                             bgcolor: '#f4511e',
//                                             ml:1,
//                                             borderRadius:'2px',
//                                             boxShadow:'none',
//                                             alignSelf:'center',
//                                             '&:hover': {
//                                                 bgcolor: '#f4511e',
//                                                 boxShadow:'none'
//                                             }
//                                         }}>
//                                         Login to select an item
//                                     </Button>
//                     </Box>

//                    </Grid>
//         </>
//     )
// }

export const HelpCenter = () => {
    // const [renderState, setRenderState]= useState({
    //     helpCenterTop: true,
    //     helpWithOther: false,
        
    // });
    return (
        <>
            <Box sx={{
                width: '87%',
                textAlign: 'left',
                pl: 12,
                mt: 11,
            }}>
                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: 800,
                    textShadow: '1px 1px 1px black',
                    pb: 2
                }}>
                    Flipkart Help Center | 24x7 Customer Care Support
                </Typography>
                <Typography sx={{
                    fontSize: '12px',
                    color: 'grey',
                    pb: 2,
                }}>
                    The Flipkart Help Centre page lists out various types of issues that you may have encountered so that
                    there can be quick resolution and you can go back to shopping online. For example, you can get more
                    information regarding order tracking, delivery date changes, help with returns (and refunds), and
                    much more. The Flipkart Help Centre also lists out more information that you may need regarding
                    Flipkart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand
                    side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get
                    the Flipkart Help Centre number or even access Flipkart Help Centre support if you need professional
                    help regarding various topics. The support executive will ensure speedy assistance so that your
                    shopping experience is positive and enjoyable. You can even inform your loved ones of the support
                    page so that they can properly get their grievances addressed as well. Once you have all your
                    queries addressed, you can pull out your shopping list and shop for all your essentials in one
                    place. You can shop during festive sales to get your hands on some unbelievable deals online.
                    This information is updated on 03-Jan-24
                </Typography>
            </Box>

            <Grid container  sx={{
                justifyContent: 'center',
                flexDirection: 'row',
                mt: 2,
            }}>
                {/* sidebar lists started  */}
                <Grid item xs={3} sx={{

                    bgcolor: 'background.paper',
                    overflow: 'auto',
                    maxHeight: 500,

                }}>
                    <List
                        sx={{ width: '100%', bgcolor: 'background.paper', }}
                    >
                        <Typography sx={{
                            pl: 2, pb: 1.5,
                            fontSize: '14px',
                        }}>TYPE OF ISSUE</Typography>
                        {
                            issues.map((item) => (
                                <ListItemButton sx={{
                                    '&:hover':{
                                        color:'#0288d1',
                                    }
                                }}>
                                    <ListItemText primary={`Help with ${item}`} sx={{
                                        pl: 2
                                    }} />
                                </ListItemButton>
                            ))
                        }
                        <Divider />
                    </List>
                    <List
                        sx={{ width: '100%', bgcolor: 'background.paper' }}
                    >
                        <Typography sx={{
                            pl: 2, pb: 1.5,
                            fontSize: '14px',
                        }}>HELP TOPICS</Typography>
                        {
                            helptopics.map((item) => (
                                <ListItemButton sx={{
                                    '&:hover':{
                                        color:'#0288d1',
                                    }
                                }} >
                                    <ListItemText primary={`${item}`} sx={{
                                        pl: 2,
                                    }} />
                                </ListItemButton>
                            ))
                        }
                        <Divider />
                    </List>

                </Grid>
                 {/* sidebar lists closed  */}

                 {/* Right Grid items started */}
                <Grid item  xs={7} container spacing={2} ml={3} sx={{
                    flexDirection:'column',
                    flexWrap:'nowrap'
                }}>
                   <HelpCenterTop/>

                  
                </Grid>
               {/* Right Grid items closed */}
            </Grid>
        </>
    )
}

