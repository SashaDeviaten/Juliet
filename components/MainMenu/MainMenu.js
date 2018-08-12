import React from 'react';
import PropTypes from 'prop-types';
import './MainMenu.scss';
import menuData from "../../data/main-menu-tabs.json"

class MainMenu extends React.PureComponent {

    static propTypes = {
        tabs: PropTypes.array
    };

    static defaultProps = {
        tabs: menuData

    };

    mainClassName = 'MainMenu';

    buildMenuItems = () => {

        return this.props.tabs.map((item, i) => {
            return <div key={i} className={'mainMenuTab'}>{item.name}</div>

        })

    };

    render() {
        const {mainClassName, buildMenuItems} = this;

        return (
            <div className={mainClassName}>
                {buildMenuItems()}

            </div>
        );

    }

}

export default MainMenu;