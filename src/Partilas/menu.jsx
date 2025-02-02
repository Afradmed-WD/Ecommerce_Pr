import "bootstrap/dist/css/bootstrap.min.css";
export default function Menu({payner,favoris,serchTerm ,setSearchTerm,Voir,Ana,appliquer}) {
  
  
  return (


   <>
   
    <div className="container d-flex justify-content-between align-items-center p-3 border border-light bg-transparent p-3 rounded">
      <h2>DROY</h2>
      <form className="form-group">
  <div className="input-group">
    <span className="input-group-text">
      <i className="material-icons">search</i>
    </span>
    <input 
      type="search" 
      className="form-control" 
      placeholder="Search" 
      value={serchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: '500px' }} 
    />

  </div></form>
      <nav className="">
        <ul className="d-flex list-unstyled mb-0">
       
          
          <div className="ml-5 d-flex align-items-end justify-content-end">
            
            <li className="">
              <a href="/login"  className="text-decoration-none"><button className="btn btn-outline-dark d-flex align-items-center"><span className="material-icons me-2">login</span>Login</button></a>
            </li>
          </div>
        </ul>
      </nav>
<br /><br />
      
    </div>
    <nav className="mb-5 d-flex justify-content-center align-items-center mt-3">
        <ul className="d-flex list-unstyled mb-0">
          <div className="mx-2">
            <li>
              <select name="" id="" style={{borderColor:'black'}} className="form-select">
                <option selected>All</option>
                <option value="men's clothing" >men's clothing</option>
                <option value="women's clothing" >women's clothing</option>
                <option value="electronics" >electronics</option>
                <option value="jewelery" >jewelery</option>
              </select>
            </li>
          </div>
        <div className="mx-2">
            
            <li>
              <a href="/home" className="text-decoration-none"><button className="btn btn-outline-dark" onClick={Ana}>Home</button></a>
            </li>
          </div>
          <div className="mx-2">
            <li>
              <a href="/contact" className="text-decoration-none"><button className="btn btn-outline-dark" onClick={()=>appliquer()}>Contact</button></a>
            </li>
          </div>
          <div className="mx-2">
            
            <li>
              <a href="/detail" className="text-decoration-none">
               <button className="btn btn-outline-dark d-flex align-items-center" onClick={Voir}>
               <span className="material-icons me-2 text-warning">shopping_cart</span>
               Cart ({payner})
               </button>
                 </a>
            </li>
          </div>
          <div className="mx-2">
            
            <li>
              <a href="/mm" className="text-decoration-none"> 
               <button className="btn btn-outline-dark d-flex align-items-center" onClick={Voir}>
               <span className="material-icons me-2 text-danger">favorite</span>
               Favoris ({favoris})
               </button>
                </a>
            </li>
          </div>
          
        </ul>
      </nav>
    {/* {payer?<div className="container d-flex justify-content-between">
<div className="d-flex" style={{maxWidth:'auto'}}>
  <img style={{height:'300px', width:'300', objectFit:'contain' }} src="data:image/png;base64,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" alt="" />
<span>
  
<h1 className="card-title text-center">EMSI</h1>
  <p className="card-text text-center">donner votre nom</p>

</span>
</div>
   </div>:''} */}
   </>
  );
}
