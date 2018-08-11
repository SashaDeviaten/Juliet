"use strict";

import React from 'react';
import PagesRouter from "../PageRouter/PageRouter";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Header from "../components/Header/Header";
import './MainPage.scss'


class MainPage extends React.PureComponent {

  render() {

    return (

          <div>
              <Header/>
              <BrowserRouter>
                  <PagesRouter/>
              </BrowserRouter>


              {/*<h1>демо работы Redux</h1>*/}
              {/*<CounterButton counterid={111} />*/}
              {/*<CounterButton counterid={222} />*/}
          </div>

    );

  }

}

export default MainPage;
