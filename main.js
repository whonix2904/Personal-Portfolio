var tabs = document.getElementsByClassName('tab-link');
var contents = document.getElementsByClassName('tab-content');


function click(tabname) {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active-link");
    }
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active-content");
    }

    var clickedTab = document.querySelector('[data-tab="' + tabname + '"]');
    clickedTab.classList.add("active-link");

    var tabContent = document.getElementById(tabname);
    if (tabContent) {
        tabContent.classList.add("active-content");
    }
}
