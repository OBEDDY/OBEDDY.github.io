// ── CUENTA REGRESIVA ──
function actualizarContador() {
  const boda  = new Date('2026-11-29T18:00:00');
  const ahora = new Date();
  const diff  = boda - ahora;

  if (diff <= 0) return;

  const dias    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segs    = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector('#cd-dias').textContent     = String(dias).padStart(2, '0');
  document.querySelector('#cd-horas').textContent    = String(horas).padStart(2, '0');
  document.querySelector('#cd-minutos').textContent  = String(minutos).padStart(2, '0');
  document.querySelector('#cd-segundos').textContent = String(segs).padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);


// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ── RSVP RADIOS ──
function selectRadio(val) {
  document.querySelector('#radio-si').classList.remove('selected');
  document.querySelector('#radio-no').classList.remove('selected');
  document.querySelector('#radio-' + val).classList.add('selected');
}


// ── RSVP SUBMIT ──
document.querySelector('#rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.style.display = 'none';
  document.querySelector('#rsvp-success').style.display = 'block';
});