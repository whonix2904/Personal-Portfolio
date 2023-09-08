function openTab(event, tabName) {
    var i, tabLink, tabContent;
    tabLink = document.getElementsByClassName('tab-link');
    for(i = 0; i < tabLink.lenght; i++){
        tabContent[i].classList.remove("active-link");
    }

    tabContent = document.getElementsByClassName('tab-content');
    for(i = 0; i < tabContent.lenght; i++){
        tabContent[i].classList.remove("active-content");
    }
    document.getElementById('tabName').classList.add('active-link')
    event.currentTarget.className+= " active"

}