const Products = () => {
  const items = [
    "Cement",
    "Steel (TMT Bars)",
    "Sand & Gitti",
    "Bricks",
    "Hardware Items",
    "Plumbing Material",
    "Electrical Items",
    "Paints & Chemicals",
    "Tools & Safety"
  ];

  return (
    <section style={styles.section}>
      <h2>आमचे उत्पादने</h2>
      <div style={styles.grid}>
        {items.map(item => (
          <div key={item} style={styles.card}>
            <h4>{item}</h4>
            <p>Best rate साठी संपर्क करा</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "30px 20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px"
  },
  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center"
  }
};

export default Products;
