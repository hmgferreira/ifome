import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
function CardProduct(props) {
    return (
        <ListItem>
            <ListItemAvatar>
            <Avatar src={props.image} alt={props.alt} />
            </ListItemAvatar>
            <ListItemText 
                primary={props.title}
                secondary={props.children}
            />
        </ListItem>
    );
}
export default CardProduct;