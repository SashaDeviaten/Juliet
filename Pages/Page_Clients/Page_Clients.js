import React, {PureComponent} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Page_Clients.scss';

const images = [
    '../../images/clients/42R0GgaLMzg.jpg',
    '../../images/clients/AlKUpVGTDxk.jpg',
    '../../images/clients/KMFUsNVNZeA.jpg',
    '../../images/clients/qVs-yISyCUM.jpg',
    '../../images/clients/sTZRUCxkCTk.jpg',
    '../../images/clients/taAGOyJTF6M.jpg',
    '../../images/clients/x0n8exq0mDE.jpg',
    '../../images/clients/YdQV2JIIFMs.jpg',
    '../../images/clients/FuyY7H4bLDk.jpg',
    '../../images/clients/ph9LXunCx54.jpg',
    '../../images/clients/WlEPvvP-EhA.jpg',
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
                <img src={img}
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