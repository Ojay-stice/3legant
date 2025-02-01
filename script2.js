let scrollDiv = document.querySelector(".scroll-container")
let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('back')

scrollDiv.addEventListener('wheel',(event)=>{
   
    scrollDiv.scrollLeft += event.deltaY
    
}) 

prevBtn.addEventListener('click', ()=>{
    scrollDiv.style.scrollBehavior = 'smooth'
    scrollDiv.scrollLeft -= 150
})

nextBtn.addEventListener('click', ()=>{
     scrollDiv.style.scrollBehavior = 'smooth'
    scrollDiv.scrollLeft += 150
})

setInterval(()=>{
    scrollDiv.scrollLeft += 150

    if(scrollDiv.scrollLeft + scrollDiv.offsetWidth >= scrollDiv.scrollWidth){
        scrollDiv.scrollLeft = 0
    }
},5000)

document.addEventListener('DOMContentLoaded', ()=>{
    let itemCardHover = document.querySelectorAll('.card-item');


itemCardHover.forEach((item) => {
    let btnCardHover = item.querySelector('.btn')
    let heartCardHover = item.querySelector('.favorite')

    btnCardHover.style.display = 'none'
    heartCardHover.style.display = 'none';

    item.addEventListener('mouseover',()=>{
        btnCardHover.style.display = 'block'
        heartCardHover.style.display = 'block';
        

    })

    item.addEventListener('mouseout',()=>{
        btnCardHover.style.display = 'none';
        heartCardHover.style.display = 'none';
    })
});
})


let prevArrow = document.getElementById('prevArrow');
let nextArrow = document.getElementById('nextArrow');
let logoContainer = document.querySelector('.logo-cards');

const scrollAmount = logoContainer.scrollWidth / logoContainer.childElementCount;

logoContainer.addEventListener('wheel',(event)=>{
    logoContainer.scrollLeft += event.deltaY
})

nextArrow.addEventListener('click',()=>{
    logoContainer.scrollLeft += scrollAmount
})

prevArrow.addEventListener('click',()=>{
    logoContainer.scrollLeft -= scrollAmount
})
console.log(nextArrow)
console.log('hello world')

