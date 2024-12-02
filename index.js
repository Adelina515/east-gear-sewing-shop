document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-page]");
  const contentDiv = document.getElementById("content");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Запобігаємо перезавантаженню сторінки
      const page = event.target.getAttribute("data-page");

      // Завантаження статичного файлу
      fetch(`${page}.html`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Не вдалося завантажити сторінку");
          }
          return response.text();
        })
        .then((html) => {
          contentDiv.innerHTML = html;
        })
        .catch((error) => {
          contentDiv.innerHTML = `<p style="color: red;">Помилка: ${error.message}</p>`;
        });
    });
  });
});
