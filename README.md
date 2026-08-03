# 🌤️ Weather Today

A modern weather web application built with **Flask**, **JavaScript**, and the **OpenWeather API**.

Weather Today provides real-time weather information with an aesthetic interface, dynamic weather backgrounds, and an interactive city search.

## ✨ Features

- 🌍 Search weather for cities across India
- 🌡️ Real-time temperature
- 🌤️ Current weather condition
- 💧 Humidity
- 🌬️ Wind speed
- 🌅 Sunrise & Sunset time (formatted)
- 🌎 Country display
- 🎨 Dynamic backgrounds based on weather
- 😊 Dynamic weather emojis
- 💾 Remembers the last selected city using Local Storage
- 🔍 Instant city search with live filtering
- 📱 Clean and responsive user interface

## 🛠️ Built With

- Python
- Flask
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- OpenWeather API

## 📂 Project Structure

```
Weather-Today/
│
├── static/
│   ├── Pictures/
│   ├── Interface.css
│   ├── Interface.js
│   └── cities.json
│
├── templates/
│   └── Interface.html
│
├── app.py
├── requirements.txt
└── README.md
```

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Weather-Today.git
```

### 2. Open the project

```bash
cd Weather-Today
```

### 3. Install dependencies

```bash
pip install flask requests
```

### 4. Add your OpenWeather API key

Open `app.py` and replace

```python
api_key = "YOUR_API_KEY"
```

with your own API key.

You can get one for free from:

https://openweathermap.org/api

### 5. Run the project

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

## 📌 Future Improvements

- Global city support
- Better loading animations
- Error handling for invalid cities
- Weather forecast for upcoming days
- Dark/Light mode
- Automatic location detection

## 👩‍💻 Author

**Anna**

Built as a learning project while exploring Flask, JavaScript, APIs, and full-stack web development.

