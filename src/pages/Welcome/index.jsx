import { Avatar, CssBaseline, Grid, TextField } from '@mui/material';
import ListCard from '../../components/ListCard';
import { Link } from 'react-router-dom';
import pizza from '../../assets/images/pizza.png';
import pastel from '../../assets/images/pastel.png';
import hamburguer from '../../assets/images/hamburguer.png';
import banner from '../../assets/images/banner.jpg';
import { Box } from '@mui/system';
function Welcome() {

    const styles = {
        box: {
            width: '100%', 
            height: '100px', 
            overflowX: 'auto',
            overflowY: 'hidden',
            padding: '10px'
        },
        avatar_circle: {
            width: '80px', 
            height: '80px',
            marginRight: '10px'
        }
    };

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
                    </Grid>
                </Grid>
                {/* https://dontpad.com/iw */}
                <Box sx={styles.box}>
                    <div style={{ display: 'flex' }}>
                        <Avatar 
                            src={pizza} 
                            alt="" 
                            sx={styles.avatar_circle} 
                        />
                        <Avatar 
                            src={pastel} 
                            alt="" 
                            sx={styles.avatar_circle} 
                        />
                        <Avatar 
                            src={hamburguer} 
                            alt="" 
                            sx={styles.avatar_circle} 
                        />
                        <Avatar 
                            src={hamburguer} 
                            alt="" 
                            sx={styles.avatar_circle} 
                        />
                        <Avatar 
                            src={hamburguer} 
                            alt="" 
                            sx={styles.avatar_circle} 
                        />
                    </div>
                </Box>
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