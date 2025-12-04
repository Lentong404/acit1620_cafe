let hamenuButton = document.getElementById("nav_button")

hamenuButton.addEventListener("click",() =>{
    let navMenu = document.getElementById("nav-toggle")
    navMenu.classList.toggle("show-menu")
    hamenuButton.classList.toggle("change")
});

if (window.location.pathname === '/menu.html') {
    document.getElementById("drinkButton").addEventListener("click", () =>{
        let drinks = document.getElementById('showDrinks')
        let food = document.getElementById('showFood')
        
        if (drinks.style.display === 'none'){
            drinks.style.display = 'flex';
            drinks.style.flexDirection = 'column';
            food.style.display = 'none';
        } 
        else {
            drinks.style.display = 'none';
        }
    });
    
    document.getElementById("foodButton").addEventListener("click", () =>{
        let drinks = document.getElementById('showDrinks')
        let food = document.getElementById('showFood')
        
        if (food.style.display === 'none'){
            drinks.style.display = 'none';
            food.style.display = 'flex';
            food.style.flexDirection = 'column';
        } 
        else {
            food.style.display = 'none';
        }
    });

}



