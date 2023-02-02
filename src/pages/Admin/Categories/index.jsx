import { useEffect, useState } from "react";
import { Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import api from '../../../config/api';

function Categories() {

    const[categories, setCategories] = useState([]);

    async function getCategories() {
        const response = await api.get('categories');
        setCategories(response.data);
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
            <List>
                {categories.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar src="" />
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                        <ListItemButton>
                            <Button>Editar</Button>
                            <Button onClick={() => deleteItem(item.id)}>Excluir</Button>
                        </ListItemButton>
                    </ListItem>
                ))}
                
            </List>
        </>
    );
}

export default Categories;