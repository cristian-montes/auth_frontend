
import { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Home from './Home/Home'
import Auth from './Auth/Auth';
import ToDos from './ToDos/ToDos';
import './App.css';


class App extends Component{
  state={
      token: localStorage.getItem('TOKEN'),
  }

  setToken = (val) => {
    this.setState({ token: val });
  };

  render(){
  return (
    <BrowserRouter>
      <header>
      <NavLink exact to="/"> Home </NavLink>
        <NavLink to="/signin"> Sign In</NavLink>
        <NavLink to="/signup"> Sign Up</NavLink>
      </header>
      <div className='main-div'>
          <Switch>
            <Route exact path='/' component={Home}/>

            <Route 
              path='/signin' 
              render={(routerProps) => {
                <Auth 
                    setToken={this.setToken}
                    type='signin'
                    {...routerProps}
                />
              }}
            />

            <Route
              path='/signup'
              render={(routerProps) =>{
                <Auth
                  setToken={this.setToken}
                  type='signup'
                  {...routerProps}
                />
              }}
            />

            <Route
              path='/todos'
              render={(routerProps) =>
              this.setState.token ? ( 
                <ToDos {...routerProps}/>
              ) : (
                <Redirect to='/singin'/>
              )
              }
            />
          </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
