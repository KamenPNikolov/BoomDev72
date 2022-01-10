import React from "react";

export default class Tag extends React.Component{
constructor(props){
    super(props);
   this.tags =  props.tags;
}
render(){
    return <div class = "tags">
       <div class = "tag">#{this.tags[0]}</div> 
       <div class = "tag">#{this.tags[1]}</div>
       <div class = "tag">#{this.tags[2]}</div>
       <div class = "tag">#{this.tags[3]}</div>
    </div>
}

}