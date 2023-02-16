import { Avatar, Button, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import ListCard from '../../components/ListCard';
import { Link } from 'react-router-dom';
import pizza from '../../assets/images/pizza.png';
import { Box } from '@mui/system';
import { useState } from 'react';
import api from '../../config/api';
import { useEffect } from 'react';

import {Slider, Slide} from '../../components/SliderShow'
import banner from '../../assets/images/banner.jpg'
import banner2 from '../../assets/images/banner-2.jpg'
import banner3 from '../../assets/images/banner-3.jpg'
import banner1 from '../../assets/images/banner-1.jpg'

const productImages = [banner1, banner2, banner3, banner]


function Welcome() {
    const[categories, setCategories] = useState([]);
    const[banners, setBanners] = useState([]);
    const[products, setProducts] = useState([]);

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

    async function getProducts() {
        const response = await api.get('products');
        setProducts(response.data);
    }

    useEffect(() => {
        getCategories();
        getBanners();
        getProducts();
    }, []);


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

                <Grid container>
                    <Grid>
                        <h6>Listagem de Produtos</h6>
                    </Grid>
                </Grid>
                
                <Grid container>
                    <Grid xs={12}>
                        <ListCard list={products} outra="Teste" />
                    </Grid>
                </Grid>
                <Button variant='contained' fullWidth >
                    <Link to="/orders">Carrinho</Link>
                </Button>
                
            </div>
        </CssBaseline>
    );
}

export default Welcome;