var menu = document.getElementById("sideMenu");
var btn = document.getElementById("menuBtn");
var collapse = document.getElementById("collapseBtn");
btn.onclick = function () {
  menu.style.display = "block";
};
var closeMenu = function (event) {
  if (event.target == menu) {
    menu.style.display = "none";
  }
};
collapse.onclick = function () {
  menu.style.display = "none";
};

window.addEventListener("click", closeMenu);
window.addEventListener("touchend", closeMenu);

const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
