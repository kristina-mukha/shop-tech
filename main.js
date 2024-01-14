// CATEGORIES
const categoriesBtn = document.querySelector(".categories__btn");
const shoppingBar = document.querySelector(".shopping-bar");

categoriesBtn.addEventListener("click", () =>{
    shoppingBar.classList.toggle("shopping-bar--open");
});


// SEARCH
const search = document.querySelector(".search");
const searchBar = document.querySelector(".search-bar");

search.addEventListener("click", () =>{
    searchBar.classList.toggle("search-bar--open");
});



// FILTER
const filterBtn = document.querySelector(".filter-btn");
const filterFull = document.querySelector(".filter-full");
const filterCloseBtn = document.querySelector(".filter-close-btn");
const overlayNull = document.querySelector(".overlay--null");

filterBtn.addEventListener("click", () =>{
    filterFull.classList.add("filter-full_show");
    overlayNull.classList.toggle("overlay--active");
});

filterCloseBtn.addEventListener("click", () =>{
    filterFull.classList.remove("filter-full_show");
    overlayNull.classList.remove("overlay--active");
});


