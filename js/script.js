const ADVICEGEN_API_URL = "https://api.adviceslip.com/advice";
const MIN_DELAY =
  2 * 1000; /* delay needed before next advice can be loaded in millisecs */

const getData = async () => {
  const response = await fetch(ADVICEGEN_API_URL);
  const advice = await response.json();
  updatePage(advice.slip);
};

const updatePage = (advice) => {
  const button = document.getElementById("loadAdviceBtn");
  const adviceNoValue = advice.id;
  const adviceTextValue = advice.advice;
  const adviceNoElement = document.getElementById("adviceId");
  const adviceTextElement = document.getElementById("adviceText");
  adviceNoElement.innerText = `ADVICE #${adviceNoValue}`;
  adviceTextElement.innerText = "“" + adviceTextValue + "”";
  button.disabled = true;
  button.classList.add("disabled");
  setTimeout(() => {
    button.disabled = false;
    button.classList.remove("disabled");
  }, MIN_DELAY);
};

getData();
