# DSA210-project-S-laYavuz

Introduction:
Social media platforms like TikTok have become integral to daily life, shaping trends in entertainment, and even health. TikTok’s viral dance challenges encourage users to engage in physical activity in a fun and accessible way. In this project I wonder if there’s a correlation between my burned calories and tiktok watching habit.
It explores whether participation in these dance trends impacts physical activity levels, as measured by data from Apple Health. The study aims to explore how social media trends might influence health and well-being.

Motivation:
In recent years like everyone else my time spent on TikTok increased also. It effected my lifestyle, I wanted to look at in which way does it effect it. In this project I wonder if there’s a correlation between my burned calories and tiktok watching habit. I try to do those dance challenges on TikTok so surely it does affect my physical activity. By analyzing the relationship between engagement in TikTok dance trends and physical activity, this project seeks to uncover whether such trends can act as motivators for more active lifestyles. With Apple Health we will look at my last 1 year burned calories data.

Data Sources:
I have two primary sources:
TikTok Data;
Personal interaction with TikTok dance trends over 1year.
Metrics include participation in dance challenges and engagement levels, such as liking or sharing related content.
Apple Health Data;
Daily records of step counts, active calories burned, and exercise minutes.
These metrics were aligned with TikTok activity to assess potential
The data from Apple Health included metrics such as daily calories burned and step counts, exported in XML format directly from the application. TikTok data consisted of daily total screen time, exported as JSON files using the platform’s built-in download feature. The dataset spans from August 2023 to August 2024, covering a one-year period. The data was preprocessed using Python to align metrics by date and remove any incomplete entries. Both data sources are considered reliable as they directly reflect my activity recorded by app analytics.

Data Analysis:
Data Collection:
TikTok activity data was manually logged to track engagement with dance challenges.
Apple Health data was exported to analyze physical activity levels over the same period.
Analysis Plan:
Compare periods of high TikTok engagement with corresponding physical activity metrics, such as step counts and calories burned.
Identify patterns or significant increases in physical activity on days of high TikTok dance participation.
Correlation Analysis:
To measure the strength and direction of the relationship between two continuous variables: calories burned and time spent on TikTok.
Pearson correlation coefficients were calculated to measure the strength of the relationship between TikTok engagement and physical activity levels.
Outputs a value between -1 (perfect negative correlation) and 1 (perfect positive correlation), with 0 indicating no linear correlation.
Positive correlation: Higher calories burned tend to occur with higher time spent on TikTok.
Visualization:
Use scatterplot, histogram and trendlines to show changes in physical activity during periods of TikTok engagement.

Findings:
Through analyzing the data, I discovered a positive correlation between my physical activity, calories burned and the time I spent on TikTok. This suggests that my activity levels may be influenced by my TikTok screen time habits. On days when I burned more calories, I noticed that I either spent less time on TikTok or used the app more passively.
Interestingly, on some high-calorie-burning days, I spent time on TikTok exploring dance or fitness-related content. This suggests that engaging with active content on social media could motivate me to be more physically active.

Limitations:
External Influences: Other factors, such as personal schedule or weather, could have influenced my physical activity.
Narrow Scope: This project focuses only on dance trends, excluding other types of TikTok content that might indirectly affect physical activity. We only look at one app maybe other factors like being on a trip might have affected my burned calories.

Future Work:
Investigating how other types of TikTok content, such as fitness challenges or motivational videos, impact health behaviors.
Also we can expand the studies time range, we can look at wide time span. When did my psychical activities started to increase does TikTok really the only thing that affect it?

Conclusion:
This project aims to explore how TikTok, a digital platform known for its creative content, can influence physical activity through its viral dance challenges. The observations indicate a potential positive relationship. These challenges on TikTok has influence on my burned calories, they are correlated with my physical activity. It shows that my hypothesis is correct.

Hypothesis:
Participation, watching the TikTok viral dance challenges significantly increases my daily physical activity levels such as calories burned, step counts.

> > > > > > > 8df3568ccae3705293cd45dffb711b7fac0f6a1e
