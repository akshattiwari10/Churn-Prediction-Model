# 🚀 Customer Churn Prediction System

### 📊 Machine Learning + Explainable AI + Web Application

---

## 🌟 Project Overview

This project is a **full-stack Customer Churn Prediction System** that uses **Machine Learning and Explainable AI (XAI)** to predict whether a customer is likely to leave a service.

It not only predicts churn but also **explains the reason behind predictions** and provides **actionable business insights**.

---

## 🎯 Problem Statement

Businesses struggle to:

- ❌ Identify customers likely to churn  
- ❌ Understand *why* customers leave  
- ❌ Take proactive retention actions  

👉 This project solves these challenges using **data-driven prediction + explainability**

---

## 🧠 Solution Approach

We built a system that:
Customer Data → ML Model → Prediction → SHAP Explanation → Dashboard


---

## 📂 Dataset Used

📌 **Telco Customer Churn Dataset**

| Feature | Description      |
|--------|----------------|
| Rows    | 7043 customers   |
| Columns | 21 features      |
| Target  | Churn (Yes / No) |

---

## ⚙️ Data Preprocessing

✔ Removed unnecessary columns (customerID)  
✔ Converted categorical → numerical (One-Hot Encoding)  
✔ Handled missing values  
✔ Scaled numerical data using StandardScaler  

---

## 🤖 Machine Learning Models Compared

We tested multiple models before selecting the best one:

| Model                  | Accuracy |
|----------------------|----------|
| 🔵 Logistic Regression | **81.97%** ✅ |
| 🌲 Random Forest       | 79.34% |
| ⚡ Gradient Boosting    | 81.40% |
| 🧠 SVM                 | 81.40% |
| 📉 Naive Bayes         | 66.57% |

👉 **Final Choice: Logistic Regression**  
✔ Best balance of accuracy + interpretability  

---

## 📊 Model Performance

### 📌 Metrics

| Metric            | Value  |
|-----------------|--------|
| Accuracy          | 81.97% |
| Precision (Churn) | 68% |
| Recall (Churn)    | 60% |
| F1 Score          | 64% |

---

### 📉 Confusion Matrix

---

## 📂 Dataset Used

📌 **Telco Customer Churn Dataset**

| Feature | Description      |
|--------|----------------|
| Rows    | 7043 customers   |
| Columns | 21 features      |
| Target  | Churn (Yes / No) |

---

## ⚙️ Data Preprocessing

✔ Removed unnecessary columns (customerID)  
✔ Converted categorical → numerical (One-Hot Encoding)  
✔ Handled missing values  
✔ Scaled numerical data using StandardScaler  

---

## 🤖 Machine Learning Models Compared

We tested multiple models before selecting the best one:

| Model                  | Accuracy |
|----------------------|----------|
| 🔵 Logistic Regression | **81.97%** ✅ |
| 🌲 Random Forest       | 79.34% |
| ⚡ Gradient Boosting    | 81.40% |
| 🧠 SVM                 | 81.40% |
| 📉 Naive Bayes         | 66.57% |

👉 **Final Choice: Logistic Regression**  
✔ Best balance of accuracy + interpretability  

---

## 📊 Model Performance

### 📌 Metrics

| Metric            | Value  |
|-----------------|--------|
| Accuracy          | 81.97% |
| Precision (Churn) | 68% |
| Recall (Churn)    | 60% |
| F1 Score          | 64% |

---

### 📉 Confusion Matrix
[[933 103]
[151 222]]


✔ Strong performance on non-churn  
⚠️ Some churn cases missed (scope for improvement)  

---

## 🔍 Explainable AI (SHAP)

We used **SHAP (SHapley Additive Explanations)** to understand:

✔ Why a customer will churn  
✔ Which features impact the decision  

### 🔑 Key Insights:

- 💸 High Monthly Charges → ↑ Churn  
- ⏳ Low Tenure → ↑ Churn  
- 📄 Month-to-month Contract → ↑ Churn  
- 🔒 Long-term Contract → ↓ Churn  

---

## 🌐 Web Application

We built a complete interactive dashboard using:

### 🧩 Frontend:

- HTML  
- CSS  
- JavaScript  
- Chart.js  

### ⚙️ Backend:

- Flask API  

---

## 💻 Features of Web App

✔ Customer input form  
✔ Churn probability prediction  
✔ Risk Level Indicator (Low / Medium / High)  
✔ 🎯 Animated Risk Gauge (Needle-based)  
✔ 📊 Feature Impact Chart  
✔ 📌 Churn Drivers  
✔ 💡 Loyalty Factors  
✔ 🧠 Smart Recommendations  

---

## 🎯 Risk Classification

| Probability | Risk |
|-----------|------|
| < 30% | 🟢 Low |
| 30%–60% | 🟠 Medium |
| > 60% | 🔴 High |

---

## 🧪 Testing

### ✔ Unit Testing
- Model predictions validated  

### ✔ Integration Testing
- Frontend ↔ Backend communication  

### ✔ System Testing
- Full workflow tested  

---

## ⚠️ Limitations

- Moderate recall for churn prediction  
- Limited dataset size  
- Basic input validation  
- Not deployed on cloud  

---

## 🚀 Future Enhancements

- 🔥 Use advanced models (XGBoost, Deep Learning)  
- ☁️ Deploy on cloud (Render / AWS)  
- 📱 Mobile application  
- 📡 Real-time prediction system  
- 🧠 Smarter recommendation engine  

---

## 🛠️ Tech Stack

| Category | Tools |
|--------|------|
| Programming | Python |
| Backend | Flask |
| Frontend | HTML, CSS, JS |
| ML | Scikit-learn |
| XAI | SHAP |
| Visualization | Chart.js |

---

## 📸 Screenshots

<img width="1298" height="612" alt="image" src="https://github.com/user-attachments/assets/bf742023-af66-4148-9507-125c2f375018" />
<img width="532" height="610" alt="image" src="https://github.com/user-attachments/assets/ae9e7e8c-874f-4e05-8a76-2b77c0afba95" />


---

## ⚙️ How to Run

bash
pip install -r requirements.txt
python Backend/app.py
👉 Open frontend using Live Server


👨‍💻 Author
Akshat Tiwari
