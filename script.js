// ================= EXPLORE BUTTON =================

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

  document.getElementById("programs").scrollIntoView({
    behavior: "smooth"
  });

});


// ================= NAVBAR SMOOTH SCROLL =================

document.querySelectorAll(".nav-links a").forEach(function (link) {

  link.addEventListener("click", function (event) {

    event.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

  if (window.scrollY > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});


topBtn.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
