(function () {
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (!toggle || !links) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      links.classList.remove("hidden");
      links.classList.add("flex");
    } else {
      links.classList.add("hidden");
      links.classList.remove("flex");
    }
  }

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  links.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setOpen(false);
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      links.classList.remove("hidden");
      links.classList.add("md:flex");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
