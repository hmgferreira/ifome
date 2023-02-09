import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import api from '../../../config/api';

function CategoriesIndex() {

    const navigate = useNavigate();
    const[categories, setCategories] = useState([]);

    async function getCategories() {
        const response = await api.get('categories');
        setCategories(response.data);
    }

    async function editItem(id) {
        navigate(`/categories/edit/${id}`)
        ///categories/edit/1
    }

    async function deleteItem(id) {
        const check = confirm("Deseja deletar?");
        if(check) {
            await api.delete('categories/'+id);
            alert("Categoria Deletada com Sucesso");
            getCategories();
        }
        
    }
    

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <h6>Categorias</h6>
            <Link to="/categories/new">Adicionar Categoria</Link>
            <List>
                {categories.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar src="" />
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                        <ListItemButton>
                            <Button onClick={() => editItem(item.id)}>Editar</Button>
                            <Button onClick={() => deleteItem(item.id)}>Excluir</Button>
                        </ListItemButton>
                    </ListItem>
                ))}
                
            </List>
        </>
    );
}

export default CategoriesIndex;