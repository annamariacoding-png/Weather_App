import requests
print("===== Weather App =====")
print()
city = input("City : ")
api_key = "Your API KEY"
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
