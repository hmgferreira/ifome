import { Avatar, Button, CssBaseline, Grid, TextField, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import ListCard from '../../components/ListCard';
import { Link } from 'react-router-dom';
import pizza from '../../assets/images/pizza.png';
import banner from '../../assets/images/banner.jpg';
import { Box } from '@mui/system';
import { useContext, useState } from 'react';
import api from '../../config/api';
import { useEffect } from 'react';
import DadosContext from '../../contexts/DadosContext';

import {Slider, Slide} from '../../components/SliderShow'
import banner from '../../assets/images/banner.jpg'
import banner2 from '../../assets/images/banner-2.jpg'
import banner3 from '../../assets/images/banner-3.jpg'
import banner1 from '../../assets/images/banner-1.jpg'

const productImages = [banner1, banner2, banner3, banner]

function Welcome() {

    const settings = {
        spaceBetween: 5,
        slidesPerView: 1,
        navigation: false,
        draggable: true,
        loop: false,
        pagination: {
            clickable: true
        }
    }

    const { productsOrders } = useContext(DadosContext);

    const[search, setSearch] = useState('');
    const [count, setCount] = useState(0)
    const[categories, setCategories] = useState([]);
    const[banners, setBanners] = useState([]);
    const[products, setProducts] = useState([]);
    const[productsDB, setProductsDB] = useState([]);
    
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

    async function getCategories() {
        const response = await api.get('categories');
        setCategories(response.data);
    }

    async function getBanners() {
        const response = await api.get('banners');
        setBanners(response.data);
    }

    function updateListProducts() {
        const lista = productsDB.map(product => {
            productsOrders.map(productContext => {
                if(product.id === productContext.id) {
                    product.qtd = productContext.qtd;
                }
            });
            return product;
        });
        setProducts(lista);
    }

    async function getProducts() {
        const response = await api.get('products', {
            params: {
                name_like: search
            }
        });
        setProductsDB(response.data);

    }

     function getCountCart() {
        if(productsOrders.length) {
            let resp = productsOrders.map(item => {
                return item.qtd
            }).reduce((acc, currentValue) => acc + currentValue, 0)
            setCount(resp)
        }
    }

    useEffect(() => {
        updateListProducts();
        getCountCart()
    }, [productsOrders, productsDB]);

    useEffect(() => {
        if(search === '') {
            getProducts();
        }
    }, [search]);

    useEffect(() => {
        getCategories();
        getBanners();
        getProducts();
    }, []);


    return (
        <CssBaseline>
            <div style={{ padding: '20px' }}>
                
                <Grid container style={{position:'relative'}}>
                    <Grid item xs={12} md={12}>
                        <h4 className='title'>Seja bem-vindo!</h4>
                        <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={9} md={9}>
                                <TextField 
                                    fullWidth
                                    size='small'
                                    margin='normal'
                                    variant='outlined'
                                    placeholder='Quero comer?'
                                    name="pesquisa"
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3} md={3}> 
                                <Button variant="outlined" onClick={() => getProducts()}>Buscar</Button>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    <Link to="/orders" style={{position:'absolute', top:'-30px', right:'-20px'}}>
                    <IconButton color='primary' sx={{m:2}} size="large">
                        <Badge badgeContent={count} color="primary">
                            <ShoppingCartIcon fontSize='large'/>
                        </Badge>
                    </IconButton>
                </Link>
                    
                </Grid>
                {/* https://dontpad.com/iw */}

                <Box sx={styles.box}>
                    <div style={{ display: 'flex' }}>
                        {categories.map((item, index) => (
                            <Avatar 
                                key={index}
                                src={pizza} 
                                alt={item.name} 
                                sx={styles.avatar_circle} 
                            />
                        ))}
                    </div>
                </Box>
                <Grid container>
                    <Typography sx={{fontSize:'1.25rem', lineHeight:'1.625rem', padding:'20px 0', color:'#1a1a1a' }} variant="h4" gutterBottom>
                        As melhores ofertas
                    </Typography>
                    <Slider settings={settings}>
                        {
                            productImages.map((item, index) => (
                                <Slide key={index}>
                                    
                                    <img src={item} alt="" />
                                </Slide>
                            ))
                        }
                    </Slider>
                </Grid>

                {!search ?
                    <>
                        <Box sx={styles.box}>
                            <div style={{ display: 'flex' }}>
                                {categories.map((item, index) => (
                                    <Avatar 
                                        key={index}
                                        src={pizza} 
                                        alt={item.name} 
                                        sx={styles.avatar_circle} 
                                    />
                                ))}
                            </div>
                        </Box>
                        <Grid container>
                            {banners.map((item, index) => (
                                <Grid key={index}>
                                    <img src={banner} alt={item.description} id="banner"/>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                : null}

                <Grid container>
                    <Grid>
                        <h6>Listagem de Produtos</h6>
                    </Grid>
                </Grid>
                
                <Grid container>
                    <Grid xs={12}>
                        <ListCard list={products} />
                    </Grid>
                </Grid>
            </div>
        </CssBaseline>
    );
}

export default Welcome;
