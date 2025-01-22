        document.addEventListener("DOMContentLoaded", function() {
        const textElement = document.getElementById('scramble-text');
        const originalText = textElement.textContent;
        const scrambleChars = '!@£$%&}{":;?><][+=-_qwertyuiopasdfghjklzxcvbnm#^*()';
        const scrambleDuration = 500; // Time for each letter to scramble

        function scrambleText() {
            textElement.textContent = ''; // Clear the text initially
            let letterIndex = 0;

            const revealNextLetter = () => {
                if (letterIndex < originalText.length) {
                    const letter = originalText[letterIndex];
                    const span = document.createElement("span");
                    textElement.appendChild(span);

                    const scrambleInterval = setInterval(() => {
                        span.textContent = scrambleChars.charAt(
                            Math.floor(Math.random() * scrambleChars.length)
                        );
                    }, scrambleDuration / 10);

                    setTimeout(() => {
                        clearInterval(scrambleInterval);
                        span.textContent = letter; // Set the correct letter
                        letterIndex++;
                        revealNextLetter(); // Reveal the next letter
                    }, scrambleDuration);
                } else {
                    textElement.style.pointerEvents = "auto"; // Make link clickable
                }
            };

            revealNextLetter();
        }

        scrambleText();
    });
