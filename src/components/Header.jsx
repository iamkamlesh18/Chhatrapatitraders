const Header = () => (
  <header style={styles.header}>
    <div>
      <h2>छत्रपती ट्रेडर्स</h2>
      <p style={{ fontSize: "13px", opacity: 0.8 }}>
        बांधकाम साहित्य व हार्डवेअर
      </p>
    </div>

    <a
      href="https://wa.me/917775074617?text=नमस्कार,%20मला%20बांधकाम%20साहित्याबाबत%20माहिती%20हवी%20आहे."
      target="_blank"
      style={styles.whatsapp}
    >
      WhatsApp
    </a>
  </header>
);

const styles = {
  header: {
    padding: "20px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(8px)"
  },
  whatsapp: {
    padding: "10px 22px",
    borderRadius: "999px",
    background: "linear-gradient(135deg,#0f766e,#134e4a)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600
  }
};

export default Header;
