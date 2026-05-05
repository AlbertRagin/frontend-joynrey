document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('theme-switch');
  const htmlElement = document.getElementById('html-theme');

  // Проверяем сохранённую тему или prefers-color-scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    htmlElement.classList.add('dark-theme');
    themeSwitch.checked = true;
  }

  // Обработчик переключения темы
  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      htmlElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});
