import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {modal} from '../Modals.jsx';
import './CustomConfirm.scss';

export const customConfirm = config => modal({
    component: CustomConfirm,
    ...config
});

class CustomConfirm extends PureComponent {
    static propTypes = {
        header: PropTypes.any,
        cancel: PropTypes.any,
        confirm: PropTypes.any,
        resolve: PropTypes.func,
        reject: PropTypes.func,
    };

    static defaultProps = {
        confirm: 'Да',
        cancel: 'Нет',
    };

    state = {
        isOpen: true
    };

    componentDidMount () {
        document.body.style.overflowY = 'hidden'
    }


    componentWillUnmount () {
        document.body.style.overflowY = 'auto'
    }

    close = () => {
        this.setState({
            isOpen: false
        })
    };

    confirm = () => {
        this.close();
        this.props.resolve(true);
    };

    cancel = () => {
        this.close();
        this.props.resolve(false);
    };

    render() {
        const {props} = this;
        return (
            <div
                className={'CustomModal'}
                onClose={this.cancel}
                style={{top: window.pageYOffset + 'px'}}
            >
                <div className={'modal'}>
                    <i aria-hidden='true' className='ic-close icon'/>
                    <div className={'CustomModal__header'}>
                        {props.header}
                    </div>
                    <div className={'CustomModal__content'}>
                        {props.children}
                    </div>
                    <div className={'CustomModal__actions'}>
                        <div className={'btnCancel'}>
                            <button className="button_40 button_dark" onClick={this.cancel}>{props.cancel}</button>
                        </div>
                        <div className={'btnConfirm'}>
                            <button className="button_40 button_primary" onClick={this.confirm}>{props.confirm}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomConfirm;