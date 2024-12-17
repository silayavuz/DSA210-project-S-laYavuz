import React from "react";

const WatchTimePage = () => {
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
    paragraph: {
      fontSize: "1.1em",
      marginBottom: "20px",
    },
    image: {
      width: "90%",
      margin: "20px auto",
      display: "block",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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
    list: {
      margin: "20px 0",
      paddingLeft: "20px",
      fontSize: "1.1em",
      color: "#555",
    },
    listItem: {
      marginBottom: "15px",
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
        <h1 style={styles.title}>TikTok Watch Time Analysis</h1>
      </header>

      <Section title="1. Daily TikTok Watch Time">
        <p style={styles.paragraph}>
          The scatter plot illustrates the daily TikTok watch time over the
          analysis period. Notice the significant variability in daily usage,
          with days exceeding <strong>300 minutes</strong> of watch time. The
          distribution suggests that certain days have high engagement spikes,
          likely corresponding to weekends or periods of increased leisure
          activity.
        </p>
        <img
          src="/images/daily-tiktok-wathc-time.png"
          alt="Daily TikTok Watch Time"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          While the general trend fluctuates, the majority of daily watch times
          remain between <strong>50 to 200 minutes</strong>, indicating moderate
          but consistent TikTok engagement.
        </p>
      </Section>

      <Section title="2. Average Daily TikTok Watch Time by Day of Week">
        <p style={styles.paragraph}>
          The bar chart highlights TikTok watch time across the days of the
          week. Notably, <strong>Wednesday</strong> records the highest average
          watch time at <strong>149.5 minutes</strong>, suggesting a mid-week
          "digital break" trend. In contrast, <strong>Friday</strong> has the
          lowest watch time at <strong>110.4 minutes</strong>.
        </p>
        <img
          src="/images/avarage-daily-tiktok-watch-time-by-day-of-week.png"
          alt="Average TikTok Watch Time by Day of Week"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          Weekends (Saturday and Sunday) show a slight increase in watch time,
          indicating a shift towards relaxed and extended digital engagement.
          This suggests that users spend more time scrolling TikTok when free
          from weekday obligations.
        </p>
      </Section>

      <Section title="3. TikTok Watch Time: Weekdays vs Weekends">
        <p style={styles.paragraph}>
          This chart compares average watch time between weekdays and weekends.
          The data reveals a marginal increase on weekends, with averages of{" "}
          <strong>128.6 minutes</strong> on weekends compared to{" "}
          <strong>127.1 minutes</strong> on weekdays.
        </p>
        <img
          src="/images/avarage-tiktok-watch-time-by-day-type.png"
          alt="TikTok Watch Time: Weekdays vs Weekends"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          While the difference appears small, this consistency across weekdays
          suggests TikTok's integral role in daily routines. The slight increase
          on weekends may reflect longer, uninterrupted scrolling sessions.
        </p>
      </Section>

      <Section title="4. Count of Videos Watched by Time of Day">
        <p style={styles.paragraph}>
          TikTok video consumption peaks in the <strong>Evening</strong> and{" "}
          <strong>Night</strong> hours. The chart shows a significant surge in
          activity between <strong>8 PM to 10 PM</strong>. This suggests that
          users primarily engage with TikTok after completing daily activities,
          likely as a form of entertainment or relaxation.
        </p>
        <img
          src="/images/count-of-videos-by-time-of-day.png"
          alt="Count of Videos Watched by Time of Day"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          Lower engagement during the early morning hours (12 AM to 6 AM)
          highlights typical sleeping hours, while daytime usage remains steady
          but lower compared to evenings.
        </p>
      </Section>

      <Section title="5. Hourly TikTok Video Consumption">
        <p style={styles.paragraph}>
          This line chart provides a detailed hourly breakdown of TikTok video
          consumption. The graph reveals a rapid rise in usage starting around{" "}
          <strong>6 PM</strong>, peaking at <strong>9 PM to 10 PM</strong>, and
          dropping sharply after midnight.
        </p>
        <img
          src="/images/hourly-tiktok-video-consumption.png"
          alt="Hourly TikTok Video Consumption"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          The late-night peak aligns with global trends of screen usage as users
          wind down their day with social media.
        </p>
      </Section>

      <Section title="6. Correlation Between Steps and TikTok Watch Time">
        <p style={styles.paragraph}>
          The scatter plot reveals an <strong>inverse relationship</strong>{" "}
          between daily steps and TikTok watch time. As watch time increases,
          daily step counts tend to decline, suggesting that longer screen time
          often correlates with lower physical activity.
        </p>
        <img
          src="/images/correlation-between-steps-and-tiktok-watch-time.png"
          alt="Correlation Between Steps and TikTok Watch Time"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          While there are outliers (e.g., high step counts on high watch time
          days), the overall trend aligns with the hypothesis that extended
          digital consumption reduces active movement.
        </p>
      </Section>

      <section style={styles.summary}>
        <h2 style={styles.summaryTitle}>
          Summary of TikTok Watch Time Analysis
        </h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Peak Usage:</strong> Evenings (8 PM to 10 PM) are the most
            active times for TikTok consumption.
          </li>
          <li style={styles.listItem}>
            <strong>Mid-Week Spike:</strong> Wednesday shows the highest average
            watch time, while Friday records the lowest.
          </li>
          <li style={styles.listItem}>
            <strong>Weekends:</strong> Users tend to engage slightly more on
            weekends, highlighting leisure patterns.
          </li>
          <li style={styles.listItem}>
            <strong>Correlation:</strong> An inverse relationship between watch
            time and physical activity highlights the trade-off between screen
            time and movement.
          </li>
        </ul>
        <p style={styles.paragraph}>
          These insights can help users balance screen time with physical
          activity, promoting healthier habits while still enjoying digital
          entertainment.
        </p>
      </section>
    </div>
  );
};

export default WatchTimePage;
