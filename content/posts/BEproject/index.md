---
title: "Cyberbully Aid: Detection of Cyberbullying Severity"
date: 2022-03-05
description: "An AI-powered cyberbullying detection system that analyzes and classifies bullying severity on social media platforms."
hero: "cyberbully-aid.png"
menu:
  sidebar:
    name: "Cyberbully Aid"
    identifier: "cyberbully-aid"
    weight: 5
author:
  name: "Saloni gharge"
  image: "/images/author/your-image.png"
timeToRead: 8 minutes
tags: ["AI", "Machine Learning", "Cyberbullying", "Social Media", "XGBoost", "Random Forest", "Web App"]
---

## Introduction

Social media is a powerful tool that shapes public sentiment, but it also fosters cyberbullying, negatively affecting users, especially teenagers. With millions of online interactions occurring daily, manually detecting and addressing harmful content is impractical. 

Cyberbully Aid aims to develop a multiclass cyberbullying detection system using machine learning. The project involves scraping social media data, annotating it, training AI models, and integrating a real-time detection system within a web and mobile application.

## Objectives

1. **Scrape real-world** data from Twitter and build a multi-class dataset for cyberbullying detection.
2. **Train machine learning models** (XGBoost, Random Forest, Naive Bayes) to classify bullying severity.
3. **Develop a cross-platform social media app** that detects cyberbullying in user comments.
4. **Build an interactive web application** for real-time analysis and visualization.

## Methodology

### Dataset Preparation
- **Data Collection**: Scraped tweets using Python’s `snscrape` library.
- **Preprocessing**: Removed URLs, stopwords, and non-textual elements.
- **Data Annotation**: Developed an **automated annotation algorithm** to classify text into five categories:
  - **No Bully**
  - **Foul Language**
  - **Light Bully**
  - **Medium Bully**
  - **Severe Bully**

### Feature Engineering
- **TF-IDF & Word2Vec**: Extracted key features from text.
- **Dependency Parsing**: Identified relationships between profane words and personal references.
- **Profanity Ratio Calculation**: Measured the proportion of offensive words per comment.
- **Capitalization & Length Analysis**: Used uppercase words and message length as aggression indicators.

### Model Training & Testing
- Implemented three classifiers for cyberbullying severity detection:
  - **Naive Bayes**: Probabilistic classification model.
  - **Random Forest**: Ensemble decision tree-based classifier.
  - **XGBoost**: Boosted tree-based model for improved accuracy.
- Achieved highest accuracy with Random Forest.

### System Architecture
{{< img src="sys.png" align="center" title="Forest">}}
{{< vs >}}

## Implementation

### 1. **Mobile App**
- Cross-platform social media-style interface.
- Users can post content, which is automatically classified by our trained model.
- Uses Firebase for data storage and authentication.

### 2. **Web Application**
- Admin dashboard for monitoring flagged comments.
- Visual analytics of cyberbullying trends using Looker Studio.
- Features:
  - Alerts for severe cases.
  - User-specific moderation tools.

{{< img src="flow.png" align="center" title="Forest">}}
{{< vs >}}

## Results & Findings

- **Dataset Created & Annotated**: A high-quality, multi-class labeled dataset for cyberbullying detection.
- **Model Accuracy Comparison**:
  - **Random Forest**: 88.5% (Best Performance)
  - **XGBoost**: 85.2%
  - **Naive Bayes**: 78.3%
- **Live Deployed Model**: Hosted using Heroku for real-time classification.
- **Web & Mobile App Deployed**: Functional integration with Firebase for real-time alerts.

## Future Scope

**Expanding the solution to**:
- Incorporate deep learning models for better text classification.
- Develop image & video detection for cyberbullying in multimedia content.
- Cross-platform implementation: Integrate with platforms like Discord & Reddit.
- Build AI-powered recommendations for counseling victims of cyberbullying.

## Project Presentation
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSvxYToGW5QQMzBUNoXvj0ULuC688Ph5ZCyQUyYB0WGDuRdeyVQMlSWQS7RBxdbvA/embed?start=true&loop=true&delayms=3000" frameborder="0" width="900" height="500" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Conclusion

Cyberbully Aid is a comprehensive, AI-driven system that provides real-time monitoring, classification, and analysis of cyberbullying on social media. By leveraging machine learning and cloud technologies, it enables a scalable and effective approach to tackling online harassment.

This project is a step toward safer online interactions and responsible AI development. Let's make the internet a safer place for everyone!
