import requests
print("===== Weather App =====")
city = input("City : ")
api_key = "dc3c53e5dd62e61080da3dea9fd28a94"
url = "https://api.openweathermap.org/data/2.5/weather"
parameters = {
    "q" : city,
    "appid" : api_key,
    "units" : "metric"
}
response = requests.get(url, params=parameters)
data = response.json()
print()
print("===== Weather Report =====")
print("--------------------------")
print("City : ",data['name'])
print ("Country : ",data['sys']['country'])
print ("Temperature : ",data['main']['temp'],"°C")
print ("Humidity : ",data['main']['humidity'],"%")
print ("Weather description : ",data['weather'][0]['description'])
