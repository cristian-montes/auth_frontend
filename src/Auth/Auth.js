import React, { Component } from 'react';
import { getToken} from '../utils/fetch-utils.js';
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
class Auth extends Component {
    state = {emai:'', password:'' };

    getType = () => {
        return this.props.type === 'signin' ? 'Sign In' : 'Sign Up';
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password
            },
            this.props.type
        )
        console.log(this.state.email);
        this.props.setToken(token);
        this.props.history.push('/todos');
    }

    render() { 
        return ( 
            <>
                <Typography variant='h3' >{this.getType()}</Typography >
                
                <form onSubmit={this.handleSubmit}>              
                    <div className='form-control'> 
                        <TextField
                            label="Email"
                            type="email"
                            autoComplete="current-email"
                            onChange={(event) => 
                                this.setState({email: event.target.value})
                            }
                        />


                        {/* <label> email </label>
                        <input 
                            type='email' 
                            onChange={(event) => 
                                this.setState({email: event.target.value})
                            }
                        /> */}
                    </div>
                    <div className='form-control'> 
                    <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(event) => 
                                this.setState({password: event.target.value})
                            }
                        />
                    

                        {/* <label> password </label>
                        <input 
                            type='password' 
                            onChange={(event) => 
                                this.setState({password: event.target.value})
                            }
                        /> */}
                    </div>
                    <Button color="primary" variant='outlined' type='submit'>{this.getType()}</Button>
                </form>
            </>
         );
    }
}
 
export default Auth;