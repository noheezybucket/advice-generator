const id = document.querySelector(".advice-id");
const text = document.querySelector(".advice-text");
let advice = [];
const fetchData = async () => {
  await fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => (advice = data.slip));
};

const displayData = () => {
  id.textContent = `ADVICE #${advice.id}`;
  text.textContent = `"${advice.advice}"`;
};

dice.addEventListener("click", async () => {
  await fetchData();
  displayData();
  console.log(advice.advice);
});
