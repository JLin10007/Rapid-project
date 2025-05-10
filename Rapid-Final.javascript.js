const Tabs = document.querySelectorAll(".Tabs");
const Tabbtns = document.querySelectorAll(".Tab-btn");

const tab_Nav = function(TabbtnsClick){
    Tabbtns.forEach((Tabbtn) => {
        Tabbtn.classList.remove("active")
    })

    Tabs.forEach((tab) => {
        tab.classList.remove("active")
    })

    Tabbtns[TabbtnsClick].classList.add("active");
    Tabs[TabbtnsClick].classList.add("active");
}

Tabbtns.forEach((Tabbtn,i) => {
    Tabbtn.addEventListener("click",() =>{
        tab_Nav(i)
    })
}); 