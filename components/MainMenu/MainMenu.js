import React from 'react';
import PropTypes from 'prop-types';
import './MainMenu.scss'

class MainMenu extends React.PureComponent {

    static propTypes = {
        tabs: PropTypes.array
    };

    static defaultProps = {

    };

    mainClassName = 'MainMenu';

    render() {
        const {mainClassName} = this;

        return (
            <div className={mainClassName}>


            </div>
        );

    }

}

export default MainMenu;