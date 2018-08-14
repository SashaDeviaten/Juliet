"use strict";

import React from 'react';
import PagesRouter from "../PageRouter/PageRouter";
import Header from "../components/Header/Header";
import './Main.scss'
import MainSwiper from "../components/MainSwiper/MainSwiper";
import Footer from "../components/Footer/Footer";


class Main extends React.PureComponent {

  render() {

    return (

        <div>
            <Header/>
            <MainSwiper/>
            <PagesRouter/>
            <Footer/>


            {/*<h1>демо работы Redux</h1>*/}
            {/*<CounterButton counterid={111} />*/}
            {/*<CounterButton counterid={222} />*/}
        </div>

    );

  }

}

export default Main;
