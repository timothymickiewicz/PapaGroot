import React from 'react';
import './App.css';
import util from './util';
import $ from 'jquery';
import Banner from './components/Banner';
import YouTube from './components/YouTube/YouTube';
import Stats from './components/CodStats/Stats';
import Nav from './components/Nav/Nav';

function App() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    let setCols = (howMany) => {
      for (let i=1;i<howMany;i++) {
          $(`.col-${i}`).css(`width`, `calc(100% * (${i}/${howMany}))`).css(`box-sizing`, `border-box`).css(`float`, `left`).css(`padding`, `1vw`);
      }
    };
    setCols(12);

// Commented out to focus on front-end dev for now - TM

  //   JSON.stringify(data) === JSON.stringify({}) ? 
  //     (
  //       util.domwlogin()
  //       .then((res) => {
  //         setData(res.data);
  //         console.log(res);
  //       }).catch((err) => {
  //         console.log(err);
  //       })
  //     ) :
  //     (
  //       console.log("Not Yet")
  //     )
  })

  return (
    <div className="Main">
      <Nav />
      <Banner />
      <Stats data={data}/>
      <YouTube />
    </div>
  );
}

export default App;