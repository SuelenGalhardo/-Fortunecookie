const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnCookie = document.querySelector('.btnCookie');
const btnReset = document.querySelector('.btnReset');
const phraseOpenCookie = document.querySelector('.phraseOpenCookie');

const phrasesList = [
  "Concéntrate en lo que quieres lograr y ganaras. No lo olvides.",
  "El cielo sera tu limite, pues grandes acontecimientos te sucederán.",
  "Te sentirás feliz como un niño y veras al mundo con sus ojos.",
  "Vivirás tu vejez con comodidades y riquezas materiales.",
  "Confía en tu suerte, que es mucha y te rodeara de prosperidad.",
  "Confía en tu suerte, que es mucha y te rodeara de prosperidad.",
  "Hoy es el momento de explorar: no temas."
];

btnCookie.addEventListener('click', showPhraseOpenedCookie);
btnReset.addEventListener('click', handleToggle);

function showPhraseOpenedCookie() {
  handleToggle();
  phraseOpenCookie.innerText = phrasesList[Math.floor(Math.random() * phrasesList.length)];
  console.log(phraseOpenCookie.innerText);
}

function handleToggle() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
