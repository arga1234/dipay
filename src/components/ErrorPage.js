import React, { Component } from 'react';
import Image404 from '../../public/page404'; 

class ErrorPage extends Component {
  render() {
    return (
        <div>
          <img src={Image404}></img>
        </div>
    );
  }
}

export default ErrorPage;