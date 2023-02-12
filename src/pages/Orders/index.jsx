import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ListCard from "../../components/ListCard";
import DadosContext from '../../contexts/DadosContext'

function Orders() {
    const  { productsOrders, setProductsOrders } = useContext(DadosContext)
    return (
        <>
            <h1>Pedidos</h1>
            <ListCard list={productsOrders} />
            <Button variant='contained' fullWidth >
                <Link to="/address">Finalizar</Link>
            </Button>
            <Button variant='contained' fullWidth >
                <Link to="/">Voltar</Link>
            </Button>
        </>
    );
}

export default Orders;