import React from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './Header.scss'

class Header extends React.PureComponent {

    mainClassName = 'Header';

    render() {
        const {mainClassName} = this;

        return (
            <div className={mainClassName}>
            <div className={'container'}>
                <div className={'row'}>

                        <div className={mainClassName + '__logo' + ' col-lg-2 col-12'}>
                            <img src={'../../images/Juliet_Logo.png'}/>
                        </div>
                        <div className={'col-lg-10 col-12'}>zdgnfgnzgbzdgnbxgb</div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Header;