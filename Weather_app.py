from flask import Flask, render_template
import requests
from datetime import datetime
from flask import request, jsonify
app = Flask(__name__)

def get_weather(city):
    api_key = "API KEY"
    url = "https://api.openweathermap.org/data/2.5/weather"
    parameters = {
        "q" : city,
        "appid" : api_key,
        "units" : "metric"
    }
    response = requests.get(url, params=parameters)
    data = response.json()
    return data

@app.route('/')
def index():
    return render_template('Interface.html')

@app.route('/weather')
def weather():
    city = request.args.get("city")
    data = get_weather(city)
    data["sys"]["sunrise"] = datetime.fromtimestamp(data["sys"]["sunrise"]).strftime("%I:%M %p")
    data["sys"]["sunset"] = datetime.fromtimestamp(data["sys"]["sunset"]).strftime("%I:%M %p")
    return jsonify(data)
 
if __name__ == "__main__" :
    app.run(debug=True)

