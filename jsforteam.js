function filterCars(category) {
    var cars = document.getElementsByClassName('team');
    if (category === 'all') {
      for (var i = 0; i < cars.length; i++) {
        cars[i].style.display = 'block';
      }
    } else {
      for (var i = 0; i < cars.length; i++) {
        if (cars[i].classList.contains(category)) {
          cars[i].style.display = 'block';
        } else {
          cars[i].style.display = 'none';
        }
      }
    }
  }