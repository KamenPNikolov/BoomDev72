import React from "react";

export default class Tag extends React.Component{
render(){
    return (<div class= "tags">
       <div class = "tag">#{this.props.tags[0]||"default text"}</div> 
       <div class = "tag">#{this.props.tags[1]||"default text"}</div>
       <div class = "tag">#{this.props.tags[2]||"default text"}</div>
       <div class = "tag">#{this.props.tags[3]||"default text"}</div>
       </div>);
}

};