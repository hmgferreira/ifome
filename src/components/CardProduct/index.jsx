import { Avatar, ListItem, ListItemAvatar, ListItemText, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import DadosContext from '../../contexts/DadosContext';

function CardProduct( props ) {

    const { productsOrders, setProductsOrders } = useContext(DadosContext);
    const [products, setProducts] = useState({})

    function addToCard(array, obj, index) {
        const list = array
        list.push({...obj, qtd: 1})
        setProductsOrders([...list]);
    }

    function increaseQuantity(array, index) {
        ++array[index].qtd
        console.log('increaseQuantity: ',array[index])
    }

    function decreaseQuantity(array, index) {
        if(array[index].qtd > 0 ) {
            --array[index].qtd
            return
        }
    }

    function addProduct(item) {
        let list = productsOrders
        const cartItem = list.find(itemList => itemList.id === item.id)
        const index = list.findIndex(itemList => itemList.id === item.id)
        cartItem ? increaseQuantity(list, index) : addToCard(list, item, index)
        console.log('addProduct: ',list)
        console.log('products: ', products)
    }

    function removeProduct(item) {
        let list = productsOrders
        const index = list.findIndex(itemList => itemList.id === item.id)
        decreaseQuantity(list, index)
        console.log(list)
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
                        <span>{props.qtd}</span>
                        <button onClick={() => addProduct(props)}>+</button>
                    </Typography>
                </Grid>
                {JSON.stringify(productsOrders, null, 2)}
            </Grid>
        </ListItem>
    );
}
export default CardProduct;