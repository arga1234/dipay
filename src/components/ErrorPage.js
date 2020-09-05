import React, { Component } from 'react';
import Image404 from '../assets/page404.png'; 

class ErrorPage extends Component {
  render() {
    return (
        <div style={{display:"flex", justifyContent:"center", alignContent:"center", marginTop:"50px"}}>
          <img src={Image404} alt="Error"></img>
        </div>
    );
  }
}

export default ErrorPage;