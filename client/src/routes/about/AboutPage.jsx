import "../listPage/listPage.scss";

function AboutPage() {
  return (
    <div style={{ background: "#fffbe6", minHeight: "100vh", fontFamily: "Montserrat, sans-serif" }}>
      {/* Hero Section */}
      <div style={{ padding: "48px 0 24px 0", textAlign: "center", borderBottom: "2px solid #fece51" }}>
        <h1 style={{ fontSize: 48, letterSpacing: 2, color: "#222", marginBottom: 8, fontWeight: 700 }}>ABOUT ESTATE</h1>
        <div style={{ color: "#bfa13a", fontSize: 20, letterSpacing: 2, fontWeight: 600 }}>
          Your Connection to the Modern Real Estate World
        </div>
      </div>

      {/* Mission Section */}
      <div style={{ maxWidth: 800, margin: "40px auto 0 auto", textAlign: "center" }}>
        <h2 style={{ color: "#bfa13a", fontSize: 28, fontWeight: 700, marginBottom: 16, letterSpacing: 1 }}>Our Mission</h2>
        <p style={{ color: "#444", fontSize: 18, lineHeight: 1.7 }}>
          Estate is dedicated to connecting property seekers with their dream homes and empowering agents and owners to reach the right audience. We value transparency, security, and a seamless user experience, making real estate simple and accessible for everyone.
        </p>
      </div>

      {/* Team/Founder Section */}
      <div style={{ maxWidth: 800, margin: "56px auto 0 auto", display: "flex", alignItems: "center", gap: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", padding: 32 }}>
        <img src="/noavatar.jpg" alt="Founder" style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "4px solid #fece51" }} />
        <div style={{ textAlign: "left" }}>
          <h3 style={{ color: "#bfa13a", fontWeight: 700, fontSize: 22, marginBottom: 4 }}>Aryan Jiyani</h3>
          <div style={{ color: "#888", fontSize: 16, marginBottom: 8 }}>Founder & Creative Director</div>
          <p style={{ color: "#444", fontSize: 16 }}>
            Aryan leads Estate with a vision for innovation and user-centric design. With years of experience in real estate and technology, Aryan ensures Estate remains at the forefront of the industry.
          </p>
        </div>
      </div>

      {/* Services/Features Grid */}
      <div style={{ background: "#fece51", margin: "56px 0 0 0", padding: "40px 0" }}>
        <h2 style={{ textAlign: "center", color: "#222", fontWeight: 700, fontSize: 28, letterSpacing: 1, marginBottom: 32 }}>OUR SERVICES</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ minWidth: 180, textAlign: "center" }}>
            <div style={{ fontWeight: 700, color: "#bfa13a", fontSize: 18, marginBottom: 8 }}>Buy</div>
            <div style={{ color: "#444", fontSize: 16 }}>Find your dream home from our curated listings.</div>
          </div>
          <div style={{ minWidth: 180, textAlign: "center" }}>
            <div style={{ fontWeight: 700, color: "#bfa13a", fontSize: 18, marginBottom: 8 }}>Sell</div>
            <div style={{ color: "#444", fontSize: 16 }}>List your property and reach thousands of buyers.</div>
          </div>
          <div style={{ minWidth: 180, textAlign: "center" }}>
            <div style={{ fontWeight: 700, color: "#bfa13a", fontSize: 18, marginBottom: 8 }}>Rent</div>
            <div style={{ color: "#444", fontSize: 16 }}>Browse and rent properties with ease and security.</div>
          </div>
          <div style={{ minWidth: 180, textAlign: "center" }}>
            <div style={{ fontWeight: 700, color: "#bfa13a", fontSize: 18, marginBottom: 8 }}>Consulting</div>
            <div style={{ color: "#444", fontSize: 16 }}>Get expert advice for your real estate journey.</div>
          </div>
        </div>
      </div>

      {/* Clients Section (optional) */}
      <div style={{ maxWidth: 900, margin: "56px auto 0 auto", textAlign: "center" }}>
        <h2 style={{ color: "#bfa13a", fontWeight: 700, fontSize: 24, letterSpacing: 1, marginBottom: 24 }}>OUR CLIENTS</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          <img src="/logo.png" alt="Client 1" style={{ height: 40, opacity: 0.7 }} />
          <img src="/logo.png" alt="Client 2" style={{ height: 40, opacity: 0.7 }} />
          <img src="/logo.png" alt="Client 3" style={{ height: 40, opacity: 0.7 }} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#bfa13a", color: "#fff", textAlign: "center", padding: "24px 0", marginTop: 56, fontWeight: 600, letterSpacing: 1 }}>
        &copy; {new Date().getFullYear()} Estate. All rights reserved.
      </div>
    </div>
  );
}

export default AboutPage; 