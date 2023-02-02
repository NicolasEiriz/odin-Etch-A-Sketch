// Create a webpage with a 16x16 grid of square divs.

// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!

// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).


//Create a row 16 times with 16 divs inside it

function makeGrid(nums = 16){

  //Create the main container

  let container = document.createElement('div')


  //Append to the body

  document.body.appendChild(container)

  //Add the class 'container' to give them some style

  container.classList = 'container'


  for(let i = 0; i < nums; i++){
  
    //Create a row and assigned the row class
  
    let row = document.createElement('div')

    container.appendChild(row)

    row.classList = 'row'
 
    //Create the divs inside the row

    for(let j = 0; j < nums; j++){

      let box = document.createElement('div')

      box.classList = 'divs'

      //insert the box in the row

      row.appendChild(box)

    }

    //Set up a hover effect so the grid divs change the color when your mouse passes over them
    
    let gridDivs = document.querySelectorAll('.divs')

    //add an event listener to each one of them

    gridDivs.forEach(div=>{

      div.addEventListener('mouseenter', (e)=>{
    

    //white color
    e.target.style.backgroundColor = `white`
      })
    })
  }
}



//Select all the grid divs -> this is a node list (similar to an array) so we can use forEach method


let button = document.querySelectorAll('button')


button.forEach(btn=>{

  btn.addEventListener('click', (e)=>{  

    if(e.target.className === 'newGrid'){

      //Send the user a popup asking for the number of squares per side for the new grid

      let userInput = Number(value.value)

      //Once entered the existing grid should be removed and a new grid should be generated in the same total space as before

      document.querySelector('.container').remove()

      makeGrid(userInput)
    }
    
    else if(e.target.className === 'rainbow'){

      //Select all the grid divs -> this is a node list (similar to an array) so we can use forEach method

      let gridDivs = document.querySelectorAll('.divs')

      //add an event listener to each one of them

      gridDivs.forEach(div=>{

        div.addEventListener('mouseenter', (e)=>{
    
        //random color
        
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*300)} ${Math.floor(Math.random()*300)} ${Math.floor(Math.random()*300)})`
      
        })
      })

    }

      else if(e.target.className === 'clear'){

        location.reload()
      }

  })
})

//Call the function to make first grid square

makeGrid()

//TODO

//Convert the newgrid button in something nicer 

//Create a input with a range type to select a number between 0 and 100

let input = document.querySelector('input')
let value = document.querySelector('#value')

value.textContent = input.value

input.addEventListener('input', (e)=>{
  value.textContent = e.target.value
})

range.value = document.querySelector('input').value