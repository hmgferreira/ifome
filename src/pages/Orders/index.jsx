import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ListCard from "../../components/ListCard";
import DadosContext from '../../contexts/DadosContext'
import {ButtonDefault} from '../../components/ButtonDefault'
import { Box } from "@mui/system";
import {Grid} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Orders() {
    const  { productsOrders, setProductsOrders } = useContext(DadosContext)
    return (
        <>  
        <Grid container>
            <Grid item xs={12}>
                <Button variant="contained" sx={{m:2}} startIcon={<ArrowBackIosNewIcon/>} >
                    <Link to="/">Voltar</Link>
                </Button>
                <h1>Pedidos</h1>
            </Grid>
            <Grid item xs={12}>
                <ListCard list={productsOrders} />
            </Grid>
            <Grid item xs={12} style={{position: 'absolute', bottom:0, left:0, width:'100%'}}>
                <ButtonDefault variant='contained'>
                    <Link to="/address">Finalizar</Link>
                </ButtonDefault>
            </Grid>
        </Grid>
        </>
    );
}

export default Orders;