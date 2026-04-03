let riskGauge = null
let impactChart = null

// =========================
// FUNCTION: PREDICT
// =========================
async function predictChurn(){

    const tenure = document.getElementById("tenure").value
    const monthly = document.getElementById("monthly").value
    const total = document.getElementById("total").value
    const contract = document.getElementById("contract").value
    const internet = document.getElementById("internet").value
    const paperless = document.getElementById("paperless").value
    const payment = document.getElementById("payment").value

    const data = {
        tenure: Number(tenure),
        MonthlyCharges: Number(monthly),
        TotalCharges: Number(total),
        Contract: contract,
        InternetService: internet,
        PaperlessBilling: paperless,
        PaymentMethod: payment
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method:"POST",
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            alert("Server error. Make sure Flask is running.")
            return
        }

        const result = await response.json()

        // store data
        localStorage.setItem("predictionData", JSON.stringify(result))

        // redirect
        window.location.href = "result.html"

    } catch (error) {
        alert("Error connecting to server")
        console.error(error)
    }
}


// =========================
// RESULTS PAGE LOGIC
// =========================
if (document.getElementById("probability")) {

    const storedData = localStorage.getItem("predictionData")

    if (!storedData) {
        alert("No prediction data found.")
        window.location.href = "index.html"
    } 
    else {

        const result = JSON.parse(storedData)

        // -------- BASIC OUTPUT --------
        document.getElementById("probability").innerText =
            "Churn Probability: " + (result.churn_probability * 100).toFixed(2) + "%"

        document.getElementById("prediction").innerText =
            result.prediction == 1
            ? "Customer likely to churn"
            : "Customer likely to stay"

        // -------- RISK LEVEL --------
        const prob = result.churn_probability

        let risk = ""
        let color = ""

        if (prob < 0.30) {
            risk = "LOW RISK"
            color = "green"
        } else if (prob < 0.60) {
            risk = "MEDIUM RISK"
            color = "orange"
        } else {
            risk = "HIGH RISK"
            color = "red"
        }

        const riskElement = document.getElementById("risk")
        riskElement.innerText = "Risk Level: " + risk
        riskElement.style.color = color

        // =========================
        // RISK GAUGE
        // =========================
        // =========================
// DYNAMIC RISK GAUGE
// =========================

if (riskGauge) riskGauge.destroy()

const ctxGauge = document.getElementById("riskGauge")

const churnPercent = result.churn_probability * 100

riskGauge = new Chart(ctxGauge, {

    type: "doughnut",

    data: {
        labels: ["Risk", "Remaining"],
        datasets: [{
            data: [churnPercent, 100 - churnPercent],
            backgroundColor: [
                churnPercent < 30 ? "green" :
                churnPercent < 60 ? "orange" : "red",
                "#222"
            ],
            borderWidth: 0
        }]
    },

    options: {
        rotation: -90,
        circumference: 180,
        cutout: "70%",
        plugins: {
            legend: { display: true },
            tooltip: { enabled: true }
        }
    }

})

        // =========================
        // CHURN DRIVERS
        // =========================
        const driversList = document.getElementById("drivers")
        driversList.innerHTML = ""

        result.top_positive_drivers.forEach(f => {
            const li = document.createElement("li")
            li.innerText = f.feature + " increases churn risk"
            driversList.appendChild(li)
        })

        // =========================
        // LOYALTY FACTORS
        // =========================
        const loyaltyList = document.getElementById("loyalty")
        loyaltyList.innerHTML = ""

        result.top_loyalty_factors.forEach(f => {
            const li = document.createElement("li")
            li.innerText = f.feature + " reduces churn risk"
            loyaltyList.appendChild(li)
        })

        // =========================
        // FEATURE IMPACT CHART
        // =========================
        const labels = []
        const values = []

        result.top_positive_drivers.forEach(f => {
            labels.push(f.feature)
            values.push(Math.abs(f.impact))
        })

        result.top_loyalty_factors.forEach(f => {
            labels.push(f.feature)
            values.push(Math.abs(f.impact))
        })

        if (impactChart) impactChart.destroy()

        const ctx = document.getElementById("impactChart")

        impactChart = new Chart(ctx, {
            type:"bar",
            data:{
                labels:labels,
                datasets:[{
                    label:"Feature Impact",
                    data:values
                }]
            },
            options:{
                responsive:true,
                plugins:{legend:{display:false}}
            }
        })

        // =========================
        // RECOMMENDATIONS
        // =========================
        const recList = document.getElementById("recommendations")
        recList.innerHTML = ""

        result.recommendations.forEach(r => {
            const li = document.createElement("li")
            li.innerText = r
            recList.appendChild(li)
        })

    }
}