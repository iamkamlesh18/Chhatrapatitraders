const Products = () => {
  const products = [
    {
      title: "सिमेंट",
      items: ["OPC सिमेंट", "PPC सिमेंट", "PSC सिमेंट", "व्हाइट सिमेंट"]
    },
    {
      title: "स्टील",
      items: ["TMT बार (6mm–12mm)", "बाइंडिंग वायर"]
    },
    {
      title: "वाळू व गिट्टी",
      items: ["नदी वाळू", "क्रश्ड वाळू", "10mm गिट्टी", "20mm गिट्टी"]
    },
    {
      title: "विटा",
      items: ["लाल विटा", "फ्लायॲश विटा"]
    },
    {
      title: "हार्डवेअर साहित्य",
      items: ["खिळे", "स्क्रू", "नट-बोल्ट", "GI वायर"]
    },
    {
      title: "प्लंबिंग मटेरियल",
      items: ["PVC पाइप", "CPVC पाइप", "एल्बो / टी / बेंड", "पाण्याच्या टाक्या"]
    },
    {
      title: "इलेक्ट्रिकल साहित्य",
      items: ["इलेक्ट्रिकल वायर", "स्विच व सॉकेट", "MCB / DB बॉक्स", "LED बल्ब"]
    },
    {
      title: "पेंट व केमिकल्स",
      items: ["वॉल पुट्टी", "प्रायमर", "वॉटरप्रूफिंग केमिकल", "क्युरिंग कंपाऊंड"]
    },
    {
      title: "टूल्स व सुरक्षा साधने",
      items: ["फावडे / घमेले", "मोजमाप टेप", "सेफ्टी हेल्मेट", "हातमोजे"]
    }
  ];

  return (
    <section className="zoom-in">
      <h2
        className="gradient-text"
        style={{ textAlign: "center", marginBottom: "70px" }}
      >
        आमची उत्पादने
      </h2>

      <div style={styles.grid}>
        {products.map(product => {
          const whatsappMsg =
            `नमस्कार,%0A` +
            `मला खालील उत्पादनाबाबत दर हवा आहे:%0A` +
            `${product.title}%0A%0A` +
            `प्रमाण:%0A` +
            `डिलिव्हरी ठिकाण:`;

          return (
            <div key={product.title} className="glass-card">
              <h3 style={styles.title}>{product.title}</h3>

              <ul style={styles.list}>
                {product.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a
                href={`https://wa.me/917775074617?text=${whatsappMsg}`}
                target="_blank"
                className="cta"
                style={{ marginTop: "24px", display: "inline-block" }}
              >
                {product.title} चौकशी (WhatsApp)
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const styles = {
  grid: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "44px"
  },
  title: {
    marginBottom: "16px"
  },
  list: {
    paddingLeft: "18px",
    lineHeight: "1.7",
    opacity: 0.85
  }
};

export default Products;
