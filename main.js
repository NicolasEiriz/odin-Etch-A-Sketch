// // Create a webpage with a 16x16 grid of square divs.

// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!

// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

//Create the main container

let container = document.createElement('div')


//Append to the body

document.body.appendChild(container)

//Add the clase 'container' to give them some style

container.classList = 'container'


//Create a row 16 times with 16 divs inside it

let gridNumber = Number(prompt('select the number of the board'))


for(let i = 0; i < gridNumber; i++){
  
  //Create a row and assigned the row class
  
    let row = document.createElement('div')

    container.appendChild(row)

    row.classList = 'row'
 
  //Create the divs inside the row

  for(let j = 0; j < gridNumber; j++){

    let divs = document.createElement('div')

    divs.classList = 'divs'

    row.appendChild(divs)

  }
}

//Set up a hover effect so the grid divs change the color when your mouse passes over them

//Select all the grid divs -> this is a node list (similar to an array) so we can use forEach method

let gridDivs = document.querySelectorAll('.divs')

//add an event listener to each one of them

gridDivs.forEach(div=>{
  div.addEventListener('mouseenter', (e)=>{
    e.target.style.backgroundColor = 'red'
  })
})


//Add a button to the top of the screen

let button = document.createElement('button')

button.textContent = 'click'
button.style.margin = '0 0 10px 0'

document.body.insertBefore(button, container)




//Send the user a popup asking for the number of squares per side for the new grid

let userChoice 

button.addEventListener('click', ()=>{
  gridNumber = Number(prompt('what number do you want'))

})

//Once entered the existing grid should be removed and a new grid should be generated in the same total space as before

