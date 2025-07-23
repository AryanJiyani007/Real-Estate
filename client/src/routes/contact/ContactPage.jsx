import "../listPage/listPage.scss";

function ContactPage() {
  return (
    <div style={{ background: "#fffbe6", minHeight: "100vh", fontFamily: "Montserrat, sans-serif" }}>
      {/* Hero Section */}
      <div style={{ padding: "48px 0 24px 0", textAlign: "center", borderBottom: "2px solid #fece51" }}>
        <h1 style={{ fontSize: 48, letterSpacing: 2, color: "#222", marginBottom: 8, fontWeight: 700 }}>CONTACT US</h1>
        <div style={{ color: "#bfa13a", fontSize: 20, letterSpacing: 2, fontWeight: 600 }}>
          We are here to help you with your real estate journey
        </div>
      </div>
      {/* Contact Info Only */}
      <div style={{ maxWidth: 800, margin: "40px auto 0 auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", padding: 32 }}>
        <h2 style={{ color: "#bfa13a", fontSize: 24, fontWeight: 700, marginBottom: 16, letterSpacing: 1 }}>Contact Information</h2>
        <div style={{ color: "#444", fontSize: 16, marginBottom: 12 }}><b>Email:</b> support@estate.com</div>
        <div style={{ color: "#444", fontSize: 16, marginBottom: 12 }}><b>Phone:</b> +91 234 567 8902</div>
        <div style={{ color: "#444", fontSize: 16, marginBottom: 12 }}><b>Address:</b> Nirma University, Ahmedabad, Gujarat, India</div>
      </div>
      {/* Footer */}
      <div style={{ background: "#bfa13a", color: "#fff", textAlign: "center", padding: "24px 0", marginTop: 56, fontWeight: 600, letterSpacing: 1 }}>
        &copy; {new Date().getFullYear()} Estate. All rights reserved.
      </div>
    </div>
  );
}

export default ContactPage;