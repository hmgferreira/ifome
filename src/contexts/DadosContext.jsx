import { createContext } from "react";

const DadosContext = createContext({
    payment: null,
    address: [],
    products: []
});

export default DadosContext;

