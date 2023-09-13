var tabs = document.querySelectorAll(".tab-link");
var contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((otherTab) => {
      otherTab.classList.remove("active-link");
    });
    tab.classList.add("active-link");

    contents.forEach((content) => {
      content.classList.remove("active-content");
    });

    contents[index].classList.add("active-content");
  });
});

// scroll reveal animations 

var sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  delay : 200,
  duration: 1000,
  interval:400,
});

ScrollReveal().reveal('.navbar-li', sr);
