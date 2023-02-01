import { Avatar, CssBaseline, Grid, TextField } from '@mui/material';
import ListCard from '../../components/ListCard';
import { Link } from 'react-router-dom';
import pizza from '../../assets/images/pizza.png';
import pastel from '../../assets/images/pastel.png';
import hamburguer from '../../assets/images/hamburguer.png';
import banner from '../../assets/images/banner.jpg';
function Welcome() {

    return (
        <CssBaseline>
            <div style={{ padding: '20px' }}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <h4 className='title'>Seja bem-vindo!</h4>
                        <TextField 
                            fullWidth
                            size='small'
                            margin='normal'
                            variant='outlined'
                            placeholder='Quero comer?'
                        />
                    </Grid>-
                </Grid>
                
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar 
                            src={pizza} 
                            alt="" 
                            sx={{ width: '80px', height: '80px' }} 
                        />
                    </Grid>
                    <Grid item>
                        <Avatar 
                            src={pastel} 
                            alt="" 
                            sx={{ width: '80px', height: '80px' }} 
                        />
                    </Grid>
                    <Grid item>
                        <Avatar 
                            src={hamburguer} 
                            alt="" 
                            sx={{ width: '80px', height: '80px' }} 
                        />
                    </Grid>
                    <Grid item>
                        <Avatar 
                            src={hamburguer} 
                            alt="" 
                            sx={{ width: '80px', height: '80px' }} 
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid>
                        <img src={banner} alt="Banner" id="banner"/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid>
                        <h6>Listagem de Produtos</h6>
                    </Grid>
                </Grid>
                
                <Grid container>
                    <Grid>
                        <ListCard 
                            list={[
                                { title: "Pizza de Frango", image: '', content: "Frango, Azeitona, Queijo e Catupiry" },
                                { title: "Pizza Calabresa", image: '', content: "Pizza de Calabresa" },
                                { title: "Pizza de Atum", image: '', content: "Pizza de Atum" },
                            ]}
                        />
                    </Grid>
                </Grid>
                <Link to="/orders">Carrinho</Link>
            </div>
        </CssBaseline>
    );
}

export default Welcome;