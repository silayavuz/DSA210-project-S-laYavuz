import React from "react";

const HomePage = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Poppins', Arial, sans-serif",
      background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
      color: "#2c3e50",
      lineHeight: 1.8,
    },
    header: {
      textAlign: "center",
      marginBottom: "60px",
      padding: "40px",
      background: "linear-gradient(to right, #2980b9, #6dd5fa)",
      color: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
    title: {
      fontSize: "4em",
      fontWeight: "800",
      color: "#ffffff",
      marginBottom: "20px",
      textTransform: "capitalize",
      textShadow: "2px 3px 8px rgba(0, 0, 0, 0.4)",
    },
    subtitle: {
      fontSize: "1.5em",
      color: "#dfe6e9",
    },
    section: {
      backgroundColor: "#ffffff",
      padding: "40px",
      marginBottom: "40px",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease-in-out",
    },
    sectionHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    },
    sectionTitle: {
      fontSize: "2.5em",
      color: "#2980b9",
      fontWeight: "600",
      borderBottom: "4px solid #3498db",
      paddingBottom: "10px",
      marginBottom: "20px",
    },
    list: {
      margin: "15px 0",
      paddingLeft: "25px",
      color: "#555",
    },
    listItem: {
      fontSize: "1.2em",
      marginBottom: "15px",
    },
    highlight: {
      fontWeight: "bold",
      color: "#e74c3c",
    },
    techContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "25px",
      marginTop: "20px",
    },
    techCard: {
      backgroundColor: "#f1f3f5",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
      fontSize: "1em",
      color: "#2c3e50",
      fontWeight: "600",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "all 0.3s ease-in-out",
    },
    techCardHover: {
      backgroundColor: "#eaf1f5",
      transform: "translateY(-5px)",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
    },
    footer: {
      textAlign: "center",
      fontSize: "1em",
      color: "#95a5a6",
      marginTop: "50px",
      padding: "20px",
      backgroundColor: "#ecf0f1",
      borderRadius: "10px",
    },
  };

  const Section = ({ title, children }) => (
    <div
      style={styles.section}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.sectionHover.transform;
        e.currentTarget.style.boxShadow = styles.sectionHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = styles.section.boxShadow;
      }}
    >
      <h2 style={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  );

  const techItems = [
    { name: "Python", symbol: "🐍" },
    { name: "React", symbol: "⚛️" },
    { name: "Chart.js", symbol: "📊" },
    { name: "Apple Health XML", symbol: "🍎" },
    { name: "TikTok JSON", symbol: "🎵" },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Step Count vs TikTok Watch Time</h1>
        <p style={styles.subtitle}>
          Exploring the Relationship Between Physical Activity and Screen Time
        </p>
      </header>

      <Section title="Project Overview">
        <p>
          This project examines the interaction between daily step counts and
          TikTok watch time over a six-month period. Insights were extracted
          using Apple Health step data and TikTok video browsing history to
          uncover trends and correlations between physical activity and digital
          habits.
        </p>
      </Section>

      <Section title="Hypothesis">
        <p>
          The hypothesis states that increased <b>TikTok watch time</b>{" "}
          correlates with reduced <b>physical activity (steps)</b>. We expected
          this effect to be more prominent on weekends and during evening hours.
        </p>
      </Section>

      <Section title="Steps Taken for Analysis">
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <b>Step 1:</b> Data extraction from Apple Health XML and TikTok JSON
            files.
          </li>
          <li style={styles.listItem}>
            <b>Step 2:</b> Data cleaning and aggregation into daily summaries.
          </li>
          <li style={styles.listItem}>
            <b>Step 3:</b> Merging and analyzing correlations between steps and
            watch time.
          </li>
          <li style={styles.listItem}>
            <b>Step 4:</b> Visualization of trends and insights.
          </li>
        </ul>
      </Section>

      <Section title="Technologies Used">
        <div style={styles.techContainer}>
          {techItems.map((tech) => (
            <div
              key={tech.name}
              style={styles.techCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  styles.techCardHover.backgroundColor;
                e.currentTarget.style.transform =
                  styles.techCardHover.transform;
                e.currentTarget.style.boxShadow =
                  styles.techCardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  styles.techCard.backgroundColor;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = styles.techCard.boxShadow;
              }}
            >
              <div style={{ fontSize: "2em", marginBottom: "10px" }}>
                {tech.symbol}
              </div>
              {tech.name}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Key Insights">
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.highlight}>Daily Trends:</span> Step counts
            decrease on weekends, while watch time increases.
          </li>
          <li style={styles.listItem}>
            <span style={styles.highlight}>Evening Peaks:</span> TikTok usage
            spikes between 8 PM and 10 PM.
          </li>
          <li style={styles.listItem}>
            <span style={styles.highlight}>Negative Correlation:</span> Higher
            watch time correlates with lower step counts.
          </li>
        </ul>
      </Section>

      <footer style={styles.footer}>
        This analysis emphasizes the importance of balancing screen time and
        physical activity for healthier habits.
      </footer>
    </div>
  );
};

export default HomePage;
