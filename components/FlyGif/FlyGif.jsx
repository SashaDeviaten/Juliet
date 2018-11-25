import React, {PureComponent} from 'react';
import './FlyGif.scss';
import {connect} from 'react-redux'
import {generateCode, getRandomInt} from '../../utils/utils';
import showFlyGif from "../../actions/showFlyGif";
import blockFlyGif from "../../actions/blockFlyGif";
import {fetchPromise} from "../../core/fetch";

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
        on: false,
    };

    timeout = null;
    gifRef = null;
    mainClassName = 'FlyGif';
    speedX = 3;
    speedY = 4;
    isFirstTime=true;

    componentDidMount () {
        this.timeout = setTimeout(this.showGif, 3000 + getRandomInt()*10000);
        window.addEventListener('blur', this.clearGifTimeout);
        window.addEventListener('focus', this.setGifTimeout)
        this.addCodeFetch()
    }

    componentWillUnmount () {
        this.block()
    }

    setGifTimeout = () => {
        this.timeout = setTimeout(this.showGif, 3000 + getRandomInt()*10000);
    };

    clearGifTimeout = () => {
        this.setState({on: false});
        clearTimeout(this.timeout)
    };

    setRef = (ref) => {this.gifRef = ref};

    showGif = () => {
        this.timeout = setTimeout(this.hideGif, 3000 + getRandomInt()*10000);
        this.props.showFlyGif();
        this.setState({on: true}, () => {
            this.gifRef.style.top = getRandomInt(20 + window.pageYOffset, Doc.clientHeight - (this.gifRef.clientHeight || 150) - 20) + 'px';
            this.gifRef.style.left = getRandomInt(20, Doc.clientWidth - (this.gifRef.clientWidth || 250) - 20) + 'px';
            RAF(this.moveGif)
        })
    };

    hideGif = () => {
        if (this.isFirstTime) {
            this.isFirstTime = false;
            if (confirm('Заблокировать летающую картинку со скидкой?')) {
                this.block();
                return
            }
        }
        this.timeout = setTimeout(this.showGif, 3000 + getRandomInt()*10000);
        this.props.hideFlyGif();
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

    addCodeFetch = async (code) => {
        const StringName = 'DEVIATEN_CRAZY_MIND_RECORDS';
        let answer;

        try {
            answer = await fetchPromise({
                fetchOptions: {
                    method: 'POST',
                    // headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    //     'Accept': 'application/json, text/javascript'},
                    body: JSON.stringify({f: 'READ', n: StringName}),
                }
            });
        } catch (e) {
            console.log('error', e);
        }
        console.log('answer addCodeFetch', answer);
        // alert(`Ваш код ${code}`);
    };

    catchHandler = () => {
            if (confirm('Получить код для скидки?')) {
                const code = generateCode();
                this.addCodeFetch(code);
            }
            this.block()
    };

    block = () => {
        this.props.blockFlyGif();
        this.clearGifTimeout();
        window.removeEventListener('blur', this.clearGifTimeout);
        window.removeEventListener('focus', this.setGifTimeout)
    };


    render() {

        return <div className={this.mainClassName}>
            {this.state.on && <img ref={this.setRef}
                                   onDoubleClick={this.catchHandler}
                                   src={'../../images/flyGif.gif'}/>}
        </div>
    }
}

export default connect(
    null,
    dispatch => ({
        showFlyGif: () => dispatch(showFlyGif(true)),
        hideFlyGif: () => dispatch(showFlyGif(false)),
        blockFlyGif: () => dispatch(blockFlyGif()),
    })
)(FlyGif);