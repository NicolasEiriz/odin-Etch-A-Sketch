// // Create a webpage with a 16x16 grid of square divs.

// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!

// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

//Create the main container

let divContainer = document.createElement('div')
divContainer.classList = 'container'


//Append to the body

document.body.appendChild(divContainer)


//Create 16 divs


let squareDivs = 16



for(let i = 1; i <= squareDivs * squareDivs ; i++){

  let divChild = document.createElement('div')
  divChild.classList = 'divs'
  divContainer.appendChild(divChild)
  
  if(i % squareDivs === 0 ){
    

    let breakChild = document.createElement('div')
    
    breakChild.classList = 'break'

    divContainer.appendChild(breakChild)
    
  } 
}

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

let divs = document.querySelectorAll('.divs')


divs.forEach(div =>{
  div.addEventListener('mouseenter', (e)=>{
    e.target.classList.add('divSelected')
  })
})

// Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
// There are multiple ways to change the color of the divs, including:
// adding a new class to the div.
// changing the div’s background color using JavaScript.