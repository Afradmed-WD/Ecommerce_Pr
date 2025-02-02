import { useState } from "react"
import Menu from "./menu"


export default function Detail({cart}){
    return<>
      <div className="me"> {cart.map(item=>
    <div className="align-items-center">
    
        <ul className="list-grpup">
            <li className="list-group-item"><img src={item.image} alt="" className="mb-1" style={{height:'60px',width:'40px'}}/>
        <span width={20}>{item.title}</span>
        <button className="btn btn-dark">-</button>
        <span> {item.quantity} </span>
        <button className="btn btn-dark">+</button>
        <span> {item.price}</span></li>
        </ul>
       
            
        
    </div>)}
    
    </div> 
   
    </>
}