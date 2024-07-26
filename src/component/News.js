// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinning from './Spinning'
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component'

// export class News extends Component {
//     static defaultProps = {
//         country: "in",
//         pageSize: 12,
//         category: "general"
//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string
//     }

//     constructor(props) {
//         super(props);
//         // console.log("CONSTRUCTOR OF NEWS....")
//         this.state = {
//             articles: [],
//             loading: true,
//             page: 1,
//             totalResults: 0
//         }
//     }
//     async componentDidMount(){
//         this.updateNews();
//     }
//     async updateNews() {
//         this.props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true });
//         let data = await fetch(url);
//         this.props.setProgress(30);
//         let parsedData = await data.json()
//         this.props.setProgress(70);
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false
//         })
//         this.props.setProgress(100);
//     }

//     handlePrevClick = async () => {
//         this.setState({ page: this.state.page - 1 });
//         this.updateNews();
//     }
//     handleNextClick = async () => {
//         this.setState({ page: this.state.page + 1 });
//         this.updateNews();
//     }
//     fetchMoreData = async () => {
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         this.setState({ page: this.state.page + 1 })
//         this.setState({
//             articles: this.state.articles.concat(parsedData.articles),
//             totalResults: parsedData.totalResults,
//             loading: false,
//         })
//     };

//     render() {
//         return (
//             <div className='container my-3'>
//                 <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top Headlines</h1>
//                 {this.state.loading && <Spinning />}
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     // loader={<Spinning />} // uncomment it
//                     loader={this.state.loading && <Spinning />}
//                 >
//                     <div className='container'>
//                         <div className="row">
//                             {this.state.articles.map((element) => {
//                                 return (
//                                     <div className="col-md-4" key={element.url}>
//                                         <NewsItem title={!element.title ? "" : element.title.slice(0, 40)} description={!element.description ? "" : element.description.slice(0, 60)} imgUrl={!element.urlToImage?"https://www.bing.com/images/search?view=detailV2&ccid=BOzmBiDn&id=91CC3128956083D1DD5BD169F4C44F1D0AD56CFD&thid=OIP.BOzmBiDnjYTCSJakYDJgRAHaEK&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2fH12s7EKYiao%2fmaxresdefault.jpg&exph=720&expw=1280&q=news+image+in+1200*65&simid=608004710727886673&FORM=IRPRST&ck=071145E5CB9EB4D9F9A9E946C1F91527&selectedIndex=42&itb=0":element.url} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
//                                     </div>)
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll>
//                 {/* <div className="container d-flex justify-content-evenly">
//                     <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} class="btn btn-outline-dark">&larr; Previos</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} class="btn btn-outline-dark">Next &rarr;</button>
//                 </div> */}
//             </div>
//         )
//     }
// }

// export default News

/* --------------------------------------------------------------FUNCTION---------------------------------------------------------------*/

import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinning from './Spinning'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    {/*WORKS AS componentDidMount IN FUNCTION BASED COMPONENT */}
    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setPage(page + 1);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        // setloading(false)
    }

    return (
        <div className='container my-3'>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top Headlines</h1>
            {loading && <Spinning />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                // loader={<Spinning />} // uncomment it
                loader={loading && <Spinning />}
            >
                <div className='container'>
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem title={!element.title ? "" : element.title.slice(0, 40)} description={!element.description ? "" : element.description.slice(0, 60)} imgUrl={!element.urlToImage?`https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg`:element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                                </div>)
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}
News.defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News