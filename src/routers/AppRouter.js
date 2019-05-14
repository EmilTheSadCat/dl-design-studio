import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NotFoundPage from "../components/NotFoundPage";
import MainPage from "../components/MainPage";
import Contact from "../components/Contact";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/"  component={MainPage} />
                <Route path="/portfolio"  component={MainPage} />
                <Route path="/contact"  component={Contact} />

                <Route path="/not-found" component={NotFoundPage} />

            </Switch>
        </div>
    </Router>
);

export default AppRouter;
