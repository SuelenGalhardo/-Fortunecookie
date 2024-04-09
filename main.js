const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnCookie = document.querySelector('.btnCookie');
const btnReset = document.querySelector('.btnReset');
const phraseOpenCookie = document.querySelector('.phraseOpenCookie');

const phrasesList = [
  "Error 404: Fortuna no encontrada",
  "Tomate el tiempo para disfrutar el presente",
  "Vuelve después… Estoy durmiendo (Sí, las galletas necesitan dormir también).",
  "Puedo confiar en ti para guardar un secreto?",
  "Ignora la galleta anterior.",
  "El fin se acerca, y es TU culpa.",
  "Ya era hora de que saliera de la galleta.",
  "¿Algún tipo de alienígena se te aparecerá próximamente!.",
  "!Auxilio, soy rehen de una panadería de galletas de la fortuna!."
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
