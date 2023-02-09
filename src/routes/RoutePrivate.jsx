import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function RoutePrivate(props) {

    const { logged } = useContext(AuthContext);

    if(!logged) {
        return <Navigate to="/" />;
    }
    
    return (
        <>
            {props.children}
        </>
    );
}

export default RoutePrivate;