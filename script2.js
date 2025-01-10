let scrollDiv = document.querySelector(".scroll-container")
let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('back')

scrollDiv.addEventListener('wheel',(event)=>{
   
    scrollDiv.scrollLeft += event.deltaY
    
}) 

prevBtn.addEventListener('click', ()=>{
    scrollDiv.style.scrollBehavior = 'smooth'
    scrollDiv.scrollLeft -= 100
})

nextBtn.addEventListener('click', ()=>{
     scrollDiv.style.scrollBehavior = 'smooth'
    scrollDiv.scrollLeft += 100
})

setInterval(()=>{
    scrollDiv.scrollLeft += 100

    if(scrollDiv.scrollLeft + scrollDiv.offsetWidth >= scrollDiv.scrollWidth){
        scrollDiv.scrollLeft = 0
    }
},5000)

let itemCardHover = document.querySelectorAll('.card-item');
// let btnCardHover = document.querySelectorAll('.btn');
// let heartCardHover = document.querySelectorAll('.favorite');

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

let prevArrow = document.querySelector('.arrow-left');
let nextArrow = document.querySelector('.arrow-right');
let logoContainer = document.querySelector('.logo-holder');

logoContainer.addEventListener('wheel',(event)=>{
    logoContainer.style.scrollBehavior = 'smooth'
    logoContainer.scrollLeft += event.deltaY
})
prevArrow.addEventListener('click',()=>{
    logoContainer.style.scrollBehavior = 'smooth'
    logoContainer.scrollLeft -= 376 
})

nextArrow.addEventListener('click',()=>{
    logoContainer.style.scrollBehavior = 'smooth'
    logoContainer.scrollLeft += 376 
})