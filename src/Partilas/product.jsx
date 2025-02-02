import { useEffect, useState } from "react"

export default  function Product(){
   const[donne,setdonne]=useState([])
   const[search,setsearch]=useState('')
   const rechercher=donne.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(item=>item.json()).then(item=>setdonne(item))
   })
   return<>
    <div className="container">
{/* <form className="form-group">
<input type="search" className="form-control"  value={search}  onChange={(e)=>setsearch(e.target.value)} placeholder="donner un mot pour rechercher"/>

</form> */}
        <div className="row">
            
                {rechercher.map(item=>
                <div className="col-md-3 mb-4">
                <div className="card h-100">
                    <img src={item.image} alt={item.title} className="card-img-top" style={{width:'auto',height:'200px',objectFit:'contain'}} />
                <div className="card-body d-flex flex-column">
                    <p className="card-text mt-auto">{item.title}</p>
                    <h4 className="card-title mt-auto text text-center">{item.price} DH</h4>
                    <button className="btn btn-outline-success mt-auto mb-1"> Payner </button>
                    <button className="btn btn-danger mt-auto"> Favoris </button>
                </div>
                 </div>
                 </div>
                )}
            </div>
       
    </div>
    </>
}