import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-99 mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form className="form-group">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="row">
            <div className="col-md-6"><a href="#" className="text-decoration-none">
            Forgot your password?
          </a>
        </div>
            <div className="col-md-6"><a href="/sign" className="text-decoration-none">
            Sign Up          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
