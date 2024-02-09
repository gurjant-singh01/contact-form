function Contact() {
  return (
    <div className="contact">
      <div className="contact-info">
        <h1
          style={{ textAlign: "center", color: "#207178", paddingTop: "1rem" }}
        >
          Get In Touch
        </h1>
      </div>

      <div
        className="contact-form"
        style={{
          display: "flex",
          marginTop: "5rem",
          paddingInline: "15rem",
          gap: "20rem",
          justifyContent: "center",
        }}
      >
        <div className="form">
          <h2 className="form-title" style={{ color: "#207178" }}>
            Send Message
          </h2>
          <label className="label">
            Name
            <input type="text" placeholder="Your Name" className="input" />
          </label>
          <label className="label">
            Email
            <input type="email" placeholder="Your Email" className="input" />
          </label>
          <label className="label">
            Message
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              style={{
                border: "1px solid #D3DFE8",
                borderRadius: "28px",
                paddingInline: "1rem",
                paddingTop: "1rem",
                width: "600px",
                marginTop: "1rem",
              }}
            ></textarea>
          </label>

          <img
            src="../assets/Frame18.svg"
            style={{
              marginTop: "1rem",
              width: "212px",
              height: "50px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "flex-start",
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
