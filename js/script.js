const ADVICEGEN_API_URL = "https://api.adviceslip.com/advice";
const getData = async () => {
  const response = await fetch(ADVICEGEN_API_URL);
  const advice = await response.json();
  updatePage(advice.slip);
};

const updatePage = (advice) => {
  const adviceNoValue = advice.id;
  const adviceTextValue = advice.advice;
  const adviceNoElement = document.getElementById("adviceId");
  const adviceTextElement = document.getElementById("adviceText");
  adviceNoElement.innerText = `ADVICE #${adviceNoValue}`;
  adviceTextElement.innerText = "“" + adviceTextValue + "”";
};

getData();
