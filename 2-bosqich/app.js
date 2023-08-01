const buttonPrev = document.querySelector('.slider-button__prev')
const buttonNext = document.querySelector('.slider-button__next')
const sliderTrack = document.querySelector('.slider-track')
const sliderSlides = document.querySelectorAll('.slider-slide')
const sliderPagination = document.querySelector('.slider-pagination')

const sliderLength = sliderSlides.length
const slideWidth = sliderSlides[0].clientWidth
let count = 0
function moveSlide(){
    sliderTrack.style.transform = `translateX(${-slideWidth * count}px)`
    generatePagination()
}
buttonNext.addEventListener('click', function(){
    if (count === sliderLength -1) {
        count = 0        
    }else{
        count = count + 1
    }
    moveSlide()
})

buttonPrev.addEventListener('click', function(){
    if (count === 0) {
        count = sliderLength -1        
    }else{
        count = count - 1
    }
    moveSlide() 
})

 function generatePagination(){
    sliderPagination.innerHTML = ''
    for(let i = 0; i<sliderLength;i++){
        const button = document.createElement('button')
        button.setAttribute('class', 'slider-bullet')
        if(count === i){
            button.setAttribute('class', 'slider-bullet active')
        }
        button.addEventListener('click', function(){
            count = i
            moveSlide()
        })
        sliderPagination.appendChild(button)
    }

    //<button class="slider-bullet active"></button>
 }
 generatePagination()

