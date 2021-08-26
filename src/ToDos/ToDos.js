import React, { Component } from 'react';
import { getToDos,createToDo, updateToDo } from '../utils/fetch-utils';

class ToDos extends Component {
    state = {
        toDos:[],
        newTodo:'',
    }

    componentDidMount =  ()=>{
       this.fetchToDos();
    }

    fetchToDos = async () => {
        const toDDos = await getToDos();
        this.setState({toDos: toDDos})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const data = await createToDo({
            todo: this.state.newTodo,
            completed:false,
        });
        this.setState({newTodo:''})
        this.setState((prevState)=>({
                toDos: [...prevState.toDos, data],
        }))
    }    

    handleCompleted = async (tidi)=> {
        tidi.completed = !tidi.completed;
         await updateToDo(tidi)
        this.fetchToDos();
    }

    render() { 
        return (  
            <>
                <h1> S...tuff to get done vato</h1>
                <section className='todos-div'>
                    {this.state.toDos.map((tidi)=>( 
                        <div key={tidi.id}>
                        <input
                            type="checkbox"
                            checked={tidi.completed}
                            onChange={() => this.handleCompleted(tidi)}
                        ></input>
                            <label>{tidi.todo}</label>
                        </div>
                    ))}
                </section>
                <section>
                  <form onSubmit={this.handleSubmit}>
                        <input
                             value={this.state.newTodo}
                             type='text'
                             onChange={(event) => 
                                this.setState({newTodo: event.target.value})
                            }
                        />

                        <button>Add to do</button>
                    </form>
                </section>
                
            </>
        );
    }
}
 
export default ToDos;