const LaunchBanner = () => (
  <div style={styles.banner}>
    🚀 <strong>Launching Soon!</strong> | छत्रपती ट्रेडर्स
    <span style={styles.date}>12 जानेवारी 2026</span>
  </div>
);

const styles = {
  banner: {
    background: "linear-gradient(135deg,#d97706,#92400e)",
    color: "#fff",
    padding: "12px",
    textAlign: "center",
    fontWeight: 600
  },
  date: {
    marginLeft: "10px",
    opacity: 0.9
  }
};

export default LaunchBanner;
