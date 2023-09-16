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
  delay : 100,
  duration: 1000,
  easing:"ease-out",
});

topIn.reveal(`.navbar li a, .projectList,.socialIcon a i`, {interval:400,distance:"100px"});
topIn.reveal(`.left,.left h1,.left p`,{delay:1000,origin: 'left',interval:500});
topIn.reveal(`.right,.heading h1,.heading p,.tab-title,.tab-link,.active-content,.left personal-info li`,{delay:1000,origin: 'right',interval:500});
