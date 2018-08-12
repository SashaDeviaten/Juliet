import React from 'react';
import PropTypes from 'prop-types';

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import './MainSwiper.scss';

class MainSwiper extends React.PureComponent {

    static propTypes = {

    };

    static defaultProps = {
        swiperProps: {
            loop: true,
            speed: 1800,
            roundLengths: true,
            autoplay: {
                delay: 5000
            },
            pagination: {
                clickable: true
            }
        },
    };

    componentDidMount() {
        const {nodes: {swiperContainer, swiperPrevButton , swiperNextButton, swiperPagination}, props: {swiperProps}} = this;

        this.swiper = new Swiper(swiperContainer, {
            ...swiperProps,
            pagination: {
                ...swiperProps.pagination,
                el: swiperPagination
            },
            navigation: {
                nextEl: swiperNextButton,
                prevEl: swiperPrevButton,
            }
        });
    }

    nodes = {};

    swiper = null;

    mainClassName = 'MainSwiper';

    assignSwiperContainerRef = ref => this.nodes.swiperContainer = ref;
    assignSwiperPrevButtonRef = ref => this.nodes.swiperPrevButton = ref;
    assignSwiperNextButtonRef = ref => this.nodes.swiperNextButton = ref;
    assignSwiperPaginationRef = ref => this.nodes.swiperPagination = ref;


    render() {
        const {
            mainClassName,
            assignSwiperContainerRef, assignSwiperPrevButtonRef, assignSwiperNextButtonRef, assignSwiperPaginationRef,
            nodes,
            props: {slides},
            props: {swiperProps: {pagination, navigation}, small}
        } = this;

        return (
            <div className={mainClassName}>
                    <h1 className="_none">Header</h1>
                    <div className="main-slider swiper-container" ref={assignSwiperContainerRef}>
                        <div className="swiper-wrapper">
                            <img className={'main-slider__slide swiper-slide'} src={'../../images/Juliet_Logo.png'}/>
                            <img className={'main-slider__slide swiper-slide'} src={'../../images/Juliet_Logo.png'}/>
                            <img className={'main-slider__slide swiper-slide'} src={'../../images/Juliet_Logo.png'}/>
                        </div>
                        <div className="main-slider__btn-next swiper-button-next" ref={assignSwiperNextButtonRef}>
                            <div className="bps-icon">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 1024 1024">
                                    <path
                                        fill={'#0077ff'}
                                        transform={`rotate(90, 512,512)`}
                                        d = {"M1024 715.072c0 30.092-12.039 60.185-30.092 84.263-42.132 48.145-120.38 54.171-168.527 6.014l-306.96-282.881-312.986 282.881c-54.171 42.132-126.395 42.132-174.551-6.014-42.132-54.171-42.132-126.395 6.014-174.551l475.487-439.38 475.487 439.38c24.079 24.079 36.118 60.185 36.118 90.288z"}
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="main-slider__btn-prev swiper-button-prev" ref={assignSwiperPrevButtonRef}>
                            <div className="bps-icon">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 1024 1024">
                                    <path
                                        fill={'#0077ff'}
                                        transform={`rotate(270, 512,512)`}
                                        d = {"M1024 715.072c0 30.092-12.039 60.185-30.092 84.263-42.132 48.145-120.38 54.171-168.527 6.014l-306.96-282.881-312.986 282.881c-54.171 42.132-126.395 42.132-174.551-6.014-42.132-54.171-42.132-126.395 6.014-174.551l475.487-439.38 475.487 439.38c24.079 24.079 36.118 60.185 36.118 90.288z"}
                                        />
                                </svg>
                            </div>
                        </div>
                        <div className="main-slider__pagination swiper-pagination" ref={assignSwiperPaginationRef}/>
                    </div>

            </div>
        );

    }

}

export default MainSwiper;

<glyph unicode="chevron_left" glyph-name="chevron_left" d="M715.068 959.998c30.094 0 60.189-12.037 84.264-30.094 48.151-42.133 54.17-120.377 6.019-168.529l-282.887-306.962 282.887-312.982c42.133-54.17 42.133-126.396-6.019-174.547-54.17-42.133-126.396-42.133-174.547 6.019l-439.378 475.491 439.378 475.491c24.076 24.076 60.189 36.113 90.283 36.113z" />
