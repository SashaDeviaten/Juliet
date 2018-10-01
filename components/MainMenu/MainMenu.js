import React from 'react';
import PropTypes from 'prop-types';
import './MainMenu.scss';
import menuData from "../../data/main-menu-tabs.json"
import NavLink from "react-router-dom/es/NavLink";

class MainMenu extends React.PureComponent {

    static propTypes = {
        tabs: PropTypes.array
    };

    static defaultProps = {
        tabs: menuData

    };

    constructor(props) {
        super(props);
        this.state = {
            activePath:  window.location.pathname
        }
    }

    mainClassName = 'MainMenu';

    buildMenuItems = () => {

        return this.props.tabs.map((item, i) => {
            return <NavLink key={i} to={`${item.path}`}
                            data-path={item.path}
                            className={`mainMenuTab  ${(this.state.activePath === item.path) ? 'current' : ''}`} onClick={this.tabClicked}>
                    {item.name}
            </NavLink>

        })

    };

    tabClicked = (e) => {
        this.setState({activePath: e.currentTarget.dataset.path}, () => window.scrollTo(0, 360))
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