


import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./Partilas/DetailProduct";
import Home from "./Partilas/home";
import Menu from "./Partilas/menu";



function App() {
  const[cart,setcart]=useState([])
    const [donne, setDonne] = useState([]);
    const [payner, setpaynser] = useState(0);
  const[etatcard,setetatcard]=useState(false)
    const [favoris, setfavoris] = useState(0);
    const [serchTerm, setSearchTerm] = useState("");
    const filteredData = donne.filter((item) =>
      item.title.toLowerCase().includes(serchTerm.toLowerCase())
    );
    const Payner = (e) => {
      e.preventDefault();
  
      setpaynser(payner + 1);
    };
  
    const Favoris = (e) => {
      e.preventDefault();
  
      setfavoris(favoris + 1);
    };
  
    const Afficher = (e) => {
      e.preventDefault();
  
      setetatcard(true);
    };
    
   
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/')
        .then((item) => item.json())
  
        .then((item) => setDonne(item));
    }, []);
    
  const addtocart=(item)=>{
setcart([...cart,{...item,quantity:1}])
  }  
  
    // const filteredData = donne.filter(item =>
  
    // item.title.toLowerCase().includes(searchTerm.toLowerCase())
  
    // );
  const[listpayner,setlistpayner]=useState(false)
  const Voir=(e)=>{
e.preventDefault()
    setlistpayner(true)
  }
    return (
      
      <div className="container">
        {/* <Menu
          payner={payner}
          favoris={favoris}
          serchTerm={serchTerm}
          setSearchTerm={setSearchTerm}
          Afficher={Afficher}
          donne={donne}
          filteredData={filteredData}
         
          
        ></Menu> */}
         
         {listpayner?<Detail cart={cart}/>:
        <Home filteredData={filteredData} Voir={Voir} setSearchTerm={setSearchTerm} addtocart={addtocart} Payner={Payner} Favoris={Favoris}/>
}
        

      
         
  
        
        
       </div>
    );
  }
  
  export default App;
  