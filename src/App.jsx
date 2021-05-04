import React,{Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import checkAll from './components/icon/check-all.svg'




class App extends Component {
  constructor(props){
    super(props);
    this.todoData=[{act:'thuc day'},{act:'di ngu'},{act:'di an'}];
    this.isActive=false;
    
  }
 
  render() {
    return(
      <div className="App">
        <div className="addTodo-item">
          <img src={checkAll} alt="" height={32} width={32}/>
          <input type="text"/>
        </div>
      {
        this.todoData.map((item)=><TodoList keys={item.toString()} title={item.act}/>)
      }
      </div>
    )
  }
}

export default App;
