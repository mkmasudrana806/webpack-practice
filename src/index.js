import "./styles/main.scss";
import generateQuote from "./generateQuote";
import bgImg from "./assets/img.jpg";

const quoteEl = document.getElementById("quote");
const generateQuoteBtn = document.getElementById("generateQuoteBtn");

// initial call a quote
(async () => {
  try {
    const quote = await generateQuote();
    quoteEl.innerHTML = quote.quote;
  } catch (error) {}
})();

// set background image
const body = document.getElementById("main");
body.style.backgroundImage = `url(${require("./assets/img.jpg")})`;

// generate a new quote
generateQuoteBtn.addEventListener("click", () => {
  (async () => {
    try {
      const quote = await generateQuote();
      quoteEl.innerHTML = quote.quote;
    } catch (error) {}
  })();
});
