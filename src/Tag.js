import React from "react";

export default function Tag(props){

    return (<div class= "tags">
       <div class = "tag">#{props.tags[0]||"default text"}</div> 
       <div class = "tag">#{props.tags[1]||"default text"}</div>
       <div class = "tag">#{props.tags[2]||"default text"}</div>
       <div class = "tag">#{props.tags[3]||"default text"}</div>
       </div>);

};