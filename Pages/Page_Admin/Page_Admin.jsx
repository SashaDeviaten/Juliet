import React, {PureComponent} from 'react';
import './Page_Admin.scss';
import {connect} from "react-redux";
import verifiedAdmin from "../../actions/verifiedAdmin";
import blockFlyGif from "../../actions/blockFlyGif";


class Page_Admin extends PureComponent {

    mainClassName = 'Page_Admin';

    checkPassword = (val) => {
        if (val === 'Vojstom') {
            this.props.verifiedAdmin();
            this.props.blockFlyGif()
        }
    };


    render() {
        const {mainClassName} = this;

        const {admin} = this.props;

        return (


            <div className={mainClassName}>
                <div className={'container'}>
                    <div className={mainClassName + ' row'}>
                        {admin && <input placeholder={'Введите пароль'}
                                         type={'password'}
                                         onBlur={this.checkPassword}/>}
                    </div>
                </div>
            </div>

        );

    }

}

export default connect(
    ({admin}) => ({admin}),
    dispatch => ({
        verifiedAdmin: () => dispatch(verifiedAdmin()),
        blockFlyGif: () => dispatch(blockFlyGif()),
    })
)(Page_Admin);