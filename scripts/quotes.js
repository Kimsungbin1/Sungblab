const quote = document.querySelector("#quote span:first-child");
const quotes = [
  {
    quote:"My life is money -sungbin",
  },
  {
    quote:"Time is money",
  },
  {
    quote:"Don't dwell on the past",
  },
  {
    quote:"No pain, no gain",
  },
  {
    quote:"You only live once",
  },
  {
    quote:"I'm still hungry -Guus Hiddink",
  },
  {
    quote:"The unexamined life is not worth living",
  },
  {
    quote:"Life is all about timing",
  },
];
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
