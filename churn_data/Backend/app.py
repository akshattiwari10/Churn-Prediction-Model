from flask import Flask , request , jsonify
from flask_cors import CORS
import pandas as pd 
import joblib 
import json 
import shap
import numpy as np 

app= Flask(__name__)
CORS(app)

model = joblib.load(r"C:\Users\hp\OneDrive\Desktop\churn_data\Models\churn_model.pkl")
scaler = joblib.load(r"C:\Users\hp\OneDrive\Desktop\churn_data\Models\scaler (1).pkl")


with open (r"C:\Users\hp\OneDrive\Desktop\churn_data\Models\feature_columns.json") as f:
    feature_columns=json.load(f)

explainer = shap.LinearExplainer(model , np.zeros((1, len(feature_columns))))

@app.route("/")
def home():
    return "Churn Prediction App Running"

@app.route("/predict" , methods=["POST"])
def predict():
    data = request.json

    input_df=pd.DataFrame([data])
    input_df=input_df.reindex(columns=feature_columns , fill_value=0)

    scaled= scaler.transform(input_df)

    prob= model.predict_proba(scaled)[0][1]
    prediction = int(prob>0.5) 

    shap_values = explainer.shap_values(scaled)[0]

    feature_impacts=[]

    for i , val in enumerate(shap_values):
        feature_impacts.append({
            "feature":feature_columns[i],
            "impact":float(val)
        })

    features_impacts = sorted(feature_impacts , key=lambda x:abs(x["impact"]), reverse=True)

    positive = []
    negative = []

    for item in features_impacts:
        if item["impact"] > 0:
            positive.append(item)
        else:
            negative.append(item)

    recommendations = []

    for item in positive:
        feature = item["feature"]
    
        if "tenure" in feature:
            recommendations.append("Provide onboarding support for new customers")
    
        elif "MonthlyCharges" in feature:
            recommendations.append("Offer discount or bundle plan")
    
        elif "Contract_Month-to-month" in feature:
            recommendations.append("Encourage customer to switch to long-term contract")
    
        elif "InternetService_Fiber optic" in feature:
            recommendations.append("Check service quality and offer premium support")
    
        elif "PaperlessBilling" in feature:
            recommendations.append("Offer loyalty incentives")  

    return jsonify({
        "churn_probability": float(prob),
        "prediction": prediction,
        "top_positive_drivers": positive[:3],
        "top_loyalty_factors": negative[:3],
        "recommendations": recommendations
    })

if __name__=="__main__":
    app.run(debug=True)