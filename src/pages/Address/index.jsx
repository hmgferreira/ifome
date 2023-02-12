import { Link } from "react-router-dom";
import {Button, Box,ListItem, List, ListItemText, IconButton } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useContext, useEffect, useState } from "react";
import './index.css'
import api from '../../config/api';
import DadosContext from "../../contexts/DadosContext";
function Address() {

    const { endreco, setEndereco } = useContext(DadosContext)
    const[adress, setAdress] = useState([]);
    const[selectAdress, setSelectAdress] = useState([]);
    const style = {
        div:{
            display: 'flex',
            flexDirection:'column',
            alignItens: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        },
        botao:{
            margin: '30px auto 0 auto',
            fontSize: '1.02em',
            fontWeight: '400',
            fontFamily: 'Franklin Gothic Medium',
        },
        lista:{
            width: '100%',
        },
        listItem:{
            backgroundColor: '#f1efef',
            width:"80%",
            height:"10vh",
            margin: "0 auto",
            textAlign: "center",
            borderRadius: "10px",
            padding:"0"
        },
        footer:{
            position: "fixed",
            bottom: "0",
            left: "0"
        }
    }

    async function getAdress() {
        const response = await api.get('adress');
        setAdress(response.data);
    }

   useEffect(() =>{
    getAdress() 
   }, [])

   function exibeConsole(endereco){
    setSelectAdress([...endereco])
    console.log(selectAdress)
   }
  return (
   
    <div style={style.div}>
        <h1 >Meus Endereços</h1>
        {adress.map((endereco, i) =>(
            <Box key={i} display="flex" flexDirection="row" className="box" onClick={()=> exibeConsole(endereco)}>
                    <List style={style.lista} >
                        <ListItem style={style.listItem} className="boxItem" > 
                            <LocationOnOutlinedIcon className="box_icon" fontSize="large"/>
                            <ListItemText primary={(endereco.street + " - " +  endereco.number)} secondary={(endereco.neighborhood + " , " + endereco.state)}/>
                        </ListItem>
                    </List>
            </Box>
        ))}
        
        <Button variant="contained" style={style.botao}>
          Add Endereço
        </Button>
       
        <Button style={style.footer} variant="contained" fullWidth>
          <Link to="/payment" className="linkBotao">Carrinho</Link>
        </Button>
      
    </div>
   
  );
}

export default Address;
