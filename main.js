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

var topIn = ScrollReveal({
  origin: 'top',
  distance: '10px',
  delay : 500,
  duration: 1000,
  easing:"ease-out",
});

topIn.reveal(`.navbar li, .projectList`, {interval:300});
topIn.reveal(`.left`,{delay:100,origin: 'left'});
topIn.reveal(`.right`,{delay:100,origin: 'right'});
