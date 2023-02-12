import { List } from "@mui/material";
import CardProduct from "../CardProduct";
function ListCard({ list }) {

 

    return (
        <List>
           {list.map((item, index) => (
            <CardProduct
                key={index}
                id={item.id}
                title={item.name}
                src={item.image}
                price={item.price}
                qtd={item.qtd}
            >
                {item.description}
            </CardProduct>
           ))}
        </List>
    );
}
export default ListCard;
