import "../styles/index.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h1>Auth</h1>
      </div>
      <div
        className="links"
        style={{
          gap: "2rem",
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <a className="link" href="/">
          Home
        </a>
        <a className="link" href="/about">
          About
        </a>
        <a className="link" href="/contact">
          Contact
        </a>
      </div>
      <div className="div">
        <a className="link" href="/login">
          Login/SignUp
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
