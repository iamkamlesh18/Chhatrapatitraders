const WhyUs = () => (
  <section className="fade-left">
    <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
      आम्हालाच का निवडाल?
    </h2>

    <div style={styles.grid}>
      {[
        "दर्जेदार माल",
        "योग्य दर",
        "वेळेवर डिलिव्हरी",
        "स्थानिक विश्वास"
      ].map(t => (
        <div key={t} className="glass-card">
          <h4>{t}</h4>
        </div>
      ))}
    </div>
  </section>
);

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "40px",
    maxWidth: "1000px",
    margin: "0 auto"
  }
};

export default WhyUs;
