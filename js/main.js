// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

// إضافة الحدث عند تحميل الصفحة لتحديد الرابط النشط
document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href; // Get the current page URL
  var navLinks = document.querySelectorAll(".nav-item a"); // Select all nav links

  navLinks.forEach(function (link) {
    if (link.href === currentUrl) {
      // If the link matches the current URL, set its parent to active
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});
