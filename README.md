# AgroFusion
This is the solution of **Leveraging Earth Observation Data for Informed Agricultural Decision-Making** implemented by Team AgroFusion

# Live Link  
https://agro-fusion.vercel.app/

# Hardware Code's Repository : 
https://github.com/19smabtahinoor/AgroFusion_Hardware 


AgroFusion is an advanced IoT-based agricultural monitoring and management system. It enables real-time tracking of critical environmental parameters like humidity, water level, temperature, pH level, and soil health. Additionally, AgroFusion integrates a powerful AI-driven disease detection model to help farmers identify potential crop diseases early, improving yield and reducing losses.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Usage](#usage)
- [Contributors](#contributors)

## Project Overview
AgroFusion aims to provide farmers with actionable insights and real-time data to enhance farm productivity and resource management. Using hardware sensors and machine learning models, it continuously monitors environmental conditions and detects potential crop diseases. The platform is designed to be scalable, allowing for easy integration with various types of agricultural hardware and offering cloud-based data analytics.

The real-time data from the field are processed and displayed on an easy-to-use web dashboard. Farmers can view the current humidity, temperature, water levels, soil health, and pH values. Additionally, the system employs an AI model trained with PyTorch for disease detection, alerting users to potential crop issues.

## Technologies Used
The AgroFusion project utilizes a diverse range of modern technologies:
- **Frontend & Backend**: NEXT JS, Typescript, Tailwind CSS etc.
- **Database**: MongoDB
- **Deployment**: Vercel (for the web app)
- **Hardware Integration**: Various sensors for humidity, water level, temperature, pH, and soil monitoring etc.
- **Machine Learning**: PyTorch for the AI-based disease detection model.
- **Cloud Services**: Firebase (for real-time data handling)

## Features
### Real-time Environmental Monitoring
AgroFusion provides continuous, real-time data from the field, allowing users to monitor key environmental factors:
- **Humidity Levels**: Real-time humidity monitoring to ensure optimal growing conditions.
- **Water Level Monitoring**: Continuous monitoring of water levels to prevent over or under-watering.
- **Temperature Monitoring**: Tracks ambient temperature in the agricultural environment.
- **pH Level Monitoring**: Monitors soil pH levels, critical for ensuring the right growing conditions.
- **Soil Health Assessment**: Real-time soil health insights based on data from hardware sensors.
 etc.

### AI-Based Disease Detection
- **Disease Detection Model**: The system integrates a machine learning model built with **PyTorch**, designed to identify potential diseases based on image data and environmental factors. The model has been trained using a dataset of crop images with known diseases, allowing for precise and timely disease predictions.
  
### Realtime Data from Hardware Sensors
- Real-time data is captured via IoT sensors placed in the field, including humidity, temperature, water level, pH level, and soil health data. This data is sent to the server, processed, and displayed on the AgroFusion dashboard.


## Usage
To use the AI Disease Detection feature:
1. Navigate to the **Disease Detection** section.
3. The AI model will analyze the image and provide a diagnosis based on pre-trained data.

## Contributors
- **Abtahi Noor** - Team Leader & Software Developer
- **Yeasar Arefin** - Software Developer


Copyright (c) by Team AgroFusion