import React, { Component } from 'react';
import { getToken} from '../utils/fetch-utils.js';

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
        this.props.setToken(token);
        this.props.history.push('/todos');
    }

    render() { 
        return ( 
            <>
                <p>{this.getType()}</p>
                <h1> HOLLAAAAAA</h1>
                <form onSubmit={this.handleSubmit}>              
                    <div className='form-control'> 
                        <label> email </label>
                        <input 
                            type='email' 
                            onChange={(event) => 
                                this.setState({email: event.target.value})
                            }
                        />
                    </div>
                    <div className='form-control'> 
                        <label> password </label>
                        <input 
                            type='password' 
                            onChange={(event) => 
                                this.setState({password: event.target.value})
                            }
                        />
                    </div>
                    <button>{this.getType()}</button>
                </form>
            </>
         );
    }
}
 
export default Auth;