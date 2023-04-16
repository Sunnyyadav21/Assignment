
const menutoggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const body = document.querySelector('body')  ;

    menutoggle.addEventListener('click', ()=>{
        menutoggle.classList.toggle('active');
        nav.classList.toggle("showNav");
        body.classList.add("noscroll");

    }) 


const closeMenu = document.querySelector('.closeMenu');

closeMenu.addEventListener('click', ()=>{
    menutoggle.classList.remove('active');
    nav.classList.remove('showNav');
    body.classList.remove("noscroll");
})   

 



// counter 

let counted = false;

const countHandler = ()=>{
  const count = document.querySelectorAll(".counterBox span");

var countNo = 0;

count.forEach((element) => {
  const counter = element.getAttribute("data-count");
  console.log(counter)
  setInterval(() => {
    countNo++;
    if (countNo <= counter) {
      element.innerHTML = countNo;
    }
  }, 20);
});
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    if(intersecting) {
      countHandler()
    }
  })
})

observer.observe(document.getElementById("counter"))



// testimonial slider

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay:true,
        loop:false
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true,
        nav:true,
        prevArrow: $('.slick_arrow .prev'),
        nextArrow: $('.slick_arrow .next'),
        loop:false
      });
