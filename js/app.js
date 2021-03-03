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


const dayJSON = [{"day":"Sunday","memory":[]},{"day":"Monday","memory":[]},{"day":"Tuesday","memory":[]},{"day":"Wednesday","memory":[]},{"day":"Thursday","memory":[]},{"day":"Friday","memory":[]},{"day":"Saturday","memory":[]}];

 
const btnCont = document.querySelector('.btns');
const form = document.querySelector('.form')

class App {
    constructor(args) {
        this.args = args;
    }

    init() {

        for( let arg in this.args ) {


            /* BUTTONS GENERATED */

            let btn = document.createElement('button');
            let btnText = document.createTextNode(this.args[arg].day);
            btn.appendChild(btnText)
            btnCont.appendChild(btn)
            
            btn.addEventListener('click', () => {
                /* SEND THE DAY AND ARRAY ASSICOATED */
                console.log(this.args[arg].day + " was loaded")
                loadForm(this.args[arg])
            })

        }
    }
}

const loadForm = (day) => {

    const hours = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
    console.log(day.memory)
    form.innerHTML = '';

    for ( let hour in hours ) {

        time = document.createTextNode(hours[hour])

        let div = document.createElement('div')
        let btn = document.createElement('button')
        let input = document.createElement('input');

        div.setAttribute('class', 'item')
        btnText = document.createTextNode('submit')
        btn.appendChild(btnText)

        form.appendChild(div)
        div.appendChild(time)
        div.appendChild(input)
        div.appendChild(btn)


        
    }
    
}

/* 



let input = document.createElement('input');
form.appendChild(input)


*/

const app = new App(dayJSON)
app.init()





