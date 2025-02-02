import 'bootstrap/dist/css/bootstrap.min.css';

export default function SIGN_UP() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-90">
        <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
          <h3 className="text-center mb-4 text-primary">Register</h3>
          <form className="form-group">
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">First Name</label>
              <input
                type="text"
                id="prenom"
                placeholder="Enter your first name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Last Name</label>
              <input
                type="text"
                id="nom"
                placeholder="Enter your last name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              SIGN UP
            </button>
            <div className="row">
                <div className="text-center ">
                    <a className='text-decoration-none' href="/login">Log In</a>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
