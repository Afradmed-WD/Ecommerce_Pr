import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm mt-9" >
        <div className="card-header text-center bg-primary text-white">
          <h5>Contact Information</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Contact:</span> 
            <strong>+212 615-129980</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Website:</span> 
            <strong>
              <a href="https://store-emu.ma" target="_blank" rel="noopener noreferrer">
                store-emu.ma
              </a>
            </strong>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Location:</span> 
            <strong>Hay Taddart</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Name:</span> 
            <strong>Mohamed Afrad</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
