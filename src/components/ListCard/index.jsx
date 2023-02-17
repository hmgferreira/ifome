import { List } from "@mui/material";
import CardProduct from "../CardProduct";
function ListCard({ list }) {

 

    return (
        <List>
           {list.map((item, index) => (
            <CardProduct
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                qtd={item.qtd}
            >
                {item.description}
            </CardProduct>
           ))}
        </List>
    );
}
export default ListCard;
