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


// DAY BUTTONS

class Button {
    constructor() {

    }

    constructBtn(day) {
        let btn = document.createElement('button');
        let btnText = document.createTextNode(day);
        btn.appendChild(btnText)

        dayBtnCont.appendChild(btn)
    }
}

const dayBtn = new Button()

dayBtn.constructBtn('Monday')
dayBtn.constructBtn('Tuesday')
dayBtn.constructBtn('Wednesday')
dayBtn.constructBtn('Thurday')
dayBtn.constructBtn('Friday')
dayBtn.constructBtn('Saturday')
dayBtn.constructBtn('Sunday')



