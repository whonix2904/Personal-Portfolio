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

var navAnimation = document.querySelectorAll("nav ul li");

navAnimation.forEach((navA, index) => {
  navA.style.animation =
    "topIn 1.5s ease-out " + (index * 0.3 + 1.2) + "s forwards";
});

var leftAnimation = document.querySelectorAll(".page1 .left h1,.page1 .left p");

leftAnimation.forEach((leftT, index) => {
  leftT.style.animation =
    "left-in 1.5s ease-out " + (index * 0.3 + 3.2) + "s forwards";
});

var rightAnimation = document.querySelectorAll(
  ".aboutMe .heading h1, .aboutMe .heading p, .aboutMe .heading div"
);
rightAnimation.forEach((right1, index) => {
  right1.style.animation =
    "right-in 1.5s ease-out " + (index * 0.3 + 3.2) + "s forwards";
});

var pages = document.querySelectorAll('.page1,.page2,.page3,.page4');
console.log(pages);
pages.forEach((page, index) => {
    // console.log(index);
});

var page = document.querySelector('.page');
var colors = Array.from(page.children).filter(element => element.tagName === 'DIV');
colors.forEach((color, index) => {
  color.style.animation = `scale-in-center 1.5s cubic-bezier(0.16, 0.94, 0.89, 1) ${index * 0.5}s forwards`;
  console.log(colors);
});

const square1 = document.querySelector('.square1');
const square2 = document.querySelector('.square2');

window.addEventListener('scroll', () => {
    // Calculate the scroll position as a percentage of the total scrollable height
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
console.log(window.scrollY);
console.log(document.documentElement.scrollHeight);
console.log(window.innerHeight);
    // Define the animation based on the scroll position for the first square
    if (scrollPercentage >= 20) {
        // When the scroll position is 20% or more, show the first square
        square1.style.opacity = 1;
    } else {
        // Otherwise, hide the first square
        square1.style.opacity = 0;
    }

    // Define the animation based on the scroll position for the second square
    if (scrollPercentage >= 40) {
        // When the scroll position is 40% or more, show the second square
        square2.style.opacity = 1;
    } else {
        // Otherwise, hide the second square
        square2.style.opacity = 0;
    }
});


