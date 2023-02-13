import { Avatar, ListItem, ListItemText, Grid, Typography, Box} from "@mui/material";
import { useContext, useState } from "react";
import DadosContext from '../../contexts/DadosContext';
import { yellow } from '@mui/material/colors'

function CardProduct( props ) {

    const style = {
        btn: {
            border: 'none',
            backgroundColor: yellow[900],
            color: '#fff',
            padding:'6px 10px',
            borderRadius: '4px',
            fontWeight: 'bold'
        },
        text: {
            fontWeight: 'bold',
        }
    }

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
    }

    function removeProduct(item) {
        let list = productsOrders
        const index = list.findIndex(itemList => itemList.id === item.id)
        decreaseQuantity(list, index)
        setProductsOrders([...list]);
        const indeProduct = productsOrders.findIndex(itemList => itemList.id === item.id)
        setProducts(productsOrders[indeProduct])
    }

    return (
        <ListItem>
            <Grid container>
                <Grid item xs={2}>
                    <Avatar src={props.image} alt={props.alt} />
                </Grid>
                <Grid item xs={5}>
                    <ListItemText 
                        primary={props.name}
                        secondary={props.children}
                    />
                </Grid>
                <Grid item xs={5} display="flex" alignItems="center" justifyContent="center">
                    <Typography sx={style.text} variant="p">
                        R$ {props.price}
                    </Typography>
                    <Box marginLeft={1}>
                        <button
                        style={style.btn}
                        onClick={() => removeProduct(props)}>-</button>
                        <span style={{margin: '3px', fontWeight:'bold'}}>{props.qtd || 0}</span>
                        <button style={style.btn} onClick={() => addProduct(props)}>+</button>
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
    );
}
export default CardProduct;