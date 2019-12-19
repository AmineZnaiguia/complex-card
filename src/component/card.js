import React, { Component } from 'react'

export default class card extends Component {

    state = {
        number:"",
        date : "",
        name :"",
    };

    handlername = e =>{
        let reg = /[^A-Za-z ]/g;
        if(!e.target.value.match(reg)&& e.target.value.length<21){
        this.setState({
            name : e.target.value.toUpperCase()
        } )
    }
    };
    handlernumber = e =>{
         let regnumb = /^[0-9 ]*$/g;
        
        if(e.target.value.match(regnumb))
        this.setState({
         number : e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
     })   
    };
    handlerdate = e =>{
        let regdate = /[0-9A-Za-z/\s-]*/g;
        if(e.target.value.match(regdate))
        this.setState({
            date : e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/').trim().slice(0, 5)
        
        }) 
    };
    


    render() {
        return (
            <div className='cont'>
            <div className="bg-card">
                <div className='contcard'>
                   <p>{this.state.number.padEnd(19,'*')}</p> 
                   <p>{this.state.date.padEnd((5),'*')}</p> 
                   <p>{this.state.name}</p>
                </div>
            </div>
            <div >
            <input type="text" onChange={this.handlernumber} value={this.state.number} maxLength="19"/>
            <input type="text" onChange={this.handlerdate} value={this.state.date} maxLength="5"/>
            <input type="text" onChange={this.handlername} value={this.state.name}/>
            </div>
            </div>
        )
    }
}
