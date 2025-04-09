if (window.innerWidth < 768) {
  [].slice
    .call(document.querySelectorAll("[data-bss-disabled-mobile]"))
    .forEach(function (elem) {
      elem.classList.remove("animated");
      elem.removeAttribute("data-bss-hover-animate");
      elem.removeAttribute("data-aos");
      elem.removeAttribute("data-bss-parallax-bg");
      elem.removeAttribute("data-bss-scroll-zoom");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("bs-init.js loaded and running");
  var hoverAnimateElements = document.querySelectorAll(
    "[data-bss-hover-animate]"
  );
  hoverAnimateElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      var animation = element.getAttribute("data-bss-hover-animate");
      element.classList.add("animate__animated", `animate__${animation}`);
    });
    element.addEventListener("mouseleave", function () {
      var animation = element.getAttribute("data-bss-hover-animate");
      element.classList.remove("animate__animated", `animate__${animation}`);
    });
  });
});
