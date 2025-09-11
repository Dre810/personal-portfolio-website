// Initialize AOS animations
AOS.init();

// Typing effect for changing content on home page
const phrases = [
  "Fullstack Developer",
  "Creative Coder",
  "Web Enthusiast",
  "Tech Lover",
];
let i = 0; // current phrase index
let j = 0; // current character in the word
let currentPhrase = []; // holds the letters being typed
let isDeleting = false; // flag to check if we're deleting 
const typingSpeed = 100; // typing speed in ms
const erasingSpeed = 50; // erasing speed in ms
const delayBetweenPhrases = 1500;

function type() {
  const changecontent = document.querySelector(".changecontent");
  if (!changecontent) return; // grabs the element where text changes if element is not found exit function

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    changecontent.textContent = currentPhrase.join("");
    j++;
    setTimeout(type, typingSpeed);
    // if we're not deleting and havent finished the phrase add next character update the text and call type again after a delay

  } else if (isDeleting && j >= 0) {
    currentPhrase.pop();
    changecontent.textContent = currentPhrase.join("");
    j--;
    setTimeout(type, erasingSpeed);
    // if we're deleting remove the last character,update text and continue until all characters are deleted

  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, delayBetweenPhrases);
    } else {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      j = 0;
      setTimeout(type, typingSpeed);
    }
  }
}
// once a phrase is typed  wait 1.5 seconds then start deleting once deleted move to the next phrase reset index and start typing again

document.addEventListener("DOMContentLoaded", () => { //ensures js runs after the full html is loaded
  type(); // starts typing animation soon as the page loads

  // when hire me button is clicked it shows a popup message
  document.getElementById("btncv").addEventListener("click", () => {
    alert("Thanks for your interest! I'll get in touch with you soon.");
  });

  // when view cv button is clicked it opens my google docs cv in a new tab
  document.getElementById("btnViewCV").addEventListener("click", () => {
    window.open("https://docs.google.com/document/d/1mgOr0hYtnAhs8TGiuCu4u0QuzpH41WY6/edit?usp=drivesdk&ouid=103753067401418891960&rtpof=true&sd=true", "_blank");
  });
});
