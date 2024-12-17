import React from "react";

const StepsPage = () => {
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
        <h1 style={styles.title}>Steps Analysis</h1>
      </header>

      <Section title="1. Daily Step Count Over Time">
        <p style={styles.paragraph}>
          This visualization shows the daily step trends over 4 years. The light
          blue line represents the actual steps recorded each day, while the red
          line represents a 7-day rolling average for smoother trend analysis.
          <br />
          Key Observations:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Activity fluctuates significantly with several peaks and dips,
            suggesting periods of high motivation or specific events.
          </li>
          <li style={styles.listItem}>
            There are periods of reduced activity, such as early 2021 and
            mid-2023, which could reflect lifestyle changes or seasonal factors.
          </li>
          <li style={styles.listItem}>
            A gradual improvement in consistency is noticeable in later periods,
            suggesting increased focus on activity.
          </li>
        </ul>
        <img
          src="/images/daily-step-count-over-time.png"
          alt="Daily Step Count Over Time"
          style={styles.image}
        />
      </Section>

      <Section title="2. Distribution of Daily Step Counts">
        <p style={styles.paragraph}>
          The histogram displays how often specific step count ranges occur.
          <br />
          Key Observations:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Most days have steps below 5,000, indicating a predominantly
            low-activity pattern.
          </li>
          <li style={styles.listItem}>
            High-activity days with steps exceeding 10,000 are rare but
            significant, showing spikes of motivation or physical events.
          </li>
        </ul>
        <img
          src="/images/distribution-of-daily-step-counts.png"
          alt="Distribution of Daily Step Counts"
          style={styles.image}
        />
      </Section>

      <Section title="3. Step Count Distribution by Day of Week">
        <p style={styles.paragraph}>
          This box plot analyzes step counts across the days of the week to
          observe weekly patterns.
          <br />
          Key Observations:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Higher median steps are seen on weekdays (Monday to Thursday),
            indicating a structured routine likely driven by work or school.
          </li>
          <li style={styles.listItem}>
            Saturdays and Sundays show a wider distribution, with lower median
            activity but occasional spikes in steps, possibly due to outdoor
            events or weekend activities.
          </li>
        </ul>
        <img
          src="/images/step-count-distribution-by-day-of-week.png"
          alt="Step Count Distribution by Day of Week"
          style={styles.image}
        />
      </Section>

      <Section title="4. Average Daily Steps: Weekdays vs Weekends">
        <p style={styles.paragraph}>
          This bar chart contrasts the average step counts on weekdays versus
          weekends.
          <br />
          Key Observations:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Weekdays show a higher average step count (4,560 steps), likely due
            to regular routines like commuting, work, or school.
          </li>
          <li style={styles.listItem}>
            Weekends show a noticeable drop to 3,728 steps, indicating reduced
            structured activity or rest days.
          </li>
        </ul>
        <img
          src="/images/avarage-daily-steps-weekdays-vs-weekends.png"
          alt="Average Daily Steps Weekdays vs Weekends"
          style={styles.image}
        />
      </Section>

      <Section title="5. Weekly Average Steps vs TikTok Watch Time">
        <p style={styles.paragraph}>
          This comparison highlights trends between average weekly step counts
          and TikTok watch time.
          <br />
          Key Observations:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Weeks with high TikTok watch time often correspond to lower average
            steps, suggesting an inverse relationship.
          </li>
          <li style={styles.listItem}>
            Weeks with increased steps align with reduced watch time, indicating
            better physical engagement during these periods.
          </li>
        </ul>
        <img
          src="/images/weekly-avarage-steps-vs-tiktok-watch-time.png"
          alt="Weekly Average Steps vs TikTok Watch Time"
          style={styles.image}
        />
      </Section>

      <section style={styles.summary}>
        <h2 style={styles.summaryTitle}>Summary</h2>
        <p style={styles.paragraph}>
          The steps data provides the following insights:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Weekdays see more consistent activity, while weekends reflect
            sporadic spikes or lower activity.
          </li>
          <li style={styles.listItem}>
            The majority of days fall below the recommended activity levels,
            with occasional high-step days indicating bursts of activity.
          </li>
          <li style={styles.listItem}>
            Step count trends show a general decline on weeks with high digital
            engagement, reinforcing the need for balance.
          </li>
        </ul>
        <p style={styles.paragraph}>
          This analysis emphasizes the importance of maintaining consistent
          physical activity to achieve a healthier lifestyle while managing
          screen time effectively.
        </p>
      </section>
    </div>
  );
};

export default StepsPage;
