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


