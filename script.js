// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // расширяем на весь экран
tg.ready();  // уведомляем Telegram, что приложение готово

// Загружаем баланс из localStorage
let coins = parseInt(localStorage.getItem('coins')) || 0;

// Обновляем отображение
document.getElementById('coins').textContent = coins;

// Функция клика
function clickCoin() {
  coins++;
  localStorage.setItem('coins', coins.toString());
  document.getElementById('coins').textContent = coins;

  // Опционально: вибрация (если поддерживается)
  if (navigator.vibrate) {
    navigator.vibrate(20);
  }
}
