import React from 'react'
import { Box, Button, Tooltip } from '@mui/material';
import { FaMoon, FaSun } from "react-icons/fa6"
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from './utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
const navigate = useNavigate();
const {state, dispatch} = useGlobalContext();

const handleTheme = () => {
    if (state.theme === "dark") {
        dispatch({ type: "LIGHT" })
    }
    else{
        dispatch({ type: "DARK" })
    }
}
  return (
    <Box component="header" className={state.theme} style={{ display: "flex", justifyContent: "end", padding: "15px", marginBottom: "30px"}}>
    <Stack direction="row" spacing={2}>
        <Button onClick={() => navigate("/")} style={{ cursor: "pointer"}}>Home</Button>       
        <Button onClick={() => navigate("/favs")} style={{ cursor: "pointer" }}>Favoritos</Button>
        <Button onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>Contact</Button>
    </Stack>
    <Box>
        {
        state.theme === "dark" ? (
            <Tooltip title="Light mode">
            <Button onClick={handleTheme} sx={{color:"#FFFF00"}}>
            <FaSun/>
            </Button>
            </Tooltip>
        ) : (
            <Tooltip title="Dark mode">
            <Button onClick={handleTheme} sx={{color:"#000000"}}>
                <FaMoon/>
            </Button>
            </Tooltip>
        )
        }
        
    </Box>
</Box>    
    // <nav>
    //   {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
    //   {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    //   <button>Change theme</button>
    // </nav>
  )
}

export default Navbar