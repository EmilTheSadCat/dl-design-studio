import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NotFoundPage from "../components/NotFoundPage";
import MainPage from "../components/MainPage";
import ContactPage from "../components/ContactPage";
import PortfolioPage from "../components/PortfolioPage";
import ScrollToTop from "../components/ScrollToTop";
import TermsPage from "../components/TermsPage";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <ScrollToTop>
        <div className="content-wrapper">
            <Switch>
                <Route exact path="/"  component={MainPage} />
                <Route path="/portfolio"  component={PortfolioPage} />
                <Route path="/contact"  component={ContactPage} />
                <Route path="/terms"  component={TermsPage} />

                <Route path="/not-found" component={NotFoundPage} />

            </Switch>
        </div>
        </ScrollToTop>
    </Router>
);

export default AppRouter;
