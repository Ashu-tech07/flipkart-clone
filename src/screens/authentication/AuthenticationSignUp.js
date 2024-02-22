import { Button, Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AuthenticationSignUp() {

  const navigate = useNavigate()

  const changeRoute = () => {
    navigate('./sign-in');
  }
  return (
    <div>
      <h1 style={signUpStyle.head}> hii AuthenticationSignUp</h1>
      <Box style={signUpStyle.btn}>
        <Button onClick={changeRoute} variant="contained">navigation</Button>
      </Box>
    </div>
  )
}

export default AuthenticationSignUp

const signUpStyle = {
  head: {
    textAlign: 'center',
    color: 'red'
  },
  btn: {
    textAlign: "center"
  }
}
