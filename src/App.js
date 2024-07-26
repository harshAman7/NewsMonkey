// import logo from './logo.svg';
// import './App.css';

// import React, { Component } from 'react'
// import { NavBar } from './component/NavBar';
// import News from './component/News';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes,
//   // Link
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   state={
//     progress:0
//   }
//   setProgress = (progress) =>{
//     this.setState({progress:progress})
//   }
//   pageSize = 15;
//   apiKey = process.env.REACT_APP_NEWS_API

//   render() {
//     return (
//       <div>
//         {/* console.log(this.apiKey) */}
//         <Router>

//           <NavBar />
//           <LoadingBar color='#f11946'
//             height={3}
//             progress={this.state.progress}
//             // onLoaderFinished={() => setProgress(0)}
//           />
//           <Routes>
//             <Route exact path="/" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
//             <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />} />
//             <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
//             <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />} />
//             <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />} />
//             <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
//             <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
//           </Routes>
//           {/* <News setProgress={this.setProgress} key="" pageSize={9} country="in" category="general" /> */}
//           {/* <News pageSize={9} country="in" category="technology"/> */}
//         </Router>
//       </div>
//     )
//   }
// }

/* --------------------------------------------------------------FUNCTION---------------------------------------------------------------*/

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import  NavBar  from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0)
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <div>
      {/* console.log(apiKey) */}
      <Router>

        <NavBar />
        <LoadingBar color='#f11946'
          height={3}
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
        {/* <News setProgress={setProgress} key="" pageSize={9} country="in" category="general" /> */}
        {/* <News pageSize={9} country="in" category="technology"/> */}
      </Router>
    </div>
  )
}

export default App