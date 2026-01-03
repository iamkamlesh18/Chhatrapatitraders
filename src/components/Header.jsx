const Header = () => {
  return (
    <header style={styles.header}>
      <div>
        <h2 style={styles.logo}>छत्रपती ट्रेडर्स</h2>
        <p style={styles.tag}>Construction Material Supplier</p>
      </div>
      <div style={styles.actions}>
        <a href="tel:+917775074617" style={styles.call}>📞 Call</a>
        <a
          href="https://wa.me/917775074617?text=Best%20rate%20साठी%20माहिती%20हवी%20आहे"
          target="_blank"
          style={styles.whatsapp}
        >
          💬 WhatsApp
        </a>
      </div>
    </header>
  );
};

const styles = {
  header: { padding: "12px 16px", background: "#1E88E5", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { margin: 0 },
  tag: { fontSize: "12px" },
  actions: { display: "flex", gap: "10px" },
  call: { background: "#fff", color: "#1E88E5", padding: "6px 10px", borderRadius: "6px", textDecoration: "none", fontWeight: "bold" },
  whatsapp: { background: "#25D366", color: "#fff", padding: "6px 10px", borderRadius: "6px", textDecoration: "none", fontWeight: "bold" }
};

export default Header;
