import { List } from "@mui/material";
import CardProduct from "../CardProduct";
function ListCard(props) {
    return (
        <List>
           {props.list.map((item, index) => (
            <CardProduct key={index} title={item.title} src={item.image}>
                {item.content}
            </CardProduct>
           ))}
        </List>
    );
}
export default ListCard;
