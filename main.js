const dropdownBtn = document.querySelector(".dropdown-btn")
const dropdownMenu = document.querySelector(".dropdown-menu")
const dropdownLink = document.querySelectorAll(".dropdown-menu a")


dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show')
})

dropdownLink.forEach(item => {
    item.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show')
    })
})

