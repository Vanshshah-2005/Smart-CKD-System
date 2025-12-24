function predict() {
    let creatinine = parseFloat(
        document.querySelector('input[placeholder="Serum Creatinine (mg/dL)"]').value
    );

    document.getElementById("resultBox").style.display = "block";

    if (creatinine > 2.0) {
        document.getElementById("riskLevel").innerText = "High";
        document.getElementById("riskScore").innerText = "85%";
        document.getElementById("ckdStatus").innerText = "Detected";
    } 
    else if (creatinine >= 1.2 && creatinine <= 2.0) {
        document.getElementById("riskLevel").innerText = "Medium";
        document.getElementById("riskScore").innerText = "55%";
        document.getElementById("ckdStatus").innerText = "Possible Risk";
    } 
    else {
        document.getElementById("riskLevel").innerText = "Low";
        document.getElementById("riskScore").innerText = "25%";
        document.getElementById("ckdStatus").innerText = "Not Detected";
    }
}
function predict() {
    let creatinine = parseFloat(
        document.querySelector('input[placeholder="Serum Creatinine (mg/dL)"]').value
    );

    document.getElementById("resultBox").style.display = "block";
    let factors = document.getElementById("factors");
    factors.innerHTML = "";

    if (creatinine > 2.5) {
        document.getElementById("riskLevel").innerText = "High";
        document.getElementById("riskScore").innerText = "90%";
        document.getElementById("ckdStatus").innerText = "CKD Detected";

        factors.innerHTML += "<li>High Serum Creatinine</li>";
        factors.innerHTML += "<li>Possible Reduced Kidney Filtration</li>";
        factors.innerHTML += "<li>Risk of Chronic Kidney Disease</li>";
    } 
    else if (creatinine >= 1.5) {
        document.getElementById("riskLevel").innerText = "Medium";
        document.getElementById("riskScore").innerText = "60%";
        document.getElementById("ckdStatus").innerText = "Moderate Risk";

        factors.innerHTML += "<li>Borderline Creatinine Level</li>";
        factors.innerHTML += "<li>Needs Regular Monitoring</li>";
    } 
    else {
        document.getElementById("riskLevel").innerText = "Low";
        document.getElementById("riskScore").innerText = "20%";
        document.getElementById("ckdStatus").innerText = "Normal Kidney Function";

        factors.innerHTML += "<li>Creatinine within normal range</li>";
    }
}
function predict() {
    let creatinine = parseFloat(
        document.querySelector('input[placeholder="Serum Creatinine (mg/dL)"]').value
    );
    let hemoglobin = parseFloat(
        document.querySelector('input[placeholder="Hemoglobin (g/dL)"]').value
    );

    document.getElementById("resultBox").style.display = "block";
    let factors = document.getElementById("factors");
    factors.innerHTML = "";

    if (creatinine > 2.0 && hemoglobin < 10) {
        document.getElementById("riskLevel").innerText = "High";
        document.getElementById("riskScore").innerText = "92%";
        document.getElementById("ckdStatus").innerText = "CKD Detected";

        factors.innerHTML += "<li>High Creatinine</li>";
        factors.innerHTML += "<li>Low Hemoglobin (Anemia)</li>";
    } 
    else if (creatinine > 1.5 || hemoglobin < 11) {
        document.getElementById("riskLevel").innerText = "Medium";
        document.getElementById("riskScore").innerText = "65%";
        document.getElementById("ckdStatus").innerText = "Moderate Risk";

        factors.innerHTML += "<li>Abnormal Kidney or Blood Parameters</li>";
    } 
    else {
        document.getElementById("riskLevel").innerText = "Low";
        document.getElementById("riskScore").innerText = "25%";
        document.getElementById("ckdStatus").innerText = "Low Risk";

        factors.innerHTML += "<li>All values within normal range</li>";
    }
}
