const themes = document.querySelector(":root");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.currentTarget.classList;

    if (color.contains("btn1")) {
      themes.style.setProperty("--theme-color", "#3498db");
    } else if (color.contains("btn2")) {
      themes.style.setProperty("--theme-color", "#ff1726");
    } else if (color.contains("btn3")) {
      themes.style.setProperty("--theme-color", "rgb(1, 255, 1)");
    } else if (color.contains("btn4")) {
      themes.style.setProperty("--theme-color", "rgb(255, 0, 255)");
    } else if (color.contains("btn5")) {
      themes.style.setProperty("--theme-color", "rgb(235, 192, 0)");
    }
  });
});
