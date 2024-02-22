import { Alert, Box, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material'
import loginImage from './assets/login_img.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [loginData, setLoginData] = useState({
        phone: {
            value: '',
            isValid: true,
        },
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginData.phone && !isValidPhoneNumber(loginData.phone)) {
            setLoginData({
                phone: { value: '', isValid: false },
            });
        }
        if(loginData.phone.value.length===10 && loginData.phone.isValid=== true){
            setOpenSnackbar(true);
        }
        
    }
    const handleClose = () => {
        setOpenSnackbar(false);
    }
    const isValidPhoneNumber = (phoneNumber) => {
        const phonePattern = /^[6-9][0-9]{9}$/
        return phoneNumber.value ? phonePattern.test(phoneNumber.value) : false;
    }

    const handleChange = (e) => {
        if (e.target.name === 'phone') {
            const re = /^[0-9]*$/
            if (re.test(e.target.value) && e.target.value.length <= 10) {
                setLoginData({
                    [e.target.name]: { value: e.target.value, isValid: true }
                })
            }
        }
    }
  return (
    <>
      <Container maxWidth='md'>
                <Box sx={Styles.mainContainer}>
                    <Grid container>
                        <Grid item xs={5} sx={Styles.leftContainer}>
                            <Box sx={Styles.textBox}>
                                <Typography sx={Styles.headingText}> Look's like you're new here!</Typography>
                                <Typography sx={Styles.subtitle}>Sign up with your mobile number to get started</Typography>
                            </Box>
                            <Box sx={Styles.imageBox} >
                                <img alt='login_image' src={loginImage} style={{width:'auto', height:'auto', position:'relative'}}/>
                            </Box>

                        </Grid>
                        <Grid item xs={7} sx={Styles.rightContainer}>
                            <Box sx={Styles.rightBox}>
                                <form onSubmit={handleSubmit}>

                                <TextField
                                    name='phone'
                                    label='Enter Mobile number'
                                    value={loginData.phone.value}
                                    variant="standard"
                                    error={!loginData.phone.isValid}
                                    helperText={loginData.phone.isValid ? '' : 'Enter a valid phone number'}
                                    onChange={(e) => { handleChange(e) }}
                                    fullWidth
                                    />
                                <Typography sx={Styles.termsText}>By continuing, you agree to Flipkart's <Link to={'/terms'} style={Styles.policyText}>Terms & Conditions </Link>
                                    and <Link to='/privacypolicy' style={Styles.policyText}>Privacy Policy</Link></Typography>

                                <Button type='submit' size='large' variant='contained' fullWidth
                                    sx={Styles.btn}>
                                    CONTINUE
                                    </Button>
                                    </form>
                                    <Link to='/login'><Button size='large' variant='contained' fullWidth
                                    sx={Styles.loginBtn}>
                                    Existing User? Log in
                                    </Button></Link>
                                    
                            </Box>

                            <Snackbar
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                open={openSnackbar}
                                autoHideDuration={3000}
                                onClose={handleClose}
                            >
                                <Alert sx={{
                                    backgroundColor:'#424242',
                                    color: 'white',
                                    fontSize:'17px',
                                    pt:1,pb:1,pr:2,pl:1
                                }}>Verification code sent to {loginData.phone.value}</Alert>
                            </Snackbar>

                        </Grid>
                    </Grid>


                </Box>
            </Container>
    </>
  )
}

const Styles={
    mainContainer:{
        boxShadow: 2,
        mt: 12,
        mb: 3,
    },
    leftContainer:{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
        backgroundColor: '#0288d1',
    },
   headingText: {
    color: 'white',
    fontSize: '27px',
    fontWeight: 600,
    mb: 2.5
},
    subtitle:{
        color: '#e0e0e0',
        fontSize: '18px',
        fontWeight: 500
    },
    imageBox:{
        m: '5rem 0rem 0rem 3.5rem',
    },
    textBox:{
        m: '3.5rem 0.8rem 0rem 2.5rem',
    },
    rightContainer:{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
        backgroundColor:'white'
    },
    rightBox:{
        m: '3.5rem 0rem 0rem 2.5rem',
        width: '85%'
    },
    termsText:{
        color: '#757575', fontSize: '12px',
        mt: 4
    },
    policyText:{
        textDecoration: 'none',
        fontWeight: 500,
        color: '#057bfa',
    },
    btn:{
        mt: 2,
        pt: '10px',
        pb: '10px',
        textTransform: 'none',
        bgcolor: '#f4511e',
        '&:hover':{
            bgcolor:'#f4511e'
        }
    },
    loginBtn:{
        mt: 2,
        pt: '10px',
        pb: '10px',
        color:'#057bfa',
        textTransform:'none',
        fontWeight:600,
        bgcolor: 'white',
        '&:hover':{
            bgcolor:'white'
        }
    },
}