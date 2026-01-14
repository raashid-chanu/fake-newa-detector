function checkNews() {
    let news = document.getElementById("newsInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (news.trim() === "") {
        result.innerHTML = "Please enter some news";
        result.style.color = "orange";
        return;
    }

    let fakeWords = ["miracle", "shocking", "secret", "government hiding", "you won't believe", "100% guarantee"];

    let score = 0;

    for (let i = 0; i < fakeWords.length; i++) {
        if (news.includes(fakeWords[i])) {
            score++;
        }
    }

    if (score >= 2) {
        result.innerHTML = "⚠️ This news looks FAKE";
        result.style.color = "red";
    } else {
        result.innerHTML = "✅ This news looks REAL";
        result.style.color = "green";
    }
}
