import { Avatar, ListItem, ListItemAvatar, ListItemText, Grid, Typography } from "@mui/material";
function CardProduct(props) {
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
                    </Typography>
                </Grid>
            </Grid>
        </ListItem>
    );
}
export default CardProduct;