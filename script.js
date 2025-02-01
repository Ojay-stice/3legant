const inputElem = document.getElementById("search-bar");
let searchButton = document.querySelector(".search-btn");
let closeIcon = document.getElementById("close-icon");
let userIcon = document.getElementById("user-icon");
let bagIcon = document.getElementById("bag-icon");
let navBar = document.getElementById("nav-menu");
// let hamMenuIcon = document.getElementById("ham-menu");



// function showSearch() {
//   inputElem.classList.remove("hidden");
//   searchButton.classList.add("hidden");
// }

// function hideSearch() {
//   inputElem.classList.add("hidden");
//   searchButton.classList.remove("hidden");
// }

// inputElem.addEventListener("focus", showSearch);
// inputElem.addEventListener("blur", hideSearch);


function showMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("");
  menu.classList.remove("hidden");
}

function hamMenuIcon(elementId){
  let menuIcon = document.getElementById(elementId)
  if(menuIcon && navBar){

    navBar.classList.toggle('left-[0%]')
   navBar.classList.remove("hidden");
  }
}

function removeMobileNav(mobileDivId){
  let navContainer = document.getElementById(mobileDivId)
  if(navContainer){
    navBar.classList.toggle('left-[-100%]')
    // hamMenuIcon.classList.remove("hidden");
        closeIcon.style.color = 'red'
        console.log('close icon was clicked')
        console.log('this was clicked')
  }
}

function shopLinkMenu(elementId){
  let shopLinks = document.getElementById(elementId)
  shopLinks.classList.toggle('left-[0]')
}


let carouselCard = document.querySelectorAll('.carousel-item');


carouselCard.forEach((item)=>{
  let cardBtn = item.querySelector('.cartBtn');
  let cardHeart = item.querySelector('.addFav');

cardBtn.style.display = 'none'
cardHeart.style.display = 'none'

item.addEventListener('mouseover',()=>{
  cardBtn.style.display = 'block'
cardHeart.style.display = 'block'
});

item.addEventListener('mouseleave',()=>{
  cardBtn.style.display = 'none'
  cardHeart.style.display = 'none'
});

});



function removeBanner(elementContainer){
  let xContainer = document.getElementById(elementContainer);
  // let xMark = document.getElementById(elementId);
  
  if(xContainer) {
    xContainer.style.display = "none";
  }
  // xMark.addEventListener('click', ()=>{
  //   xContainer.remove()
  //   console.log(xMark, xContainer);
  //   console.log("closed!");
  // })
}
// removeBanner({
//   elementContainer:'banner-container',
//   elementId: 'x-mark'
//  })

//  removeBanner({
//   elementContainer:'bannerContainer',
//   elementId: 'xMarky'
//  })


