import "../listPage/listPage.scss";

const agents = [
  {
    name: "Aryan Jiyani",
    email: "aryan@gmail.com",
    phone: "+91 234 567 8902",
    avatar: "/noavatar.jpg",
  },
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 234 567 8903",
    avatar: "/noavatar.jpg",
  },
  {
    name: "Rushi Patel",
    email: "rushi@example.com",
    phone: "+91 234 567 8904",
    avatar: "/noavatar.jpg",
  },
];

function AgentsPage() {
  return (
    <div style={{ background: "#fffbe6", minHeight: "100vh", fontFamily: "Montserrat, sans-serif" }}>
      {/* Hero Section */}
      <div style={{ padding: "48px 0 24px 0", textAlign: "center", borderBottom: "2px solid #fece51" }}>
        <h1 style={{ fontSize: 48, letterSpacing: 2, color: "#222", marginBottom: 8, fontWeight: 700 }}>OUR AGENTS</h1>
        <div style={{ color: "#bfa13a", fontSize: 20, letterSpacing: 2, fontWeight: 600 }}>
          Meet the professionals behind Estate
        </div>
      </div>
      {/* Agents Grid */}
      <div style={{ maxWidth: 1000, margin: "56px auto 0 auto", display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "center" }}>
        {agents.map((agent, idx) => (
          <div key={idx} style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", padding: 32, minWidth: 260, maxWidth: 320, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <img src={agent.avatar} alt={agent.name} style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", border: "4px solid #fece51" }} />
            <div style={{ fontWeight: 700, fontSize: 22, color: "#bfa13a" }}>{agent.name}</div>
            <div style={{ color: "#888", fontSize: 16 }}>{agent.email}</div>
            <div style={{ color: "#888", fontSize: 16 }}>{agent.phone}</div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div style={{ background: "#bfa13a", color: "#fff", textAlign: "center", padding: "24px 0", marginTop: 56, fontWeight: 600, letterSpacing: 1 }}>
        &copy; {new Date().getFullYear()} Estate. All rights reserved.
      </div>
    </div>
  );
}

export default AgentsPage; 