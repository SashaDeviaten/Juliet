import React from 'react';
import './Page_Master.scss'


class Page_Master extends React.PureComponent {

    mainClassName = 'Page_Master';

  render() {
      const {mainClassName} = this;

    return (


        <div className={mainClassName}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={mainClassName + '__name col-12'}>
                        Девятень Татьяна
                    </div>
                    <div className={'master__text col-9'}>
                        "Грумингом увлеклась 3 года назад. Захотелось аккуратно и красиво подстричь своего питомца-лохматика. Когда поняла, что это занятие мне по душе - прошла обучение и теперь занимаюсь любимым делои профессионально!
                    </div>
                        <div className={'master__photo col-3'}>
                            <img src={'../../images/master1.png'}/>
                        </div>
                </div>
            </div>
        </div>

    );

  }

}

export default Page_Master;
