# Flashcard App — Starter

This is a starter for the flashcard project. It gives you a working HTML/CSS/JS setup so you can open `index.html` in a browser and see something happen (check the browser console — you'll find a message there). Everything else is up to you and your team.

---

## What you need to build

- [ ] **Two views**: a screen for managing your deck (adding cards) and a screen for the learning session. You decide how to switch between them.
- [ ] **Add cards**: a form where the user can enter a question and an answer. Each card should be stored in JavaScript (as an object? an array of objects? — you decide the shape).
- [ ] **Cards look like cards**: design them so they visually feel like flashcards.
- [ ] **Flip animation**: clicking a card reveals the answer with a smooth visual effect.
- [ ] **Shuffle**: the learning session presents cards in a random order each time. Research a fair shuffling algorithm.
- [ ] **Persist within the session**: cards should still be there if the user refreshes the page mid-session. They don't need to survive closing the browser tab.
- [ ] **Export**: a button that downloads the current deck as a JSON file, so it can be saved or shared.
- [ ] **Responsive design**: the app should be usable on a phone (small screen) as well as a laptop. Use CSS — no frameworks.
- [ ] **Import** *(extra credit)*: a way for the user to load a previously exported JSON file back into the app, replacing or merging with the current deck.
- [ ] **Tags / filtering** *(extra credit)*: let the user assign a tag or category to each card, and filter the deck by tag before starting a study session.
- [ ] **Two-player mode** *(extra credit)*: two players take turns, self-marking correct or incorrect. A final screen declares the winner.

---

## Before you write any code

1. **Sketch the screens on paper first.** What does the "manage" screen look like? The "study" screen? Draw them before you open a code editor. It takes 10 minutes and will save you hours.

2. **Decide together how a card is represented in JavaScript.** What does a single card look like as a JavaScript object? What does a whole deck look like? Write it on paper. Everyone on the team should agree before any code is written.

3. **Decide how cards will persist within the browser session.** There are built-in browser APIs for this. Research the options — there are at least two commonly used ones. Pick one and understand how it works before you use it.

4. **Divide the work.** Who is building the card form? Who is working on the study session logic? Who is handling CSS? Agree on this before you start, so you don't duplicate effort or block each other.

---

## Useful things to research

*(Topic names only — look these up yourself, that's the point)*

- Ways to store data in the browser between page loads within a tab
- How CSS can flip an element in 3D
- How to trigger a file download from JavaScript without a server
- Shuffling an array fairly (hint: look up the name of a well-known algorithm)
- Event delegation in JavaScript
- CSS Flexbox and Grid for layout

---

## A note on using AI tools

Use AI tools (like Claude, ChatGPT, etc.) to **understand concepts** — ask them to explain how something works, why a technique is used, what the tradeoffs are. Do **not** ask them to generate the app for you. If you can't explain every line of your code to a teammate, you haven't learned it yet. The goal of this project is for you to actually build something yourself.

---

## Extra credit

The extra-credit features are optional — do them only once the core app works well. There is no scaffolding for any of them, and that's intentional.

**Import from JSON**: the exported file is just a JSON string. Think about how you'd read a file the user selects, parse its contents, and merge or replace the current deck. Research the browser API for reading local files.

**Tags / filtering**: what does a tagged card look like as an object? How would you let the user pick a tag before studying? Think about the data structure first — the UI follows naturally from it.

**Two-player mode**: think about it as a design problem first. How do two players take turns? How do you track both scores? What does the final screen look like? Sketch it before you code it.
