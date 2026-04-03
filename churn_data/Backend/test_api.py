import requests
url = "http://127.0.0.1:5000/predict"

data ={
    "tenure":5,
    "MonthlyCharges":70, 
    "TotalCharges":350
}

response = requests.post(url , json=data)
print(response.json())