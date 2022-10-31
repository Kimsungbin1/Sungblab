const quote = document.querySelector("#quote span:first-child");
const quotes = [
  {
    quote:"내 인생은 돈이다 -김성빈-",
  },
  {
    quote:"시간은 곧 돈이다.",
  },
  {
    quote:"힘들지만 어쩌겠습니까, 해내야죠. -박은빈-",
  },
  {
    quote:"고통없인 얻는것도 없다.",
  },
  {
    quote:"마이동풍 (馬耳東風) 너의길을 가라.",
  },
  {
    quote:"인생만사 塞翁之馬(새옹지마).",
  },
  {
    quote:"삶의 원동력은 무엇일까? 첫째도 욕망, 둘째도 욕망, 셋째도 욕망이다. -스탠리 쿠니츠-",
  },
  {
    quote:"내 인생에 포기란 없다.",
  },
  {
    quote:"돈은 가난은 사람을 현명하게도 처절하게도 만든다.",
  },
  {
    quote:"기회는 사라지지 않는다. 니가 놓치는건 딴놈이 잡는다.",
  },
  {
    quote:"말한마디로 천냥 빛 값는다.",
  },
  {
    quote:"입은 재앙을 부르는 문이요 혀는 몸을 자르는 칼이다. 입을 닫고 혀를 깊이 감춘다면 가는 곳마다 몸을 편하게 할 수 있다.",
  },
  {
    quote:"당신이 하는일 모두다 잘되길 바란다. -웹사이트 제작자가-",
  },
];
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
