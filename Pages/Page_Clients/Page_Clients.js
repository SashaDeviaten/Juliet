// import React from 'react';
// import './Page_Clients.scss'
//
//
// class Page_Clients extends React.PureComponent {
//
//     mainClassName = 'Page_Clients';
//
//   render() {
//       const {mainClassName} = this;
//
//     return (
//
//
//         <div className={mainClassName}>
//
//         </div>
//
//     );
//
//   }
//
// }
//
// export default Page_Clients;


import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

class App1 extends Component {
    render() {
        return (
            <div className="App">

                <ReactFancyBox
                    thumbnail="https://loremflickr.com/320/240"
                    image="https://www.w3schools.com/howto/img_forest.jpg"/>
            </div>
        );
    }
}

export default App1;
