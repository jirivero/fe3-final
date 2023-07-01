
import React, { useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Container, Button, Typography, Input, Box, Alert } from '@mui/material/'

const inputs = [
    { id: 1, type: "text", placeholder: "Ingrese su Nombre", name: "name" },
    { id: 2, type: "text", placeholder: "Ingrese su Email", name: "email" }
]

const Form = () => {
    const getInitialValues = () => ({
        name: "",
        email: ""
    })

const [ view, setView ] = useState("form")

const getValidationSchema = () => (
    Yup.lazy(() =>
    Yup.object().shape({
        name: Yup.string()
        .min(5, 'Tu nombre debe tener 5 caracteres como mínimo.')
        .required("Campo Obligatorio"),
        email: Yup.string()
        .email("Debes ingresar un email válido.")
        .required('Campo Obligatorio')
    })))

    const onSubmit = (values) => {
      console.log(values)
      setView("message");}

    const { values, setFieldValue, errors, handleSubmit } = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit
      })
      
      return (
        <Container align= "center">
        { 
            view === "form" ? (

                <Container>
                <Box 
                    component="form"
                    sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "40vw" }}
                    onSubmit={handleSubmit}
                >
                    
                    {
                        inputs.map(input => (
                            <Container key={input.id}>
                                <Input 
                                    name = {input.name}
                                    placeholder = {input.placeholder}
                                    type = {input.type}
                                    value = {values[input.name]}
                                    onChange = {(e) => setFieldValue(input.name, e.target.value)}
                                />
    
                            { 
                                errors[input.name] && (
                                    <Alert severity="error" style={{ width: "400px", margin: "8px", padding:"4px"}}>{errors[input.name]}</Alert>
                                )
                            }
                            </Container>
            )
        )}
    
    
                <Container content="row">
                    <Button type='submit' size="small" variant="contained">Enviar</Button>
                </Container>

                </Box>
            </Container>    


            ) : (

                <Container maxWidth="sm" >
                <Alert severity="success" sx={{display: 'flex', justifyContent: 'center'}} >Tus datos fueron enviados con éxito!</Alert>
                <Typography mt= "28px"> 
                <b>Gracias {values.name}, te contactaremos cuanto antes vía email!</b>
                </Typography>
                </Container>
            )}
        </Container>
)};
            

export default Form