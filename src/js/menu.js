const openMenuButton = document.querySelector('.js-open-menu');
const mobileMenu = document.querySelector('.js-menu-container');
const backdrop = document.createElement('div'); // Динамічно створюємо бекдроп
backdrop.classList.add('backdrop'); // Додаємо клас бекдропу
document.body.appendChild(backdrop); // Додаємо бекдроп до тіла документа

// Відкриття/закриття меню
openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
  backdrop.classList.toggle('is-active'); // Показуємо/ховаємо бекдроп
});

// Закриття меню при кліку за межами або на бекдроп
window.addEventListener('click', event => {
  if (
    mobileMenu.classList.contains('is-open') &&
    !mobileMenu.contains(event.target) &&
    !openMenuButton.contains(event.target) &&
    !backdrop.contains(event.target)
  ) {
    mobileMenu.classList.remove('is-open');
    backdrop.classList.remove('is-active'); // Ховаємо бекдроп
  }
});

// Закриття меню при натисканні на пункт меню
mobileMenu.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    mobileMenu.classList.remove('is-open');
    backdrop.classList.remove('is-active'); // Ховаємо бекдроп
  }
});

// Закриття при кліку на бекдроп
backdrop.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  backdrop.classList.remove('is-active');
});
