import React from "react";

export  function Card (props){

return (
    <div className={`card text-white bg-info mb-3 d-${props.visible}`} style={{maxWidth: `18rem`}}>
    <div className="card-header text-center">{props.title}</div>
    <div className="card-body">
      <p className="card-text text-left text-monospace">{props.question}</p>
    </div>
  </div>

)
}
