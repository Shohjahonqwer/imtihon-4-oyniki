const menuSearch = document.querySelector('.menu_search')
const menuSearchOpen = document.querySelector('.menu_search_open')
const menuSearchClose = document.querySelector('.menu_search_close')
const menuRun = document.querySelector('.menu_run')
const menuRunOpen = document.querySelector('.menu_run_open')
const menuRunClose = document.querySelector('.menu_run_close')

// SEARCH

function MenuSearchClose() {
  menuSearch.classList.remove('open')
}

function MenuSearchOpen() {
  menuSearch.classList.add('open')
}

menuSearchOpen.addEventListener('click', function(){
  MenuSearchOpen()
  MenuRunClose() 
})
menuSearchClose.addEventListener('click', function(){
  MenuSearchClose()
})



// RUN

function MenuRunClose() {
  menuRun.classList.remove('open')
}

function MenuRunOpen() {
  menuRun.classList.add('open')
}

menuRunOpen.addEventListener('click', function(){
  MenuRunOpen()
  MenuSearchClose() 
})
menuRunClose.addEventListener('click', function(){
  MenuRunClose()
})




window.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    MenuRunClose() 
    MenuSearchClose()
  }
})

