const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const showMenuBtn = document.getElementById('showMenuBtn');
const fullMenu = document.getElementById('fullMenu');
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');
const videoBtn = document.getElementById('videoBtn');
const videoModal = document.getElementById('videoModal');
const modalClose = document.getElementById('modalClose');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
  const expanded = navbar.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', expanded);
});

navLinks.forEach(link => link.addEventListener('click', () => navbar.classList.remove('open')));

showMenuBtn.addEventListener('click', () => {
  fullMenu.classList.toggle('open');
  showMenuBtn.textContent = fullMenu.classList.contains('open') ? 'Menyuni yopish' : 'To‘liq menyu';
});

// Telegram administrator username'ini shu yerga yozing (@ belgisiz).
// Masalan: oldbukhara_admin
const TELEGRAM_USERNAME = 'oldbukhara_admin';

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(bookingForm);
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const date = String(data.get('date') || '').trim();
  const guests = String(data.get('guests') || '').trim();

  const message = [
    '🍽 Yangi stol band qilish so‘rovi',
    '',
    `👤 Ism: ${name}`,
    `📞 Telefon: ${phone}`,
    `📅 Sana: ${date}`,
    `👥 Mehmonlar soni: ${guests}`
  ].join('\n');

  const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
  formMessage.textContent = 'Telegram ochilmoqda...';
  window.open(telegramUrl, '_blank', 'noopener,noreferrer');
});

videoBtn.addEventListener('click', () => {
  videoModal.classList.add('show');
  videoModal.setAttribute('aria-hidden', 'false');
});

function closeModal(){
  videoModal.classList.remove('show');
  videoModal.setAttribute('aria-hidden', 'true');
}

modalClose.addEventListener('click', closeModal);
videoModal.addEventListener('click', (event) => {
  if(event.target === videoModal) closeModal();
});

document.getElementById('year').textContent = new Date().getFullYear();
