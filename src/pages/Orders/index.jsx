import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DadosContext from '../../contexts/DadosContext'

function Orders() {
    const  { productsOrders, setProductsOrders } = useContext(DadosContext)
    return (
        <>
            <h1>Pedidos</h1>
            {JSON.stringify(productsOrders, null, 2)}
            <Button variant='contained' fullWidth >
                <Link to="/address">Finalizar</Link>
            </Button>
        </>
    );
}

export default Orders;