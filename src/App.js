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
    csrfToken === '' ? (
      util.mwlogin()
      .then((res1) => {
        setCsrfToken(parseLoginToken(res1.data));
      }).catch((err1) => {
        console.log(err1);
      })
    ) : (
      util.domwlogin({token: csrfToken})
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    )
  })

  return (
    <div className="Main">
      hello
    </div>
  );
}

export default App;