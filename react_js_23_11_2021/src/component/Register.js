import React, { Component } from 'react'
import "./Register.css" 

export default class Register extends Component {

    state ={firstName:"", lastName :"", Email:"" , Password:"" , inputConfirmPassword:"",checkbox:"" }
    
    getValue = (e)=>{
        let inputValue = {}
        inputValue[e.target.name]=e.target.value
        this.setState(inputValue)
    }
      sendForm= (e)=>{
        e.preventDefault()
          if(this.state.Password !== this.state.inputConfirmPassword){
                console.log("try again please");
          }

          else{
            console.log(this.state.firstName,this.state.lastName,this.state.Email,this.state.Password,this.state.inputConfirmPassword
                ,this.state.checkbox);
          }
            
      }  

    render() {

        
        return (
            <div>
                <form onSubmit={this.sendForm} className="form">
                <div className="LineContainer">
                    <div className="divLine"></div>
                    <div className="divLineTwo"></div>
                    <div className="divLineColumn"></div>
                    </div>    
                    <h1>Register</h1>
             <p>create your account it free and only take a few minute</p>
            <input onChange={this.getValue} className="inputName" name="firstName" type="text" placeholder="first Name" required={true} />
            <input onChange={this.getValue} className="inputLastName" name="lastName" type="text" placeholder="last Name" required={true}  /> <br/>
            <input onChange={this.getValue} className="inputEmail" name="Email" type="text" placeholder="Email" required={true}  /> <br/>
            <input onChange={this.getValue} className="inputPassword" name="Password" type="text" placeholder="Password" required={true}  /> <br/>
            <input onChange={this.getValue} className="inputConfirmPassword" name="inputConfirmPassword" type="text" placeholder="confirm password" required={true}  /> <br/>
            <input onChange={this.getValue} className="inputName" name="checkbox" type="checkbox" required={true}  /> i accept the <span style={{color:"green"}}>terms of use</span> &<span style={{color:"green"}}> privacy policy</span><br/>
          
            <button  type="submit" className="btn" >Register Now</button><br/>

                </form>
                
            </div>
        )
    }
}
