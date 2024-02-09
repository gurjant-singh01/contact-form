function Footer() {
  return (
    <div className="footer">
      <div className="logo-div">
        <p className="logo-text">
          © Copyright 2023 Executor Exchange, All rights reserved.
          <br />
          Email us at:{" "}
          <span style={{ color: "#207178" }}>XUj5c@example.com</span>
        </p>
      </div>
      <div className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li className="quick-link">Home</li>
          <li className="quick-link">Blog</li>
        </ul>
      </div>
      <div className="support-links">
        <h2>Support Links</h2>
        <ul>
          <li className="quick-link">Home</li>
          <li className="quick-link"> Customers</li>
        </ul>
      </div>
      <div className="social-links">
        <h2>Social Links</h2>
        <ul style={{ display: "flex", gap: "1rem" }}>
          <li className="quick-link">
            <img src="../assets/Frame-9.svg" alt="" />
          </li>
          <li className="quick-link">
            <img src="../assets/Frame-10.svg" alt="" />
          </li>
          <li className="quick-link">
            <img src="../assets/Frame-11.svg" alt="" />
          </li>
          <li className="quick-link">
            <img src="../assets/Frame-12.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
