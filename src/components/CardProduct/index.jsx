import { Avatar, ListItem, ListItemText, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import DadosContext from '../../contexts/DadosContext';

function CardProduct( props ) {

    const { productsOrders, setProductsOrders } = useContext(DadosContext);
    const [products, setProducts] = useState({})

    function addToCard(array, obj) {
        const list = array
        list.push({...obj, qtd: 1})
    }

    function increaseQuantity(array, index) {
        ++array[index].qtd
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
        cartItem ? increaseQuantity(list, index) : addToCard(list, item)
        setProductsOrders([...list]);
        const indeProduct = productsOrders.findIndex(itemList => itemList.id === item.id)
        setProducts(productsOrders[indeProduct])
        console.log('AddProducts: ', products)
        console.log('productsOrders: ', productsOrders)
    }

    function removeProduct(item) {
        let list = productsOrders
        const index = list.findIndex(itemList => itemList.id === item.id)
        decreaseQuantity(list, index)
        setProductsOrders([...list]);
        const indeProduct = productsOrders.findIndex(itemList => itemList.id === item.id)
        setProducts(productsOrders[indeProduct])
        console.log('removeProduct: ', products)
        console.log('productsOrders: ', productsOrders)
    }

    return (
        <ListItem>
            <Grid container>
                <Grid item xs={3}>
                    <Avatar src={props.image} alt={props.alt} />
                </Grid>
                <Grid item xs={6}>
                    <ListItemText 
                        primary={props.name}
                        secondary={props.children}
                    />
                </Grid>
                <Grid item xs={3} style={{ textAlign: 'right' }}>
                    <Typography variant="p">
                        R$ {props.price}
                        <button onClick={() => removeProduct(props)}>-</button>
                        <span>{props.qtd || 0}</span>
                        <button onClick={() => addProduct(props)}>+</button>
                    </Typography>
                </Grid>
            </Grid>
        </ListItem>
    );
}
export default CardProduct;