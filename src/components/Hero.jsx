const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1>मजबूत बांधकामासाठी विश्वासार्ह पुरवठादार</h1>
      <h2>छत्रपती ट्रेडर्स – Dharangaon</h2>
      <p>Cement | Steel | Sand | Hardware</p>
      <div style={styles.buttons}>
        <a href="tel:+917775074617" style={styles.call}>📞 आजच कॉल करा</a>
        <a href="https://wa.me/917775074617" target="_blank" style={styles.whatsapp}>💬 WhatsApp वर संपर्क करा</a>
      </div>
    </section>
  );
};

const styles = {
  hero: { padding: "40px 20px", textAlign: "center", background: "#f5f5f5" },
  buttons: { marginTop: "20px", display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" },
  call: { background: "#1E88E5", color: "#fff", padding: "10px 16px", borderRadius: "8px", textDecoration: "none" },
  whatsapp: { background: "#25D366", color: "#fff", padding: "10px 16px", borderRadius: "8px", textDecoration: "none" }
};

export default Hero;
