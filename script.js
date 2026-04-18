// <---- TABS ---->

const tabBtns = document.querySelectorAll(".tabs__nav button");
// console.log(tabBtns);
const tabsItems = document.querySelectorAll(".tabs__item");
// console.log(tabsItems);

// Функция скрывает табы и убирает active у кнопок.
function hideTabs() {
  tabsItems.forEach(item => item.classList.add("hide"));
  tabBtns.forEach(item => item.classList.remove("active"));
}

// Функция показывает переданный номер таба и делает ее активной.\
function showTab(index) {
  tabsItems[index].classList.remove("hide");
  tabBtns[index].classList.add("active");

}

hideTabs();
showTab(0);

tabBtns.forEach((btn, index) => btn.addEventListener("click", () => {
  hideTabs();
  showTab(index);
}));

//<---- Anchors ---->

const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc =>{
  anc.addEventListener("click", function(event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 80,
      behavior: "smooth"
    });
  });
})