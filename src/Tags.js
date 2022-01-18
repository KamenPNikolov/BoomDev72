import React from "react";

export default function Tags(props){

    return (<div className="tags">
       <div className="tag">#{props.tags[0]}</div> 
       <div className="tag">#{props.tags[1]}</div>
       <div className="tag">#{props.tags[2]}</div>
       <div className="tag">#{props.tags[3]}</div>
       </div>);

};