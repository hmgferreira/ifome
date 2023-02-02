import { useEffect, useState } from "react";
import { Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField } from '@mui/material';
import api from '../../../config/api';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
function Form() {

    async function submit(values) {
        console.log(values);
    }

    const validation = yup.object().shape({
        name: yup.string().required("Campo obrigatorio").min(3, "No minimo 3 caracteres")
    });

    return (
        <>
            <h6>Categorias</h6>
            <Formik
                initialValues={{
                    name: '',
                    image: ''
                }}
                onSubmit={(values) => {
                    submit(values)
                }}
                validationSchema={validation}
            >
                {({ handleSubmit, handleChange }) => (
                    <form>
                        <TextField 
                            name="name"
                            id="name"
                            label="Nome"
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                        />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage name="name" />
                        </span>
                        <TextField 
                            name="image"
                            id="image"
                            label="Imagem"
                            type="file"
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                        />
                        <Button onClick={handleSubmit}>Salvar</Button>
                    </form>
                )}
            </Formik>
        </>
    );
}

export default Form;