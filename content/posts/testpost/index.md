## About Learning Analytics Hackathon

The **2024 Learning Analytics Hackathon** was an exciting opportunity to collaborate with a team of five talented peers to tackle real-world challenges in education using **data analytics**. Hosted at the **UBC Sauder Learning Labs**, this **10th edition hackathon** challenged us to leverage **Canvas discussion data** creatively to improve teaching and learning experiences. It was an incredible experience where we combined **technical skills, teamwork, and innovation** to make a meaningful impact.

## Our Challenge

In a **time-constrained 5-hour hackathon**, our team analyzed **Canvas discussion data** from UBC’s learning management system to uncover actionable insights into **student engagement, collaboration, and learning progress**. The objective was to design and build a tool that could empower **instructors and researchers** to better understand student behavior and optimize the learning environment.

## Problem Identified

Our team focused on **two key challenges** within Canvas discussions:

### 🔹 Repetitive Questions in Discussions  
Students often raise **similar questions or discussion topics**, making it difficult to **identify recurring themes** or extract useful insights manually.  

### 🔹 Teaching Efficiency  
Instructors frequently need to **answer the same questions repeatedly**, which consumes valuable time and reduces teaching efficiency.  

## Proposed Solutions  

To address these challenges, we developed **two core features**:

### 1️⃣ Keyword Filter & Search  
🔹 Allows users to **filter discussion topics by specific keywords**, making it easier to **locate relevant threads** and streamline navigation.  

### 2️⃣ Suggesting Similar Discussions  
🔹 Recommends **related discussion posts** from history, enabling users to **access contextually similar conversations** and reduce redundancy.

## Methodology  

Our team followed a **structured methodology** to extract insights and propose a **data-driven solution**:

1️⃣ **Profiling Each Discussion**  
   - Retrieved metadata and participation details using **Canvas APIs**.  

2️⃣ **Calculating Key Discussion Attributes**  
   - Analyzed engagement metrics, including **reply depth** and **number of responses**.  

3️⃣ **Text Concatenation and Cleansing**  
   - Combined discussion thread text and **removed noise** for improved analysis.  

4️⃣ **Keyword Extraction**  
   - Used **TF-IDF and Word2Vec models** to identify the most relevant discussion keywords.  

5️⃣ **Similarity Analysis**  
   - Designed a **recommendation system** to suggest **similar discussions** based on extracted keywords.

## Data Visualization  

To showcase our analysis results, we implemented **two key visualizations**:

### 📌 Similarity Score for Keywords  

A table displaying **input words and their most similar words**, helping users find **related topics** faster.  

| Input Word  | Similar Words & Scores |
|-------------|------------------------|
| Mustard     | Ketchup (0.9949), Tangy (0.9920) |
| Ketchup     | Mustard (0.9949), Taste (0.9937) |
| Fries       | Sandwiches (0.9974), Great (0.9972) |

🔹 Generated using **Word2Vec**, this model provides insights into **semantic relationships between terms**.

### 📊 Discussion Keyword Similarity Heatmap  

A **heatmap visualization** highlighting discussion topic similarity based on extracted keywords.

#### Key Observations:
✅ **High similarity scores** (dark red) indicate **closely related topics**, such as:  
   - **"Ketchup or Mustard?"** vs. **"General Hackathon Questions"**  

✅ **Low similarity scores** (blue) highlight **less related topics**, such as:  
   - **"Introduce yourself and your team"** vs. **"Data Questions"**

## Final Thoughts  

This hackathon provided **valuable experience** in **real-world data analysis**, **machine learning for education**, and **collaborative problem-solving**. By leveraging **NLP models and data visualization**, we built a solution that could **enhance student engagement and instructor efficiency** in learning management systems.

🚀 **Excited to explore more projects at the intersection of AI, data, and education!** 🎓  

