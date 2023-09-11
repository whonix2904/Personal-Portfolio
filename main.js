var tabs = document.querySelectorAll(".tab-link")
var contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((otherTab) => {
            otherTab.classList.remove('active-link');
        });
        tab.classList.add('active-link');

        contents.forEach((content) => {
            content.classList.remove('active-content');
        });
        
        contents[index].classList.add("active-content");
    });

    
});

var navAnimation = document.querySelectorAll("nav ul li")

navAnimation.forEach((navA, index) => {
    navA.style.animation = 'topIn 1.5s ease-out '+ (index * 0.3) +'s forwards';
    console.log(index)
});

