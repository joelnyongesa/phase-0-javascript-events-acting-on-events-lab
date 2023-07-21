// Your code here
// Move dodger left
function moveDodgerLeft(){
    // grab the dodger from the DOM
    var dodger = document.getElementById('dodger')

    // Grab the left position of the dodger and parse as integer
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers);

    // Subtract 1 from the left position.
    if(left > 0){
        var newPosition = (left - 1);
        newPosition = parseInt(newPosition) //Store the new position of dodger
        dodger.style.left = `${newPosition}px` //update the dodger position
    }
}


// Move dodger right
function moveDodgerRight(){
    // Once more, grab dodger from DOM
    var dodger = document.getElementById('dodger')

    // Same process for left, and parse it as an int stored in the newPosition
    var left = dodger.style.left.replace('px', '');
    var newPosition = parseInt(left);

    // If the left position is between 0 and 360px, increment the left position by 1 and set as new position
    if(left >= 0 &&left <=360){
        newPosition = (newPosition + 1);
        dodger.style.left = `${newPosition}px`
    }
    // console.log(`Right Numbers: ${rightNumbers}\n Left: ${left}\nNew Position: ${newPosition}`)

}


// Adding an event listener.
document.addEventListener('keydown', e => {
    // If the left arrow key is pressed...
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    // If the right arrow jey is pressed: 
    else if (e.key === "ArrowRight"){
        moveDodgerRight();
        // console.log("Right Key")
    }
})