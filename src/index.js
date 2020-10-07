import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let details = {
  name : "sourav",
  lname : "dwivedi",
  company : "AUW",
}

function Hello(props) {
 return ( 
   <div> 
    <h1> Welcome to {props.team}</h1>
 <p> Lets build something {props.message}</p>
   </div>
 )
}

ReactDOM.render(

  <Hello team="Gurgoan" message="Great"/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
