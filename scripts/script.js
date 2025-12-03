let hamenuButton = document.getElementById("nav_button")

hamenuButton.addEventListener("click",() =>{
    let navMenu = document.getElementById("nav-toggle")
    navMenu.classList.toggle("show-menu")
    hamenuButton.classList.toggle("change")
})

// let drinkButton = document.getElementById("drink_button")
// let foodButton = document.getElementById("food_button")

// drinkButton.addEventListener("click", () =>{
//     let showDrinks = document.getElementById("show_drinks")
//     showDrinks.classList.toggle("show-drinks")
    
// })

// foodButton.addEventListener("click", () =>{
//     let showFood = document.getElementById("show_food")
//     showFood.classList.toggle("show-food")

// })

    document.getElementById("toggleButton").addEventListener("click", toggleDisplay);

        function toggleDisplay() {
      var element = document.getElementById("myDiv"); // Get the element by its ID

      if (element.style.display === "none") {
        element.style.display = "block"; // If display is none, set it to block
      } else {
        element.style.display = "none"; // Otherwise, set it to none
      }
    }