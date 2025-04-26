const buttons = document.querySelectorAll('#mood-buttons button');
const suggestionBox = document.getElementById('suggestion-box');
const historyList = document.getElementById('history-list');
let moodHistory = [];

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  
    const introScreen = document.getElementById('intro-screen');
    
    setTimeout(() => {
      introScreen.classList.add('fade-out');
      
      setTimeout(() => {
        introScreen.style.display = 'none';
      }, 1000); 
      
    }, 3500); 
  });
  

  buttons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.textContent;
        moodHistory.push(mood);
        updateMoodHistory();

        let message = "";

        if (mood.includes("😩")) {
            message = "Take a short break and stretch your body.";
        } else if (mood.includes("😤")) {
            message = "Breathe in...and out. You're stronger than you feel.";
        } else if (mood.includes("😊")) {
            message = "Share the joy! Send someone a kind message.";
        } else if (mood.includes("😖")) {
            message = "You're not alone. Do something small that brings peace.";
        } else if (mood.includes("😕")) {
            message = "Try doing something new or weird - even for 5 min.";     
        } else  if (mood.includes("😞")) {
          message = "It's okay to feel down. Try taking a walk or talking to someone close to you.";
        } else if (mood.includes("😠")) {
          message = "Take a deep breath. Count to 10, and then let it go. You got this!";
        } else if (mood.includes("😌")) {
          message = "You're at peace right now. Why not enjoy this calm moment and relax a little more?";
        } else if (mood.includes("😎")) {
          message = "You're crushing it! Keep going and show the world what you're made of!";
        } else {
          message = "Tell me more about you";
        }
        suggestionBox.textContent = message;

        suggestionBox.classList.remove("show");
        void suggestionBox.offsetWidth;
        suggestionBox.classList.add("show");
    });
});
function updateMoodHistory() {
  historyList.innerHTML = "";

  moodHistory.forEach(mood => {
    const listItem = document.createElement('li');
    listItem.textContent = mood;
    historyList.appendChild(listItem);
  });
}