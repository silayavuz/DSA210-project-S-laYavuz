import React from "react";

const CombinedPage = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Poppins', Arial, sans-serif",
      lineHeight: 1.8,
      color: "#2c3e50",
    },
    header: {
      textAlign: "center",
      marginBottom: "60px",
      padding: "40px",
      background: "linear-gradient(to right, #3498db, #6dd5fa)",
      color: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "3em",
      fontWeight: "700",
      marginBottom: "10px",
      textTransform: "capitalize",
    },
    paragraph: {
      fontSize: "1.1em",
      marginBottom: "20px",
    },
    section: {
      marginBottom: "40px",
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease-in-out",
    },
    sectionHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    },
    sectionTitle: {
      fontSize: "2em",
      color: "#3498db",
      fontWeight: "600",
      borderBottom: "3px solid #3498db",
      paddingBottom: "10px",
      marginBottom: "20px",
    },
    image: {
      width: "90%",
      margin: "20px auto",
      display: "block",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    list: {
      margin: "20px 0",
      paddingLeft: "20px",
      fontSize: "1.1em",
      color: "#555",
    },
    listItem: {
      marginBottom: "15px",
    },
    summary: {
      backgroundColor: "#f8f9fa",
      padding: "30px",
      borderRadius: "10px",
      marginTop: "40px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    },
    summaryTitle: {
      fontSize: "2em",
      color: "#2c3e50",
      fontWeight: "700",
      marginBottom: "20px",
      borderBottom: "3px solid #2c3e50",
      paddingBottom: "10px",
    },
  };

  const Section = ({ title, children }) => (
    <section
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
    </section>
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>
          Combined Analysis: Steps and TikTok Watch Time
        </h1>
        <p style={styles.paragraph}>
          A comprehensive exploration of the relationship between physical
          activity (step counts) and TikTok watch time, highlighting patterns,
          correlations, and trends.
        </p>
      </header>

      <Section title="1. Daily Step Count vs TikTok Watch Time Over Time">
        <p style={styles.paragraph}>
          This visualization compares daily step counts (green) with TikTok
          watch time in minutes (blue) over the same date range. The trends
          showcase how physical activity and digital engagement fluctuate
          together or inversely over time.
        </p>
        <img
          src="/images/step-count-vs-tiktok-watch-time-over-time.png"
          alt="Step Count vs TikTok Watch Time Over Time"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          <strong>Key Insight:</strong> Days with exceptionally high screen time
          often coincide with reduced step counts, indicating a possible
          trade-off between physical activity and sedentary behavior.
        </p>
      </Section>

      <Section title="2. Weekly Average Steps vs Watch Time">
        <p style={styles.paragraph}>
          The line chart provides a weekly average comparison between step
          counts (green) and TikTok watch time (blue). Variations across weeks
          reveal behavioral patterns influenced by time constraints, workload,
          and habits.
        </p>
        <img
          src="/images/weekly-avarage-steps-vs-tiktok-watch-time.png"
          alt="Weekly Average Steps vs TikTok Watch Time"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          <strong>Observation:</strong> Weeks with higher average watch time
          generally correlate with lower step counts, particularly during weeks
          with increased leisure activities or reduced physical activity.
        </p>
      </Section>

      <Section title="3. Correlation Between Steps and Watch Time">
        <p style={styles.paragraph}>
          The scatter plot shows the relationship between daily step counts and
          TikTok watch time. A downward trend (red line) suggests an{" "}
          <strong>inverse correlation</strong>: as watch time increases,
          physical activity decreases.
        </p>
        <img
          src="/images/correlation-between-steps-and-tiktok-watch-time.png"
          alt="Correlation Between Steps and Watch Time"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          <strong>Key Takeaway:</strong> While there are outliers, the overall
          negative correlation aligns with expectations that extended sedentary
          screen time may limit active movement.
        </p>
      </Section>

      <Section title="4. Combined Behavioral Patterns">
        <p style={styles.paragraph}>
          By integrating step count and TikTok data, we identify behavioral
          patterns:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Physical activity tends to drop on high watch time days, reflecting
            a potential trade-off.
          </li>
          <li style={styles.listItem}>
            Evenings (8 PM–10 PM) are peak TikTok consumption times, coinciding
            with sedentary periods.
          </li>
          <li style={styles.listItem}>
            Step counts are higher during weekdays compared to weekends, whereas
            watch time slightly increases on weekends.
          </li>
        </ul>
      </Section>

      <section style={styles.summary}>
        <h2 style={styles.summaryTitle}>Summary of Findings</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Step counts are inversely correlated with TikTok watch time,
            particularly on high usage days.
          </li>
          <li style={styles.listItem}>
            Physical activity peaks during weekdays, while TikTok watch time
            peaks on weekends and evenings.
          </li>
          <li style={styles.listItem}>
            Weekly averages reveal consistent trends, highlighting opportunities
            to balance screen time and movement.
          </li>
        </ul>
        <p style={styles.paragraph}>
          These insights underscore the importance of maintaining a balance
          between physical activity and digital engagement to promote a
          healthier lifestyle.
        </p>
      </section>
    </div>
  );
};

export default CombinedPage;
