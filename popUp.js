const button = document.querySelector('button')
const popup = document.querySelector('.popUp-wrapper')
const close = document.querySelector('.popup-close')

button.addEventListener('click',()=>{
    popup.style.display = 'block'
     
})

close.addEventListener('click',()=>{
    popup.style.display = 'none'
     
})``