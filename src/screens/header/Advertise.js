import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import fkAds from './assets/fk_ads.svg'
import fkAdsLogo from './assets/fk_ads_logo.svg'


export const Advertise = () => {
    const [loginData, setLoginData] = useState({
        email: {
            value: '',
            isValid: true,
        },
        password:{
            value:'',
            isValid:true,
        }
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginData.email && !isValidEmail(loginData.email)) {
            setLoginData({...loginData,
                email: { value: '', isValid: false },
            });
        }
        if(loginData.password.value.length<=6){
            setLoginData({ ...loginData,
                password:{value:'', isValid:false },
            })
        }    
    }

    const handleChange =(e)=>{
        setLoginData({
            ...loginData, [e.target.name]:{ value: e.target.value, isValid: true}
        })
    }

    const isValidEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return (email.value) ? re.test(email) :false ;
      }

    return (
        <>
            <Grid container sx={{mt:12}}>
                <Grid item xs={7} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        width: '85%',
                        height: '85vh',
                        pt: 3
                    }} >
                        <img alt='fk_ads' src={fkAds} style={{
                            width: '100%',
                            height: 'auto'
                        }} />
                    </Box>
                </Grid>
                <Grid item xs={5} sx={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    pl: 10,

                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '80%',
                        pt: 10,
                    }}>
                        <form onSubmit={handleSubmit}>
                        <Box sx={{
                            width: '35%',
                            pb: 1,
                        }}>
                            <img alt='fk_ads_logo' src={fkAdsLogo} style={{
                                width: '80%',
                                height: 'auto',
                            }} />
                        </Box>
                        <Typography sx={{
                            fontSize: '25px',
                            pb: 1,
                        }}>
                            Login to your account
                        </Typography>

                        <Typography sx={{
                            color: 'grey',
                            fontSize: '16px',
                            pb: 2
                        }}>
                            Please enter in your credentials to Login
                        </Typography>

                        <Typography sx={{
                            fontSize: '13px',
                            color: 'grey',
                            pb: 0.7
                        }}>Email address</Typography>
                        <TextField variant='outlined' size='small' fullWidth
                            
                            name='email'
                            label=''
                            placeholder='Enter email'
                            error={!loginData.email.isValid}
                            helperText={loginData.email.isValid ? '': 'Enter a valid email address'}
                            InputLabelProps={{ shrink: true }}
                            sx={{ pb: 2 }} 
                            onChange={(e) => { handleChange(e) }} />

                        <Typography sx={{
                            fontSize: '13px',
                            color: 'grey',
                            pb: 0.7
                        }}>Password</Typography>
                        <TextField variant='outlined' size='small' fullWidth
                            type='password'
                            name='password'
                            label=''
                            placeholder='Enter password'
                            error={!loginData.password.isValid}
                            helperText={loginData.password.isValid ? '': 'Enter a valid password'}
                            InputLabelProps={{ shrink: true }}
                            sx={{ pb: 2 }} 
                            onChange={(e) => { handleChange(e) }}/>

                        <Box sx={{
                            display:'flex',
                            justifyContent:'right'
                        }}><a href='https://advertising.flipkart.com/forgot-password' style={{
                            
                            color: 'blue',
                            paddingBottom: 1,
                        }}>Forgot Password?</a></Box>

                        <Button type='submit' size='small' variant='contained' fullWidth
                            sx={{
                                mt: 2, pt:'6px',pb:'6px',
                                textTransform: 'none',
                            }}>
                            Login
                        </Button>
                        </form>
                    </Box>

                </Grid>

            </Grid>

        </>
    )
}
