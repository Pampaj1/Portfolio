const dropdownBtn = document.querySelector(".dropdown-btn")
const dropdownMenu = document.querySelector(".dropdown-menu")
const dropdownLink = document.querySelectorAll(".dropdown-menu a")
const aboutIcon = document.querySelectorAll(".about-icons i")

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show')
})

dropdownLink.forEach(item => {
    item.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show')
    })
})

aboutIcon.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('fa-bounce')
    })
})

aboutIcon.forEach(item => {
    item.addEventListener('mouseout', () => {
        item.classList.remove('fa-bounce')
    })
})

