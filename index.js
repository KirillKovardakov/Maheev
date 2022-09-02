window.addEventListener('DOMContentLoaded', function() {

    // Бургер меню
    document.querySelectorAll('.burger-btn-mob').forEach(function(activeBurger) {
        activeBurger.addEventListener('click', function() {
          document.querySelectorAll('#menu').forEach(function(menu) {
            menu.classList.toggle('none')
          })
        })
      })
    
    document.querySelectorAll('.cross').forEach(function(activeBurger) {
    activeBurger.addEventListener('click', function() {
        document.querySelectorAll('#menu').forEach(function(menu) {
        menu.classList.toggle('none')
        })
    })
    })
});