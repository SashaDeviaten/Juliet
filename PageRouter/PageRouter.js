import React from 'react';
import { Route } from 'react-router-dom';
import Switch from "react-router-dom/es/Switch";
import MainPage from "../Pages/MainPage/MainPage";
import Page_Master from "../Pages/Page_Master/Page_Master";
import Page_Clients from "../Pages/Page_Clients/Page_Clients";

class PagesRouter extends React.Component {

    render() {

        return (
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/master" component={Page_Master}/>
                    <Route path="/clients" component={Page_Clients}/>
                </Switch>
        );

    }
}

export default PagesRouter;