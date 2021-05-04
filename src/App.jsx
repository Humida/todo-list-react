import React,{Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import checkAll from './components/icon/check-all.svg'

class App extends Component {
  constructor(props){
    super(props);
    this.state= 
      {todoItem:[
        {act:'Thức dậy',isActive:false},
        {act:'Đi ngủ',isActive:false},
        {act:'Đi ăn',isActive:false}
    ]};
    this.addTodo=this.addTodo.bind(this);
  } 
  addTodo(e){  
    if(e.keyCode===13){
      let contentTodo=e.target.value.trim();
      if(contentTodo){
        this.setState(
          {
            todoItem:[
              ...this.state.todoItem,{act:contentTodo,isActive:false}
            ]
          }
        )
      }
      e.target.value='';
    }
    else{
      return;
    }
  }
  render() {
    return(
      <div className="App">
        <div className="addTodo-item">
          <img src={checkAll} alt="" height={32} width={32}/>
          <input type="text" onKeyDown={this.addTodo}/>
        </div>
      <div className="app-container">
      {
        this.state.todoItem.map((item)=><TodoList keys={item.toString()} title={item.act}/>)
      }
      </div>
    </div>
    )
  }
}
export default App;
