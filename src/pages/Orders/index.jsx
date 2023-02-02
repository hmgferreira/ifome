import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Orders() {
    return (
        <>
            <h1>Pedidos</h1>
            <Button variant='contained' fullWidth >
                <Link to="/address">Finalizar</Link>
            </Button>
        </>
    );
}

export default Orders;