// console.log('hello world ')

let message = document.querySelector('#message')





//Created connections to html below

const addMovie = e => {
    console.log('e is', e)
    e.preventDefault()

    let inputField = document.querySelector('input')
    
    let movie = document.createElement('li')
    
    let movieTitle = document.createElement('span')
    
    
    //established connections between text and variables 
    
    
    movieTitle.textContent = inputField.value
    
    document.querySelector('ul').appendChild(movie)
    
    movie.appendChild(movieTitle);

    //DELETE BTN
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'

    
    movie.appendChild(deleteBtn)
    
    
   deleteBtn.addEventListener('click', deleteMovie)

   
   
   
   
   //CROSS OFF MOVIES 
   addEventListener('click',crossOffMovie)
   
}    

const deleteMovie = e =>{
    e.target.parentNode.remove()
    // console.log(`movie 1 deleted`)
    message.textContent = 'Movie has been Deleted!!!'
}

//CROSS OFF MOVIE FUNCTION

const crossOffMovie = e => {
    e.target.classList.toggle('checked')
    if(e.target.classList.contains('checked')){
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}








document.querySelector('form').addEventListener('submit', addMovie)