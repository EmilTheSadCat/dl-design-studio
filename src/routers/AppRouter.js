import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NotFoundPage from "../components/NotFoundPage";
import MainPage from "../components/MainPage";
import ContactPage from "../components/ContactPage";
import PortfolioPage from "../components/PortfolioPage";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/"  component={MainPage} />
                <Route path="/portfolio"  component={PortfolioPage} />
                <Route path="/contact"  component={ContactPage} />

                <Route path="/not-found" component={NotFoundPage} />

            </Switch>
        </div>
    </Router>
);

export default AppRouter;
