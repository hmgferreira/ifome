import { List } from "@mui/material";
import CardProduct from "../CardProduct";
function ListCard({ list }) {
    return (
        <List>
           {list.map((item, index) => (
            <CardProduct key={index} title={item.name} src={item.image} price={item.price}>
                {item.description}
            </CardProduct>
           ))}
        </List>
    );
}
export default ListCard;
