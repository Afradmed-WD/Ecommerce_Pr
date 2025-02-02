import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useEffect, useState } from "react";
import Menu from "./menu";
import Detail from "./DetailProduct";

export default function Home({addtocart,Voir}){
  const [donne, setDonne] = useState([]);
  const [serchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((item) => item.json())

      .then((item) => setDonne(item));
  }, []);
  const [payner, setpaynser] = useState(0);
  const [favoris, setfavoris] = useState(0);
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
  const[cart,setcart]=useState([])
const[me,setme]=useState(false)
const Ana=(e)=>{
e.preventDefault()
setme(true)
}
const [etatmenu,setetamenu]=useState(true)
const appliquer=()=>{
  setetamenu(false)
}
  return<>
  {etatmenu? <Menu
          payner={payner}
          favoris={favoris}
          serchTerm={serchTerm}
          setSearchTerm={setSearchTerm}
Ana={Ana}
Voir={Voir}
          donne={donne}
          filteredData={filteredData}
         appliquer={appliquer}
          
        ></Menu>:''}
  {me?<div className="row">
  
        <Detail cart={cart}/>
        {filteredData.map((item) => (
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{ width: "auto", height: "200px", objectFit: "contain" }}
              />
                  
              <div className="card-body">
                <p className="card-title">{item.title}</p>

                <h4 className="text text-center">{item.price} DH</h4>
              </div>

              <div className="card-footer d-flex justify-content-between">
<button className="btn btn-warning d-flex align-items-center" onClick={()=>addtocart(item)} >
  <span className="material-icons me-2">shopping_cart</span>
   <span><button className="btn btn-warning p-0 m-0" onClick={Payner}>Payer</button></span>
</button>

<button className="btn btn-dark d-flex align-items-center" onClick={()=>addtocart(item)}>
  <span className="material-icons me-2">favorite</span>
  <span><button className="btn btn-dark p-0 m-0" onClick={Favoris} style={{borderColor:'transparent'}}>Favoris</button></span>

</button>
</div>

            </div>
          </div>
        ))}
      </div>
 :''} </> 

}