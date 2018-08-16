import React from 'react';
import { Route } from 'react-router-dom';
import Page_Company from "../Pages/Page_Company";
import Switch from "react-router-dom/es/Switch";
import MainPage from "../Pages/MainPage/MainPage";
import Page_Master from "../Pages/Page_Master/Page_Master";

class PagesRouter extends React.Component {

    render() {

        return (
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/master" component={Page_Master}/>
                </Switch>
        );

    }
}

export default PagesRouter;