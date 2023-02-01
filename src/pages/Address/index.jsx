import { Link } from "react-router-dom";

function Address() {
    return (
        <>
            <h1>Meus Endereços</h1>
            <Link to="/payment">Realizar Pagamento</Link>
        </>
    );
}

export default Address;