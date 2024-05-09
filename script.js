// Text to be typed
const text = "~/profile/manishgurung";
// Speed of typing animation in milliseconds
const typingSpeed = 100;

// Function to simulate typing animation
function typeWriter(text, i, typingTextElement) {
  if (i < text.length) {
    typingTextElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text, i, typingTextElement);
    }, typingSpeed);
  }
}

// Trigger typing animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  const typingTextElement = document.getElementById("typing-text");
  if (typingTextElement) {
    // Start typing animation
    typeWriter(text, 0, typingTextElement);
  }
});
