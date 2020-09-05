import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Home from './components/Blog/Home'
import Login from './components/Login'
import Register from './components/Register'
import  ErrorPage from './components/ErrorPage'


class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/404' component={ErrorPage} />
            <Redirect from='*' to='/404' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
