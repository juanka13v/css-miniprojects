let toggle = document.querySelector('.toggle')
let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')

toggle.addEventListener( 'click',(e) => {
    navigation.classList.toggle('active')
    main.classList.toggle('active')
})