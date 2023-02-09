import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Topbar() {
    
    const { logged, logout } = useContext(AuthContext);

    const { navigate } = useNavigate();

    function sair() {
        logout();
        navigate('/login');
    }

    if(logged) {
        return (
            <>
                Exibe Menu Admin
                <Link to="/">Produtos</Link>
                <Link to="/categories">Categorias</Link>
                <button onClick={() => sair()}>Sair</button>
            </>
        )
    }

    return null;

}

export default Topbar;