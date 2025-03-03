---
title: "Quranntino: Indoor Positioning and Geofencing System for Covid Hospitals"
date: 2021-06-15T00:00:00+00:00
description: "A smart IoT-based geofencing and patient monitoring system designed to ensure safety and efficiency in Covid hospitals."
menu:
  sidebar:
    name: Project Quranntino
    identifier: quranntino
    weight: 30
hero: "indoor.png"
mermaid: true
author:
  name: Saloni Gharge
  image: /images/author/saloni.png
timeToRead: 6 minutes
tags: ["IoT", "Geofencing", "Healthcare", "Covid-19", "BLE"]
repo: "https://github.com/Saloni-Gharge/indoor-positioning"
video: "https://drive.google.com/drive/folders/1KrA-JLjkPMN8VLYbk23CvnNTNe0pKHVu"
---

## Overview  

**Quranntino** is an innovative **Indoor Positioning and Geofencing System** designed to monitor **Covid-19 patients** within hospital premises. The system utilizes **Bluetooth Low Energy (BLE) bands** and strategically placed **receivers** to ensure **real-time tracking** of patients. If a patient attempts to **breach the geofence** or **remove the band**, an **instant alert** is sent to hospital authorities via a **web application**.  

This solution was developed to **support frontline healthcare workers** by improving **patient monitoring, security, and resource allocation** during the pandemic.  

**Key Technologies Used:**  
- **Bluetooth Low Energy (BLE) Beacons** for tracking  
- **ESP32 microcontroller** for smart wearable bands  
- **Firebase Authentication & Real-Time Database**  
- **Dynamic Web Application** with an intuitive UI  

---

## Why This Solution?  

### Cost-Effective Implementation  
- **BLE Receivers:** ₹365 per unit *(3 receivers = ₹1,095/-)*  
- **Wearable Band Components:**  
  - **ESP32:** ₹365  
  - **Battery:** ₹250  
  - **Touch Sensor:** ₹23  
  - **Temperature/Pulse Sensor:** ₹73  
  - **Watch Strap:** ₹20  
  - **Total per band:** ₹731/- *(For 2 bands = ₹1,462/-)*  
- **Overall cost:** ₹2,557/- *(affordable for hospitals)*  

### Low Power Consumption  
- BLE technology ensures **minimal battery drain** while maintaining high accuracy.  

### Indoor Positioning & Security  
- **More reliable than GPS** in enclosed hospital environments.  
- **Real-time alerts** for unauthorized patient movement.  

---

## Features  

**Geofencing Alert System:** Triggers **instant alerts** if a patient tries to **exit the geofenced zone**.  
**Health Monitoring:** Tracks **vital parameters** (temperature, pulse) through wearable bands.  
**Dynamic & Responsive Web Application:** Provides **real-time tracking** and **visualization** for hospital administrators.  
**Secure Authentication:** Uses **Firebase Auth** to restrict unauthorized access.  
**Low Power Consumption:** Optimized **battery usage** for continuous operation.  

---

## Additional Use Cases  

Beyond healthcare, **Quranntino** can be adapted for various industries:  

**Corporate Security** – Track employees within office premises.  
**Retail Stores** – Gain insights into **customer navigation & behavior**.  
**Healthcare** – Monitor **dementia and Alzheimer's patients**.  
**Prison Security** – **Geofencing for inmate tracking**.  
**Asset Tracking** – Monitor **expensive instruments & equipment** in real time.  

---

## System Architecture  

Our approach involved multiple layers of **data collection, processing, and visualization**:

1️. **Data Collection**  
   - BLE **receivers** track patient movement.  
   - Wearable **bands measure temperature & touch sensor activity**.  

2️. **Real-time Data Processing**  
   - Firebase **stores & analyzes live patient data**.  
   - Alerts are **triggered instantly** upon any policy breach.  

3️. **Visualization & Dashboard**  
   - Hospital authorities monitor **live location & alerts** via a **secure web app**.  

---
## Project Demonstration  

{{< video src="https://drive.google.com/uc?id=1KrA-JLjkPMN8VLYbk23CvnNTNe0pKHVu" >}}

---
## 🏆 Achievements & Recognition  

**Semi-Finalists – Deep Blue Hackathon 2021 (Mastek)**  
   - A **3-4 month engagement** offering industry mentorship to tackle real-world **social challenges**.  
   - Focused on **bridging academic knowledge & industry practices**.  

**2nd Place – National Level Project Competition: Innovations 2021**  
   - Recognized for **technological impact & healthcare innovation**.  

---

## Source Code  

📌 **GitHub Repository:** [Indoor Positioning & Geofencing System](https://github.com/Saloni-Gharge/indoor-positioning)  

**Quranntino is a step forward in using IoT for public health & safety!**  
