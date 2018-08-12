import React from 'react';
import './MainInfo.scss';

class MainInfo extends React.PureComponent {

    mainClassName = 'MainInfo';

    render() {
        const {mainClassName} = this;

        return (
            <div className={mainClassName}>
                <div className={mainClassName + '__adress'}>
                    г.Сморгонь
                </div>
                <div className={mainClassName + '__mail'}>
                    Email:<br/>
                    <a href={'maito:juliet_salon@gmail.com'}>
                        juliet_salon@gmail.com
                    </a>
                </div>


            </div>
        );

    }

}

export default MainInfo;