// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    state.mushrooms ? oneMushroom.style.visibility = 'visible' : oneMushroom.style.visibility = 'hidden'
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    state.greenPeppers ? onePepper.style.visibility = 'visible' : onePepper.style.visibility = 'hidden'
  })

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce')
  state.whiteSauce ? sauce.classList.add('sauce-white') : sauce.classList.remove('sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust')
  state.glutenFreeCrust ? crust.classList.add('crust-gluten-free') : crust.classList.remove('crust-gluten-free')
}

//Buttons
const pepBtn = document.querySelector('.btn.btn-pepperoni')
const mushroomsBtn = document.querySelector('.btn.btn-mushrooms')
const peppersBtn = document.querySelector('.btn.btn-green-peppers')
const sauceBtn = document.querySelector('.btn.btn-sauce')
const crustBtn = document.querySelector('.btn.btn-crust')

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  state.pepperoni ? pepBtn.classList.add('active') : pepBtn.classList.remove('active')
  state.mushrooms ? mushroomsBtn.classList.add('active') : mushroomsBtn.classList.remove('active')
  state.greenPeppers ? peppersBtn.classList.add('active') : peppersBtn.classList.remove('active')
  state.whiteSauce ? sauceBtn.classList.add('active') : sauceBtn.classList.remove('active')
  state.glutenFreeCrust ? crustBtn.classList.add('active') : crustBtn.classList.remove('active')
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = basePrice
  const priceList = document.querySelector('.price-list')
  const totalElem = document.querySelector('.total')

  priceList.innerHTML = ""

  for (ingredient in ingredients) {
    if (state[ingredient]) {
      total += ingredients[ingredient].price

      priceList.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
    }
  }
  totalElem.innerHTML = "$" + total
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
pepBtn.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
mushroomsBtn.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
peppersBtn.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
sauceBtn.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
crustBtn.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})