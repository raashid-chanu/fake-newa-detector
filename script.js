function checkNews() {
    let news = document.getElementById("newsInput").value;
    let result = document.getElementById("result");

    if (news.trim() === "") {
        result.innerHTML = "Please enter some news";
        result.style.color = "orange";
        return;
    }

    result.innerHTML = "Checking with AI...";
    result.style.color = "blue";

    fetch("https://fake-news-ai-backend.onrender.com/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: news })
    })
    .then(response => response.json())
    .then(data => {
        result.innerHTML = "🔍 AI Prediction: " + data.prediction;
        result.style.color = data.prediction === "Fake" ? "red" : "green";
    })
    .catch(error => {
        result.innerHTML = "❌ Server error. Try again.";
        result.style.color = "red";
    });
}
