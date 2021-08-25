import React, { Component } from 'react';
import { getToDos } from '../utils/fetch-utils';

class ToDos extends Component {
    state = {
        toDos:[],
        completed:false
    }
    componentDidMount = async ()=>{
        const toDDos = await getToDos();
        this.setState({toDos: toDDos})
    }
    render() { 
        return (  
            <>
                <h1> S...tuff to get done vato</h1>
                <div className='todos-div'>
                    {this.state.toDos.map((tidi)=>( 
                        <p key={tidi.id}>{tidi.todo}.</p>
                    ))}

                </div>
            </>
        );
    }
}
 
export default ToDos;