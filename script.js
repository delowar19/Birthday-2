/* PERSONALIZE HERE: name, birthday date, portrait, and message. */
const CONFIG = {
  recipientName: "Jannu",
  birthdayMonth: 10, // November; months start at 0 (January = 0)
  birthdayDay: 6,
  birthdayYear: null, // null counts down to the next November 6
  portrait: "photos/jannu-eyes.jpg"
};

document.title = `A little secret for ${CONFIG.recipientName} ♡`;
document.querySelector('.top-note').textContent = `MADE JUST FOR ${CONFIG.recipientName.toUpperCase()}`;
document.querySelector('.intro-foot').innerHTML = `<span class="tiny-heart">♡</span> ONLY FOR ${CONFIG.recipientName.toUpperCase()} <span class="tiny-heart">♡</span>`;
document.querySelector('#birthday-title em').textContent = CONFIG.recipientName;
document.querySelector('.letter h3').textContent = `To my dear ${CONFIG.recipientName},`;
document.querySelector('.portrait').src = CONFIG.portrait;
document.querySelector('.portrait').alt = `${CONFIG.recipientName}’s eyes, shared for her birthday surprise`;

const scenes = [...document.querySelectorAll('.scene')];
let sceneIndex = 0;
function showScene(index) {
  sceneIndex = index;
  scenes.forEach((scene, i) => {
    const active = i === index;
    scene.classList.toggle('active', active);
    scene.setAttribute('aria-hidden', String(!active));
  });
}
document.querySelectorAll('.next-scene').forEach(button => button.addEventListener('click', () => showScene(Math.min(sceneIndex + 1, scenes.length - 1))));

function nextBirthday() {
  const now = new Date();
  const thisYear = now.getFullYear();
  let target = new Date(CONFIG.birthdayYear ?? thisYear, CONFIG.birthdayMonth, CONFIG.birthdayDay);
  if (CONFIG.birthdayYear == null && target.getTime() < now.getTime()) {
    target = new Date(thisYear + 1, CONFIG.birthdayMonth, CONFIG.birthdayDay);
  }
  return target;
}
const birthday = nextBirthday();
function updateCountdown() {
  const msLeft = Math.max(0, birthday.getTime() - Date.now());
  const totalSeconds = Math.floor(msLeft / 1000);
  const values = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor(totalSeconds % 86400 / 3600),
    minutes: Math.floor(totalSeconds % 3600 / 60),
    seconds: totalSeconds % 60
  };
  Object.entries(values).forEach(([id, value]) => document.getElementById(id).textContent = String(value).padStart(2, '0'));
  if (msLeft === 0) document.getElementById('countdown-note').textContent = 'It’s her day—open the surprise whenever you like. ♡';
}
updateCountdown();
setInterval(updateCountdown, 1000);

const revealButton = document.getElementById('reveal-button');
const revealSection = document.getElementById('birthday-reveal');
revealButton.addEventListener('click', () => {
  scenes.forEach(scene => { scene.classList.remove('active'); scene.setAttribute('aria-hidden', 'true'); });
  revealSection.hidden = false;
  document.querySelector('.scene-footer').hidden = false;
  revealSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('birthday-title').focus({ preventScroll: true });
});

const letterToggle = document.getElementById('letter-toggle');
const letter = document.getElementById('birthday-letter');
letterToggle.addEventListener('click', () => {
  const opening = letter.hidden;
  letter.hidden = !opening;
  letterToggle.setAttribute('aria-expanded', String(opening));
  letterToggle.innerHTML = opening ? 'Keep this close <span>♡</span>' : 'There’s one more thing <span>↓</span>';
  if (opening) setTimeout(() => letter.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
});

document.getElementById('start-over').addEventListener('click', event => {
  event.preventDefault();
  revealSection.hidden = true;
  letter.hidden = true;
  letterToggle.setAttribute('aria-expanded', 'false');
  letterToggle.innerHTML = 'There’s one more thing <span>↓</span>';
  document.querySelector('.scene-footer').hidden = true;
  showScene(0);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
