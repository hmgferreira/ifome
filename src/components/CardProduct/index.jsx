import { Avatar, ListItem, ListItemAvatar, ListItemText, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import DadosContext from '../../contexts/DadosContext';

function CardProduct(props) {

    const { productsOrders, setProductsOrders } = useContext(DadosContext);

    function addProduct(item) {
        let list = productsOrders;
        list.push(item);
        setProductsOrders([...list]);
    }

    function removeProduct(item) {

    }

    return (
        <ListItem>
            <Grid container>
                <Grid item xs={3}>
                    <Avatar src={props.image} alt={props.alt} />
                </Grid>
                <Grid item xs={6}>
                    <ListItemText 
                        primary={props.title}
                        secondary={props.children}
                    />
                </Grid>
                <Grid item xs={3} style={{ textAlign: 'right' }}>
                    <Typography variant="p">
                        R$ {props.price}
                        <button onClick={() => removeProduct(props)}>-</button>
                        <button onClick={() => addProduct(props)}>+</button>
                    </Typography>
                </Grid>
                {JSON.stringify(productsOrders, null, 2)}
            </Grid>
        </ListItem>
    );
}
export default CardProduct;