import React from 'react'
import Form from '../Components/Form'
import { Box } from '@mui/material/'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'spaceAround'}}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </Box>
  )
}

export default Contact