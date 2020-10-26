import React from 'react';
import './App.css';
import util from './util';

function App() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    JSON.stringify(data) === JSON.stringify({}) ? 
      (
        util.domwlogin()
        .then((res) => {
          setData(res.data);
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
      ) :
      (
        console.log("Not Yet")
      )
  })

  return (
    <div className="Main">
      hello
    </div>
  );
}

export default App;