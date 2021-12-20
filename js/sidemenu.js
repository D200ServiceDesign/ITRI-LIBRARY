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

var gttBtn = document.getElementById("gototop-btn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    gttBtn.style.display = "block";
  } else {
    gttBtn.style.display = "none";
  }
}
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
