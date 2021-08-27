
import { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header'
import Home from './Home/Home'
import Auth from './Auth/Auth.js';
import ToDos from './ToDos/ToDos.js';
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
      <Header/>
      <section className='main'>
          <Switch>
            <Route exact path='/' component={Home}/>

            <Route 
              path='/signin' 
              render={(routerProps) => {
                return <Auth 
                    setToken={this.setToken}
                    type='signin'
                    {...routerProps}
                />
              }}
            />

            <Route
              path='/signup'
              render={(routerProps) =>{
               return <Auth
                  setToken={this.setToken}
                  type='signup'
                  {...routerProps}
                />
              }}
            />

            <Route
                path="/todos"
                render={(routerProps) =>
                   this.state.token ? (
                        <ToDos {...routerProps} />
                    ) : (
                        <Redirect to="/signin" />
                    )
                }
            />

            <Route
              
            />
          </Switch>
      </section>
    </BrowserRouter>
  );
}
}

export default App;
