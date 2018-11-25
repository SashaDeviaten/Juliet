import React, {Fragment, PureComponent} from 'react';
import './Page_Admin.scss';
import {connect} from "react-redux";
import verifiedAdmin from "../../actions/verifiedAdmin";
import blockFlyGif from "../../actions/blockFlyGif";


class Page_Admin extends PureComponent {

    componentDidMount () {
        window.scrollTo(0, 360)
    }

    mainClassName = 'Page_Admin';
    passsword = null;

    setPassword = e => {
        if (e.target.value) this.password = e.target.value;
    };

    checkPassword = () => {
        if (this.password === 'Vojstom') {
            this.props.verifiedAdmin();
            this.props.blockFlyGif()
        }
        else {
            alert('Неверный пароль')
        }
    };


    render() {
        const {mainClassName} = this;

        const {admin} = this.props;

        return (


            <div className={mainClassName}>
                <div className={'container'}>
                    <div className={mainClassName + ' row'}>
                        {admin ? <Fragment>
                                <div className={'codesTitle'}>Активные коды</div>
                                <div>tut budut cody</div>
                            </Fragment>
                            : <div className={'password'}>
                                <input placeholder={'Введите пароль'}
                                               type={'password'}
                                               onBlur={this.setPassword}
                                />
                                <button onClick={this.checkPassword}>Войти</button>
                            </div>}
                    </div>
                </div>
            </div>

        );

    }

}

export default connect(
    ({admin: {admin}}) => ({admin}),
    dispatch => ({
        verifiedAdmin: () => dispatch(verifiedAdmin()),
        blockFlyGif: () => dispatch(blockFlyGif()),
    })
)(Page_Admin);