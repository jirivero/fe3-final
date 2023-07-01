import React, { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material';
import { useGlobalContext } from '../Components/utils/global.context';
// import { FaStar } from "react-icons/fa6"

 //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
 //   // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
const Detail = () => {
  const {state, dispatch} = useGlobalContext();
  const {id} = useParams();
  const navigate = useNavigate();
  const urlDentist = `https://jsonplaceholder.typicode.com/users/` + id
  const findFav = state.favs.find(pj => pj.id === state.dentist.id)


  useEffect(()=> {
    axios(urlDentist)
      .then(res => {
        console.log(res)
        dispatch({type: 'GET_DENTIST', payload: res.data})
      })
    },[urlDentist, dispatch]);

    const addFav = ()=>{
      if(!findFav){
        dispatch({type: 'ADD_FAVS', payload: state.dentist})
      } else {
        const filteredFavs = state.favs.filter(pj => pj.id !== state.dentist.id)
        dispatch({type: 'DELETE_FAV', payload: filteredFavs})
      }
      
    }

  return (
    <>
    <TableContainer component={Paper}
    sx={{display: "flex",
          flexDirection: "column",
      justifyContext: "center",
    alignItems:"center"}}>
      <Typography variant= "h5">Dentist Detail {id} </Typography>
      <Button onClick={addFav} sx={{color: "#FFFF00" }}>
      {findFav ? '🌟' : '⭐'}
      </Button>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {state.dentist?.username}
              </TableCell>
              <TableCell align="right">{state.dentist?.email}</TableCell>
              <TableCell align="right">{state.dentist?.phone}</TableCell>
              <TableCell align="right">{state.dentist?.website}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <Button size="small" onClick={() => navigate(-1)}>Volver</Button>
    </TableContainer>
    </>
  )
}


export default Detail;