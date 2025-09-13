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
  const changecontent = document.querySelector(".changecontent"); // grabs the element where text changes
  if (!changecontent) return; // if element is not found exit function

  if (!isDeleting && j <= phrases[i].length) {  // if we're not deleting and haven't finished the phrase
    currentPhrase.push(phrases[i][j]);  
    changecontent.textContent = currentPhrase.join(""); // updates displayed text with current characters
    j++;
    setTimeout(type, typingSpeed); // call type again after a delay to creaye a typing animation
    

  } else if (isDeleting && j >= 0) { // checks if we're currently deleting and there are characters left to delete
    currentPhrase.pop(); // removes the last character from current phrase
    changecontent.textContent = currentPhrase.join(""); // updates displayed text to show the shortened phrase
    j--;
    setTimeout(type, erasingSpeed); // call type again after a delay to create a deleting animation
    

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
// if weve just finished typing a phrase we set isDeleting to true and wait before starting to delete
// if we've finished deleting we move to the next phrase and start typing again

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
