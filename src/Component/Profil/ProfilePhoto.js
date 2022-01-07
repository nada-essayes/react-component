import React, { Component } from 'react';
import imageDeProfil from './image.png';
export default class Adress extends Component {
    render() {
        return(
         <div className="ProfilePhoto" style={{ backgroundColor: "rgb(207,232,220)", border: "2px solid rgb(79,185,227)", padding: "10px",
         margin: "10px", borderRadius: "5px"}}>
           <center><img src={imageDeProfil} style={{width:"250px", height:"250px", border:"none", borderRadius:"300px"}}/></center>
            

         </div>
        )
      }
}