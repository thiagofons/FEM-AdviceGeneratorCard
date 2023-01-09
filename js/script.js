const dice = document.getElementById("dice");
const paragraph = document.getElementById("phrase");
const adviceNumber = document.getElementById("adviceNumber");

const setPhrase = () => {
  fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      adviceNumber.innerText = `ADVICE #${data.slip.id}`;
      paragraph.innerText = `"${data.slip.advice}"`;
    })
    .catch((err) => console.log(err))
}

window.onload = () => {
  setPhrase();
}

dice.addEventListener("click", () => {
  setPhrase();
})