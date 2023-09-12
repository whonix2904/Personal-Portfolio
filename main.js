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



function navReveal() {
  var navAnimation = document.querySelectorAll("nav ul li");

navAnimation.forEach((navA, index) => {
  navA.style.animation =
    "topIn 1.5s ease-out " + (index * 0.3 + 1.2) + "s forwards";
});
}

ScrollReveal().reveal('.page2', { afterReveal:navReveal()  });

// var leftAnimation = document.querySelectorAll(".page1 .left h1,.page1 .left p");

// leftAnimation.forEach((leftT, index) => {
//   leftT.style.animation =
//     "left-in 1.5s ease-out " + (index * 0.3 + 3.2) + "s forwards";
// });

// var rightAnimation = document.querySelectorAll(
//   ".aboutMe .heading h1, .aboutMe .heading p, .aboutMe .heading div"
// );
// rightAnimation.forEach((right1, index) => {
//   right1.style.animation =
//     "right-in 1.5s ease-out " + (index * 0.3 + 3.2) + "s forwards";
// });




// var page = document.querySelector('.page');
// var colors = Array.from(page.children).filter(element => element.tagName === 'DIV');
// colors.forEach((color, index) => {
//   color.style.animation = `scale-in-center 1.5s cubic-bezier(0.16, 0.94, 0.89, 1) ${index * 0.5}s forwards`;
//   // console.log(colors);
// });


// var pages = document.querySelectorAll('.page1,.page2,.page3,.page4');

// var observer = new IntersectionObserver(entries => {
//   console.log(entries);
// })

// pages.forEach(page => {
//   observer.observe(page)
// });


