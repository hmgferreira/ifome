import { Link } from "react-router-dom";
import { Grid, Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from '@mui/material';
import { useContext } from "react";
import DadosContext from '../../contexts/DadosContext';

function Payment() {

    const { payment, setPayment } = useContext(DadosContext);
    console.log(payment);
    return (
        <>
            <h1>Forma de Pagamento</h1>
            <Grid container spacing={2}>
                <Grid item>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Forma de Pagamento</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel 
                                checked={payment === 'cash' ? true : false}
                                onChange={e => setPayment(e.target.value)} 
                                value="cash" control={<Radio />} label="Dinheiro" />
                            <FormControlLabel 
                                checked={payment === 'pix' ? true : false}
                                onChange={e => setPayment(e.target.value)} value="pix" control={<Radio />} label="Pix" />
                            <FormControlLabel 
                                checked={payment === 'creditcard' ? true : false}
                                onChange={e => setPayment(e.target.value)} value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            
            <Link to="/finished">Finalizar</Link>
            <br />
            <Link to="/address">Voltar</Link>
        </>
    );
}

export default Payment;