let $ = document;
let btnEls = $.querySelectorAll(".themes .btn");
btnEls.forEach((btnEl) => {
  btnEl.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--theme-color",
      getComputedStyle(e.target).backgroundColor
    );
  });
});
