import { Alert, Box, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import loginImage from './assets/login_img.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom'
import { MuiOtpInput } from 'mui-one-time-password-input'


// RequestOtp component started
const RequestOtp = (loginData, handleChangeCallBack, handlePhoneSubmit) => {
    return (
        <>
            <Box sx={Styles.rightBox}>
                <form onSubmit={handlePhoneSubmit}>

                    <TextField
                        name='phone'
                        value={loginData.phone.value}
                        label='Enter Email/Mobile number'
                        variant="standard"
                        error={!loginData.phone.isValid}
                        helperText={loginData.phone.isValid ? '' : 'Enter a valid phone number'}
                        onChange={(e) => { handleChangeCallBack(e) }}
                        fullWidth
                    />
                    <Typography sx={Styles.termsText}>By continuing, you agree to Flipkart's <Link to='/terms' style={Styles.policyText}>Terms & Conditions </Link>
                        and <Link to='/privacypolicy' style={Styles.policyText}>Privacy Policy</Link></Typography>

                    <Button type='submit' size='large' variant='contained' fullWidth
                        sx={Styles.btn}>
                        Request OTP
                    </Button>

                </form>
                <Link to='/signup' style={{ textDecoration: 'none', }}><Typography
                    sx={Styles.createAccountText}>New to Flipkart? Create an Account</Typography></Link>
            </Box>
        </>
    )
}
//  RequestOtp component closed

//EnterOtp component started
const EnterOtp = (loginData, otp, handleOtpCallBack, handleOtpSubmit, changeToPhone) => {
    return (
        <Box sx={Styles.rightBox}>
            <form onSubmit={handleOtpSubmit}>
                <Typography sx={{
                    textAlign: 'center',
                }}>
                    Please enter the OTP sent to {loginData.phone.value} . <Link to='/login' style={Styles.policyText} onClick={changeToPhone}> Change</Link>
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <MuiOtpInput length={6} value={otp} onChange={handleOtpCallBack} sx={{
                        mt: 4, width: '85%', mb: 2,
                    }} />
                </Box>

                <Button type='submit' size='large' variant='contained' fullWidth
                    sx={Styles.OtpBtn}>
                    Verify
                </Button>
                <Typography sx={{
                    color: '#757575', fontSize: '14px',
                    mt: 4, textAlign: 'center'
                }}>Not received your code? <Link to='/login' style={Styles.policyText}>Resend code </Link>
                </Typography>

            </form>

        </Box>
    )
}
//EnterOtp component closed


export default function Login() {

    const [loginData, setLoginData] = useState({
        phone: {
            value: '',
            isValid: true,
        },
    });

    const [openLoginSnackbar, setOpenLoginSnackbar] = useState(false);
    const [openOtpSnackbar, setOpenOtpSnackbar] = useState(false);
    const [openOtpPage, setOpenOtpPage] = useState(false);
    const [otp, setOtp] = useState('');
    const [loginMessage, setLoginMessage] = useState(false);

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if (loginData.phone && !isValidPhoneNumber(loginData.phone)) {
            setLoginData({
                phone: { value: '', isValid: false },
            });
        }
        if (loginData.phone.value.length === 10 && loginData.phone.isValid === true) {
            setOpenLoginSnackbar(true);
            setOpenOtpPage(true);
            
        }

    }

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        setOpenOtpSnackbar(true);
        if (loginData.phone.value === '7777777777' && otp === '123456') {
            setOpenOtpSnackbar(true);
            setLoginMessage(true);

        }
    }

    const handleClose = () => {
        setOpenLoginSnackbar(false);
    }
    const changeToPhone = () => {
        setOpenOtpPage(false);
    }
    const otpSnackbarClose = () => {
        setOpenOtpSnackbar(false);
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

    const handleOtp = (newValue) => {
        setOtp(newValue);
    }
    return (
        <>
            <Container maxWidth='md'>
                <Box sx={Styles.mainContainer}>
                    <Grid container>
                        <Grid item md={5} sx={Styles.leftContainer}>
                            <Box sx={Styles.textBox}>
                                <Typography sx={Styles.headingText}> Login</Typography>
                                <Typography sx={Styles.subtitle}>Get access to your Orders, Wishlist and Recommendations</Typography>
                            </Box>
                            <Box sx={Styles.imageBox} >
                                <img alt='login_image' src={loginImage} />
                            </Box>

                        </Grid>
                        <Grid item md={7} sx={Styles.rightContainer}>
                            {
                                openOtpPage ? EnterOtp(loginData, otp, handleOtp, handleOtpSubmit, changeToPhone) : RequestOtp(loginData, handleChange, handlePhoneSubmit)
                            }
                        </Grid>
                    </Grid>


                </Box>
            </Container>
            {/* login snackbar started  */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openLoginSnackbar}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert icon={<CheckCircleIcon fontSize='medium' sx={{
                    color: '#00e676',
                }} />}
                    sx={{
                        backgroundColor: '#424242',
                        color: 'white',
                        fontSize: '17px',
                        pt: 1, pb: 1, pr: 2, pl: 2
                    }}>Verification code sent to {loginData.phone.value}</Alert>
            </Snackbar>
            {/* login snackbar closed  */}

            {/* otp snackbar started  */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openOtpSnackbar}
                autoHideDuration={3000}
                onClose={otpSnackbarClose}
            >
                <Alert icon={!loginMessage ? <CancelIcon sx={{
                    color: '#f44336',
                }} /> : <CheckCircleIcon fontSize='medium' sx={{
                    color: '#00e676',
                }} />}
                    sx={{
                        backgroundColor: '#424242',
                        color: 'white',
                        fontSize: '17px',
                        pt: 1, pb: 1, pr: 2, pl: 2
                    }}> {!loginMessage ? 'Sorry!! Wrong OTP. Try again..' : 'You have logged in successfully !!'} </Alert>
            </Snackbar>
            {/* otp snackbar closed  */}
        </>
    )
}

const Styles = {
    mainContainer: {
        boxShadow: 2,
        mt: 12,
        mb: 3,
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
        backgroundColor: '#0288d1',
    },
    headingText: {
        color: 'white',
        fontSize: '28px',
        fontWeight: 600,
        mb: 2.5
    },
    subtitle: {
        color: '#e0e0e0',
        fontSize: '18px',
        fontWeight: 500
    },
    imageBox: {
        m: '5rem 0rem 0rem 3.5rem',
    },
    textBox: {
        m: '3.5rem 0rem 0rem 2.5rem',
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
        backgroundColor: 'white',
    },
    rightBox: {
        m: '3.5rem 0rem 0rem 2.5rem',
        width: '85%'
    },
    termsText: {
        color: '#757575', fontSize: '12px',
        mt: 4
    },
    policyText: {
        textDecoration: 'none',
        fontWeight: 500,
        color: '#057bfa',
    },
    btn: {
        mt: 2,
        pt: '10px',
        pb: '10px',
        textTransform: 'none',
        bgcolor: '#f4511e',
        '&:hover': {
            bgcolor: '#f4511e'
        }
    },
    OtpBtn: {
        mt: 2,
        pt: '10px',
        pb: '10px',
        textTransform: 'none',

    },
    createAccountText: {
        fontSize: '14px',
        color: '#057bfa',
        fontWeight: 640,
        mt: 25,
        textAlign: 'center',
    },
}