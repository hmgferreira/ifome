import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField } from '@mui/material';
import api from '../../../config/api';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

function CategoriesForm() {

    const navigate = useNavigate();
    const params = useParams();
    
    const[data, setData] = useState({
        name: '',
        image: ''
    });
    

    async function submit(values, functions) {
        let msg = 'Categoria criada com sucesso.';
        if(params.id) {
            await api.put(`categories/${params.id}`, values);
            msg = 'Categoria atualizada com sucesso.';
            alert(msg);
            navigate('/categories');
        } else {
            await api.post('categories', values);
            alert(msg);
            const check = confirm("Deseja adicionar outra uma categoria?");
            if(check) {
                functions.resetForm();
            } else {
                navigate('/categories');
            }
        }
        
        
    }

    async function getData() {
        if(params.id != undefined) {
            const response = await api.get(`categories/${params.id}`);
            setData(response.data);
        }
    }

    const validation = yup.object().shape({
        name: yup.string().required("Campo obrigatorio").min(3, "No minimo 3 caracteres")
    });

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h6>Categorias</h6>
            <Formik
                enableReinitialize
                initialValues={data}
                onSubmit={(values, functions) => {
                    submit(values, functions);
                }}
                validationSchema={validation}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <form>
                        <TextField 
                            name="name"
                            id="name"
                            label="Nome"
                            fullWidth
                            margin="normal"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage name="name" />
                        </span>
                        <TextField 
                            name="image"
                            id="image"
                            label="Imagem"
                            value={values.image}
                            type="file"
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                        />
                        <Button onClick={handleSubmit}>
                            {values.id ? 'Atualizar' : 'Salvar'}
                        </Button>
                    </form>
                )}
            </Formik>
            <Link to="/categories">Cancelar</Link>
        </>
    );
}

export default CategoriesForm;