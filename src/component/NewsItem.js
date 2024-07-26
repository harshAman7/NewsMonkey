// import React, { Component } from 'react'

// export class NewsItem extends Component {
//     // constructor(){
//     //     super();
//     //     console.log("CONSTRUCTOR OF NEWSLETTER....")
//     // }
//     render() {
//         let { title, description, imgUrl, newsUrl, author, time, source } = this.props;
//         return (
//             <div className="my-4">
//                 <div className="card" style={{ width: "18rem" }}>
//                     <div style={{
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                         position: 'absolute',
//                         right: '0'
//                     }}>
//                     <span className="badge rounded-pill bg-primary" style={{ left: '85%', zIndex: '1' }}>
//                         {source}
//                     </span>
//                 </div>
//                 <img src={imgUrl} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{title}...</h5>
//                     <p className="card-text">{description}...</p>
//                     <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(time).toLocaleDateString()} at {new Date(time).toLocaleTimeString()}</small></p>
//                     <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
//                 </div>
//             </div></div >
//         )
//     }
// }

// export default NewsItem

/* --------------------------------------------------------------FUNCTION---------------------------------------------------------------*/

import React from 'react'

const NewsItem = (props) => {
    // constructor(){
    //     super();
    //     console.log("CONSTRUCTOR OF NEWSLETTER....")
    // }

    let { title, description, imgUrl, newsUrl, author, time, source } = props;
    return (
        <div className="my-4">
            <div className="card" style={{ width: "18rem" }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-primary" style={{ left: '85%', zIndex: '1' }}>
                        {source}
                    </span>
                </div>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(time).toLocaleDateString()} at {new Date(time).toLocaleTimeString()}</small></p>
                    <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div></div >
    )
}

export default NewsItem