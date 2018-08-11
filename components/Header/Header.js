import React from 'react';
import './Header.scss'
import MainMenu from "../MainMenu/MainMenu";

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
                        <div className={'col-lg-10 col-12'}>
                            <MainMenu/>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Header;