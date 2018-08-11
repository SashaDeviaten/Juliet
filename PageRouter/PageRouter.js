import React from 'react';
import { Route } from 'react-router-dom';
import Page_About from "../Pages/Page_About";
import Page_Company from "../Pages/Page_Company";
import Switch from "react-router-dom/es/Switch";

class PagesRouter extends React.Component {

    render() {

        return (
                <Switch>
                    <Route path="/" exact component={Page_About}/>
                    <Route path="/company" component={Page_Company}/>
                </Switch>
        );

    }
}

export default PagesRouter;