// Code CoordinatesButton Component Here
import React from "react"

export default class CoordinatesButton  extends React.Component{
  
  handleClick =(event)=>{

    let arr=[event.clientX,event.clientY]
    return this.props.onReceiveCoordinates(arr)
    
  }
  render(){
    return(
      <button onClick={this.handleClick}></button>
      
      )
  }
}
