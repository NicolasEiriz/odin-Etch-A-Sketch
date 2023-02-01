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

// Repeat this 16 timex




// There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:

// float/clear
// inline-block
// flexbox
// CSS Grid

// Be careful with borders and margins, as they can adjust the size of the squares!

// “OMG, why isn’t my grid being created???”

// Did you link your CSS stylesheet?
// Open your browser’s developer tools.
// Check if there are any errors in the JavaScript console.
// Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
// Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.