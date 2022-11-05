const random = document.querySelector(".random");
const main = document.querySelector(".main");
const container = document.querySelector(".container");

async function generate(api) {
  const advice = await fetch(api);
  const response = await advice.json();
  const final = response.slip;
  container.innerHTML = `
  <p class='number'>ADVICE #${final.id}</p>
  <h2 class='advice'>"${final.advice}"</h2>
  `;
}

generate("https://api.adviceslip.com/advice");

random.addEventListener("click", () => {
  generate("https://api.adviceslip.com/advice");
});
