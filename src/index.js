import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';



// Code to use map in React :

  // const waterBody = ['lake','ocean','river'];

  // function App( { lakes }){
  //   return (
  //     <ul> {lakes.map(lake => (
  //       <li> { lake }</li>
  //   ))} </ul>
  //   )
  // }

  // ReactDOM.render(
  //   <App lakes = {waterBody} />,
  //   document.getElementById('root')
  // );

// close 


const details = [
  { name : "sourav" , lname : "dwivedi" , loc : "GGN"},
  { name : "Ajay" , lname : "Gulati" , loc : "Nai Basti"},
  { name : "Manan" , lname : "Arora" , loc : "Ram Nagar"},
];

function App2( { details }) {
  return (
    <div> 
      {details.map(detail => (
        <div>  
          <h2> { detail.name }</h2>
          <p> {detail.lname} </p>
        </div>
      ) )}

    </div>
  )
}

ReactDOM.render (
  <App2 details = {details}> </App2>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
