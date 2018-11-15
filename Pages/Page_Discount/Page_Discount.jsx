import React, {PureComponent} from 'react';
import './Page_Discount.scss';


class Page_Discount extends PureComponent {

    mainClassName = 'Page_Discount';


    render() {
        const {mainClassName} = this;

        return (

            <div className={mainClassName}>
                <div className={'container'}>
                    <div className={mainClassName + ' row odd tile'}>
                        <div className={'col-md-3 col-12'}>
                            <img className={'reviewsPhoto'}
                                 src={'../../images/discount/discount2.jpg'}/>
                        </div>
                        <div className={'col-md-9 col-12 flex'}>
                            <div className={'ma'}>
                                <div className={'reviewsText'}>
                                    Большое спасибо "парикмахеру")))
                                    Стрижка очень понравилась, мастер - просто супер!!! Мы свою девочку первый
                                    раз привели в салон. И ни капельки не пожалели! Я даже не ожидала такого
                                    замечательного отношения! Татьяна относиться к
                                    питомцу, как к своему. Большое спасибо! Мы обязательно придем к Вам Еще!
                                </div>
                                <div className={'reviewsName'}>Виктория Хвесечко</div>
                                <div className={'reviewsDate'}>29.11.2018</div>
                            </div>
                        </div>
                    </div>
                    <div className={mainClassName + ' row even tile'}>
                        <div className={'col-md-9 col-12 flex'}>
                            <div className={'ma'}>
                                <div className={'reviewsText'}>
                                    Стригу уже не первый раз своего малыша шпица Джоника! Мастер очень внимательный и
                                    знающий свое дело! Спасибо Татьяне за её не легкий труд, и любовь к животным!
                                </div>
                                <div className={'reviewsName'}>Виктория Девятень</div>
                                <div className={'reviewsDate'}>14.11.2018</div>
                            </div>
                        </div>
                        <div className={'col-md-3 col-12'}>
                            <img className={'reviewsPhoto'}
                                 src={'../../images/discount/discount1.jpg'}/>
                        </div>
                    </div>
                </div>
            </div>

        );

    }

}

export default Page_Discount;