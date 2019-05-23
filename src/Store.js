import React from "react";
import { initialLang, langReducer } from "./reducers/langReducer";
export const Store = React.createContext();


export function StoreProvider(props) {

    const [state, dispatch] = React.useReducer(langReducer, initialLang);

    const value = {
        state,
        dispatch
    };

    return <Store.Provider value={value}>{props.children}
    </Store.Provider>
}