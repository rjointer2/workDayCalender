/* 

    GOALS 

    MAKE A WEB APPLICATION THAT
    
    - DISPLAY A DAY IN THE WEEK
    - THE DAY THAT IT IS CURRENTLY WILL DISPLAY FIRST
    - THE USER HAVES THE OPTION TO GO OTHER DAYS
    - THE DAY THAT'S OPEN THE USER SEES TIME BLOCK FOR 
        EACH HOUR FROM 9AM -> 5PM
    - THE OPTION TO SAVE THE EVENT IN MEMEORY AND PERSIST
    - THREE DIFFERENT COLOR TO TELL THE USER IF THE EVENT 
        WAS IN THE PAST, PRESENT, FUTURE
    -

*/

// HTML SELECTED ELEMENTS

const dayBtnCont = document.querySelector('.dayBtn-container');
const timeBlockCont = document.querySelector('.timeBlock-container');
const today = document.querySelector('.today')

today.innerHTML = "Today"


// DAY BUTTONS

class Button {
    constructor() {

    }

    constructBtn(day) {
        let btn = document.createElement('button');
        let btnText = document.createTextNode(day);
        btn.appendChild(btnText)

        return dayBtnCont.appendChild(btn)
    }
}

const dayBtn = new Button()

let monday = dayBtn.constructBtn('Monday')
let tuesday = dayBtn.constructBtn('Tuesday')
let wednesday = dayBtn.constructBtn('Wednesday')
let thurday = dayBtn.constructBtn('Thurday')
let friday = dayBtn.constructBtn('Friday')
let saturday = dayBtn.constructBtn('Saturday')
let sunday = dayBtn.constructBtn('Sunday')



/* TIME BLOCKS */

monday.addEventListener('click', () => {
    
})




