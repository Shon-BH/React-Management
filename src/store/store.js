import { useReducer, createContext } from "react";
import { reducer } from "./reducer";

const initialState = {
    userId : "",
    name: "",
    phone : "",
};

const store = createContext(initialState);
const { Provider } = store;

const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Provider value={[state, dispatch]}>{children}</Provider>
};

export {store, StoreProvider};