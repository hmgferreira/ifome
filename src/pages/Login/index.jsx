import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
function Login() {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    function onSubmit() {
        // CONSULTA NA API COM EMAIL E SENHA
        // VERIFICA A RESPOSTA
        login();
        navigate('/');
    }
    return (
        <>
              {/* FORMIK */}
              <input type="text" />
              <input type="password" />
              <button onClick={onSubmit}>
                Acessar
              </button>
        </>
    );
}

export default Login;