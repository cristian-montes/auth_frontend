import React, { Component } from 'react';
import './Home.css'


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='home-div'>
                <p>Welcome</p>
                <p>Signin to keep being Successful</p>
                <p>OR</p>
                <p>signup to being to be</p>
            </div>
         );
    }
}
 
export default Home;