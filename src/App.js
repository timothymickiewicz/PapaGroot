import React from 'react';
import './App.css';
import util from './util';

let parseLoginToken = (str) => {
  const token = str.split(' ');
  const extractedToken = token[57]
  .match(/(?:"[^"]*"|^[^"]*$)/)[0]
  .replace(/"/g, "");
  return extractedToken;
}

function App() {
  const [csrfToken, setCsrfToken] = React.useState('');

  React.useEffect(() => {
    util.mwlogin((res) => {
      console.log(res);
    }).then((res) => {
      setCsrfToken(parseLoginToken(res.data));
      console.log(parseLoginToken(res.data));
      // util.domwlogin((res) => {
      //   console.log(res);
      // }).catch((err) => {
      //   console.log(err);
      // })
    });
  }, [])
  return (
    <div className="Main">
      hello
    </div>
  );
}

export default App;
