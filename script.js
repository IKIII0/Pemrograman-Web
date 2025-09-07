let prevScroll = window.pageYOffset;

window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  console.log("prevScroll: ", prevScroll);
  console.log("currentScroll: ", currentScroll);

  if (prevScroll > currentScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  prevScroll = currentScroll;
};

document.addEventListener("mousemove", function (e) {
  if (e.clientY < 80) {
    navbar.style.top = "0";
  }
});
