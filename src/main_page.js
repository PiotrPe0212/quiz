import React from "react";
import {
    Link
  } from 'react-router-dom';
 


 export class MainPage extends React.Component  {
render(){
return(
<div className="d-flex justify-content-center mt-3 mb-3">
<Link  className="text-white ml-1 mr-1" to="/newG"><button className="btn btn-primary " >New Game</button></Link>
<Link className="text-white ml-1 mr-1" to="/addQ"><button className="btn btn-primary " >Add Question</button></Link>
<Link className="text-white ml-1 mr-1" to="/goToL"><button className="btn btn-primary " >Questions List</button></Link>
</div>
);
    
}}