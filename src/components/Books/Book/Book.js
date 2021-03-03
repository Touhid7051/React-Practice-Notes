import React, { Component } from 'react'

class Book extends Component {
    
    state={
        isEditable: false,
    };
    changeKeyHandler=(event)=>{
        if (event.key==='Enter'){
            this.setState({
                isEditable:false
            })
        }
    }
    render() {
        let output=this.state.isEditable ? 
        <input
            onChange={(e)=>this.props.changeHandler(e.target.value,this.props.book.id)} 
            onKeyPress={this.changeKeyHandler}
            type='text'  
            placeholder='Enter name' 
            value={this.props.book.name}/>
        :<p>
            {this.props.book.name}
        </p>
        
        return (
            
                <li className='list-group-item d-flex'>
                    {output}
                    <span className='ms-auto'>${this.props.book.price}</span>
                    <div className="mx-4">
                        <span 
                            style={{cursor:'pointer'}}
                            className="mx-2"
                            onClick={()=>this.setState({isEditable:true})}>
                                <i className="fas fa-edit"></i>
                        </span>
                        <span 
                            style={{cursor:'pointer'}} 
                            onClick={()=>this.props.deleteHandler(this.props.book.id)}>
                            <i className="fas fa-trash"></i>
                        </span>
                    </div>
                </li>
            
        )
    }
}

export default Book;