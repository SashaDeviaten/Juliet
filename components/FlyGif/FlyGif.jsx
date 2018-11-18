import React, {PureComponent} from 'react';
import './FlyGif.scss';
import {getRandomInt} from '../../utils/utils';

const RAF = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback)
    { window.setTimeout(callback, 1000 / 60) };

const Doc = document.documentElement;


class FlyGif extends PureComponent {

    state = {
        on: false
    };

    timeout = null;
    gifRef = null;
    mainClassName = 'FlyGif';
    speedX = 3;
    speedY = 5;

    componentDidMount () {
        this.timeout = setTimeout(this.showGif, 3000 + getRandomInt()*10000)
    }

    componentWillUnmount () {
       clearTimeout(this.timeout)
    }

    setRef = (ref) => {this.gifRef = ref};

    showGif = () => {
        this.timeout = setTimeout(this.hideGif, 3000 + getRandomInt()*10000);
        this.setState({on: true}, () => {
            this.gifRef.style.top = getRandomInt(20 + window.pageYOffset, Doc.clientHeight - (this.gifRef.clientHeight || 150) - 20) + 'px';
            this.gifRef.style.left = getRandomInt(20, Doc.clientWidth - (this.gifRef.clientWidth || 250) - 20) + 'px';
            RAF(this.moveGif)
        })
    };

    hideGif = () => {
        this.timeout = setTimeout(this.showGif, 3000 + getRandomInt()*10000);
        this.setState({on: false})
    };


    moveGif = () => {
        if (this.gifRef) {

            if (Math.random() < 0.025) this.speedX = -this.speedX;
            if (Math.random() < 0.025) this.speedY = -this.speedY;

            let left = +(this.gifRef.style.left.replace('px', ''));
            let top = +(this.gifRef.style.top.replace('px', ''));
            if (left + this.speedX >= Doc.clientWidth-this.gifRef.clientWidth || left + this.speedX <= 0) this.speedX = -this.speedX;
            if (top + this.speedY >= Doc.offsetHeight-this.gifRef.clientHeight || top + this.speedY <= 0) this.speedY = -this.speedY;

            this.gifRef.style.left = left + this.speedX + 'px';
            this.gifRef.style.top = top + this.speedY + 'px';

            RAF(this.moveGif)
        }

    };


    render() {

        return <div className={this.mainClassName}>
            {this.state.on && <img ref={this.setRef}
                                   onClick={() => {alert('Ура!')} }
                                   src={'../../images/flyGif.gif'}/>}
        </div>
    }
}

export default FlyGif