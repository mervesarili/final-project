console.log("Flashcard app loaded");

// ── YOUR DATA ────────────────────────────────────────────────────
//
// A deck is an array of card objects. A card might look like:
//
//   { id: 1, question: "What is a variable?", answer: "A named container for a value." }
//
// Your team decides the exact shape — agree on it before anyone
// writes code that creates or reads cards.

let cards = [
  { id: 1, question: "What is a variable?", answer: "A named container for a value." },
  { id: 2, question: "What is the goal of CSS ?", answer: " To create design for HTML content" }
];


// ── ADDING A CARD ────────────────────────────────────────────────
//
// When the user submits the "add card" form, you need to:
//   1. Read the question and answer values from the form inputs
//   2. Create a new card object and push it into the cards array
//   3. Save the updated deck (research: how to persist data in the browser)
//   4. Update the card list on screen so it reflects the change

function addcard(question, answer) {
  //creating an array
  // biggest number  
  let largestID = cards[0].id // find largest number of card - last card's number 
  for (let index = 0; index < cards.length; index++) {
    const FlashCard = cards[index].id 
      if (flashcard > largestID) {
        largestID = flashcard
      }
  }
  const newcard = {
   id: largestID + 1 ,
   question,
   answer
  }
  cards.push( newcard);
  saveDeck();
  renderCardList();
}

// ── SHOWING CARDS ON SCREEN ──────────────────────────────────────
//
// After any change to the cards array (add, delete), re-render the
// list so what's on screen matches what's in memory.
// Tip: clear the list element first, then loop through cards and
// add a new <li> for each one.

function renderCardList() {

}

// ── DELETING A CARD ──────────────────────────────────────────────

function deletecard(id) {
  // TODO: remove the card with this id from the cards array,
  //       save, and re-render
  for (let i = 0; i < cards.length; i++) {
    let selectedcard = cards[i];
    if (selectedcard.id === id) {
      cards.splice(i, 1);
    }
}
  saveDeck();
  renderCardList();
}


// ── STARTING A STUDY SESSION ─────────────────────────────────────
//
// Before studying you'll want to:
//   1. Shuffle a copy of the deck (research a fair shuffle algorithm)
//   2. Switch the visible view from "manage" to "study"
//   3. Show the first card

function startStudy() {
  // TODO
}


// ── SHOWING A CARD ───────────────────────────────────────────────

function showCard(card) {
  // TODO: put the question text into the card element on screen,
  //       and make sure the card starts un-flipped (showing question)
}


// ── FLIPPING A CARD ──────────────────────────────────────────────
//
// The flip animation is handled entirely by CSS — see styles.css.
// All JavaScript needs to do here is toggle a CSS class.
//
//   cardElement.classList.toggle("flipped")
//
// Write the CSS first, then call this when the user clicks the card.

function flipCard() {
  // TODO
}


// ── MOVING TO THE NEXT CARD ──────────────────────────────────────

function nextCard() {
  // TODO: advance to the next card in the shuffled session,
  //       or end the session if there are no more cards
}


// ── SAVING AND LOADING ───────────────────────────────────────────
//
// Cards should survive a page refresh.
// Research the browser APIs available for storing data locally.
// You'll need to convert your cards array to a string to store it,
// and parse it back into an array when loading.

function saveDeck() {
  // TODO
}

function loadDeck() {
     let cardList = document.getElementById("cardlist");

const li = document.createElement("li"); 
li.textContent = "forth card";
 cardList.appendChild (li);

  // TODO: load saved cards on startup, or start with an empty array
}


// ── EXPORT ───────────────────────────────────────────────────────
//
// Research: "trigger file download from JavaScript"
// Hint: look up Blob and URL.createObjectURL

function exportDeck() {
  // TODO
}


// ── EVENT LISTENERS ──────────────────────────────────────────────
//
// Wire up your functions to the DOM here.
// DOMContentLoaded fires once the HTML is fully parsed — a safe
// place to do any setup that reads or writes to the page.

document.addEventListener("DOMContentLoaded", function () {


  loadDeck();

  // Once you have a form in your HTML, attach a submit listener:
  //
  // document.getElementById("add-form").addEventListener("submit", function (e) {
  //   e.preventDefault(); // stops the page from refreshing
  //   const question = document.getElementById("question-input").value.trim();
  //   const answer   = document.getElementById("answer-input").value.trim();
  //   addCard(question, answer);
  // });

  // Attach other listeners here as you build more features...

});
