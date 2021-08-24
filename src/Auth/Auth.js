import React, { Component } from 'react';

class Auth extends Component {
    state = {emai:'', password:'' }

    getType =() => {
        return this.props.type === 'signin' ? 'Sign In' : 'Sign Up';
    };

    render() { 
        return ( 
            <>
                <p>{this.getType}</p>
                <form>              
                    <div className='email-div'> 
                        <label htmlFor='email-address'> email </label>
                        <input 
                            type='email' 
                            name='email-address' 
                            onChange={(event) => {
                                this.setState({email: event.target.value})
                            }}
                        />
                    </div>
                    <div className='password-div'> 
                        <label htmlFor='password'> password </label>
                        <input 
                            type='password' 
                            name='password'
                            onChange={(event) => {
                                this.setState({password: event.target.value})
                            }}
                        />
                    </div>
                    <button>{this.getType}</button>
                </form>
            </>
         );
    }
}
 
export default Auth;