import React, {PureComponent} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Page_Clients.scss';

const images = [
    '42R0GgaLMzg.jpg',
    'AlKUpVGTDxk.jpg',
    'KMFUsNVNZeA.jpg',
    'qVs-yISyCUM.jpg',
    'sTZRUCxkCTk.jpg',
    'taAGOyJTF6M.jpg',
    'x0n8exq0mDE.jpg',
    'YdQV2JIIFMs.jpg',
    'FuyY7H4bLDk.jpg',
    '5zVMi8_U4BI.jpg',
    'CtbGNPc7bOQ.jpg',
    'DNukOew8Ga8.jpg',
    'LyvoG0hsfXs.jpg',
    'poaazStHgCk.jpg',
    'YrVhG2YRUqA.jpg',
];


class Page_Clients extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    mainClassName = 'Page_Clients';

    buildImages = () => {
        return images.map((img, i) => {
            return <div className={'col-12 col-md-6 col-xl-4 imgWrap'}
                        key={img}>
                <img src={`../../images/clients/${img}`}
                     className={'image'}
                     data-index={i}
                     onClick={this.openLightbox}/>
            </div>
        })
    };

    openLightbox = (e) => this.setState({isOpen: true, photoIndex: e.currentTarget.dataset.index});


  render() {
      const {mainClassName} = this;

      const { photoIndex, isOpen } = this.state;

    return (


        <div className={mainClassName}>
            <div className={'container'}>

                    <div className={'imagesWrap'}>
                        <div className={'row'}>
                            {this.buildImages()}
                        </div>
                    </div>

                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({isOpen: false})}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                            }
                        />
                    )}
                </div>
        </div>

    );

  }

}

export default Page_Clients;