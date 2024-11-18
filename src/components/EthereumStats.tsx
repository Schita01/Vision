
const EthereumStats = () => {
  const stats = [
    { value: "$126.6B", label: "Value locked in DeFi" },
    { value: "$109.2B", label: "Value protecting Ethereum" },
    { value: "$0.18", label: "Average transaction cost" },
    { value: "19.24M", label: "Transactions in the last 24h" },
  ];

  return (
    <div style={styles.container}>
      {stats.map((stat, index) => (
        <div key={index} style={styles.card}>
          <h1 style={styles.value}>{stat.value}</h1>
          <p style={styles.label}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    padding: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  value: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "0",
  },
  label: {
    fontSize: "1rem",
    color: "#555",
    marginTop: "10px",
  },
};

export default EthereumStats;
