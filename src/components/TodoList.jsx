import React,{Component} from 'react';
import classNames from 'classnames';
import './TodoList.css';
import check from './icon/check.svg';
import checkComplete from './icon/check-complete.svg';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
          isActive:false,
          icon:checkComplete,
        };
    }
    handleClick(){
      
        if(this.state.isActive){
          this.setState({
            isActive:false,
            icon:checkComplete
          });
        }
        else{
          this.setState({
            isActive:true,
            icon:check
          });
        }
      }
    render(){
        return (
            <div className="todo-item">
            <img src={this.state.icon} alt="" width={32} height={32}/>
            <p onClick={(e)=>{this.handleClick();
            console.log(this)}} className={classNames('todoItem',{active:this.state.isActive})}>{this.props.title}</p>
            </div>
        );
    }

}

export default TodoList;
