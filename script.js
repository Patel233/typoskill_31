let timeLeft = 60;
        let timer = document.getElementById("timer");
        let text = document.getElementById("text").innerText.split(" ");
        let inputText = document.getElementById("inputText");
        let wpmDisplay = document.getElementById("wpm");
        let accuracyDisplay = document.getElementById("accuracy");
        let correctWords = 0;
        let totalWords = 0;
        
        function startTest() {
            let interval = setInterval(() => {
                timeLeft--;
                timer.innerText = timeLeft;
                if (timeLeft === 0) {
                    clearInterval(interval);
                    calculateResults();
                    inputText.disabled = true;
                }
            }, 1000);
        }
        
        inputText.addEventListener("focus", startTest, { once: true });
        
        inputText.addEventListener("input", () => {
            let typedWords = inputText.value.trim().split(" ");
            totalWords = typedWords.length;
            correctWords = typedWords.filter((word, index) => word === text[index]).length;
        });
        
        function calculateResults() {
            let wpm = correctWords;
            let accuracy = totalWords > 0 ? (correctWords / totalWords) * 100 : 0;
            wpmDisplay.innerText = wpm;
            accuracyDisplay.innerText = accuracy.toFixed(2);
        }