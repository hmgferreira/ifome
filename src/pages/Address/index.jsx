import { Link } from "react-router-dom";
import {Button, Box,ListItem, List, ListItemText, IconButton } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useContext, useEffect, useState } from "react";
import './index.css'
import api from '../../config/api';
import DadosContext from "../../contexts/DadosContext";
import AuthContext from "../../contexts/AuthContext";

function Address() {

    const { logged } = useContext(AuthContext)
    const { address, setAddress } = useContext(DadosContext)
    const[list, setList] = useState([]);
    
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
            left: "0",
            width: '100%'
        }
    }

    async function getAddress() {
        const response = await api.get('adress');
        setList(response.data);
    }

    async function updateAddress(item, isDefault) {
        await api.put('adress/'+item.id, {
            ...item,
            isDefault
        });
        // TEM QUE FAZER AS OUTRAS REQUISICOES PARA NEGAR O ISDEFAULT
    }

    useEffect(() =>{
        if(!logged) {
            getAddress();
        } else {
            setList(address);
        }
    }, []);

    function exibeConsole(endereco){
        
        if(address.length) {
            const listaAddress = address.map(item => {
                if(item.street === endereco.street) {
                    item.isDefault = true;
                    updateAddress(item, true);
                } else {
                    item.isDefault = false;
                }
                return item;
            });
            setAddress([...listaAddress])
        } else {
            updateAddress(endereco, true);
        }
    }
    
    return (
    
        <div style={style.div}>
            <h1 >Meus Endereços</h1>
            {list.map((endereco, i) =>(
                <Box key={i} 
                    display="flex" 
                    flexDirection="row" 
                    className={`box `}
                    onClick={()=> exibeConsole(endereco)}>
                        <List style={style.lista} >
                            <ListItem style={style.listItem} className={`boxItem ${endereco.isDefault ? 'box-selected' : ''}`}  > 
                                <LocationOnOutlinedIcon className="box_icon" fontSize="large"/>
                                <ListItemText primary={(endereco.street + " - " +  endereco.number)} secondary={(endereco.neighborhood + " , " + endereco.state)}/>
                            </ListItem>
                        </List>
                </Box>
            ))}
            
            <Button variant="contained" style={style.botao}>
                Add Endereço
            </Button>
        
            <div style={style.footer}>
                <Button variant="contained" fullWidth>
                    <Link to="/payment" className="linkBotao">Carrinho</Link>
                </Button>
                <Button variant="contained" fullWidth>
                    <Link to="/orders" className="linkBotao">Voltar</Link>
                </Button>
            </div>
            
        
        </div>
    
    );
}

export default Address;
