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

// ARRAY FOR DATA TO BE ALLOCATED

const arr = [];

// HTML SELECTED ELEMENTS

const dayBtnCont = document.querySelector('.dayBtn-container');
const timeBlockCont = document.querySelector('.timeBlock-container');
const today = document.querySelector('.today')

today.innerHTML = "Today"


// JSON OBJECT

let daysJSON = [{"day":"Sunday"},{"day":"Monday"},{"day":"Tuesday"},{"day":"Wednesday"},{"day":"Thursday"},{"day":"Friday"},{"day":"Saturday"}];

/* BUTTON OBJECT */

class Button {
    constructor(data) {
        this.data = data;
    }

    generateBtn() {
        for(let i in this.data) {
            let btn = document.createElement('button');
            btn.value = this.data[i].day
            let btnText = document.createTextNode(this.data[i].day)
            btn.appendChild(btnText)
            
            btn.addEventListener('click', () => {
                createBlock(btn.value, ['5am','6am','7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'])
            })


            dayBtnCont.appendChild(btn)
        }
    }
}

/* GENERATES BUTTONS */

const buttons = new Button(daysJSON);
buttons.generateBtn()

let createBlock = (input, array) => {
    timeBlockCont.innerHTML = '';

    for( let i in array) {

        let hour = array[i];

        let div = document.createElement('div')
        div.setAttribute('class', 'item')

        let item = document.createTextNode(hour);
        let form = document.createElement('input');
        form.placeholder = "Please Emter Your Task New";
        /* WE NEED A VALUE FOR TASK */

        let btn = document.createElement('button')
        let btnText = document.createTextNode('Sumbit')
        btn.appendChild(btnText)

        btn.addEventListener('click', () => {
            logData(hour, form.value)
        })
        
        timeBlockCont.appendChild(div)
        div.appendChild(item)
        div.appendChild(form)
        div.appendChild(btn)

    }
}

const logData = (time, task) => {
    let dataObject = {
        "time" : time,
        "task" : task
    }

    arr.push(dataObject);
    let dataJSON = JSON.stringify(dataObject);
    localStorage.setItem("array", dataJSON)
    console.log(arr)
}





