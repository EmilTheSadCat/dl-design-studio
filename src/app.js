import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { StoreProvider } from "./Store";

import AppRouter from "./routers/AppRouter";

const jsx = <StoreProvider>
                <AppRouter />
            </StoreProvider>;


ReactDOM.render(jsx, document.getElementById("app"));
