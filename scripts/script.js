let hamenuButton = document.getElementById("nav_button")

hamenuButton.addEventListener("click",() =>{
    let navMenu = document.getElementById("nav-toggle")

    navMenu.classList.toggle("show-menu")

    hamenuButton.classList.toggle("change")
})