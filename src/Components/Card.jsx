import React from "react";
import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea'
import { useGlobalContext } from "./utils/global.context";
import { Button } from "@mui/material";

const DentistCard = ({ name, username, id }) => {
  const {state} = useGlobalContext()
  


  return (
    <Card className={state.theme} 
    sx={{
      display: "flex",
      justifyContent: "spaceAround",
      flexDirection: "column",
      alignItems: "center",
      width: "200px",
      padding: "0.5rem 0.5rem 0 0.5rem",
      border: "0.5 solid rgb(136, 136, 136)",
      transition: "0.2s",
      "&:hover": {
        transform: "scale(1.05)"
      }
      }}>
      <CardActionArea>
      <CardMedia
      component="img"
      image="./images/doctor.jpg" 
      title="DH-logo"
      />
      <CardContent sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <Typography gutterBottom variant="subtitle2" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {username}
        </Typography>
      <Link to={`/dentist/${id}`} >
      <Button>
      VER MÁS
      </Button>
        </Link>
      </CardContent>
      </CardActionArea>
    </Card>

  );
};

export default DentistCard;
