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


let dayJSON = [{"day":"Sunday","memory":[]},{"day":"Monday","memory":[]},{"day":"Tuesday","memory":[]},{"day":"Wednesday","memory":[]},{"day":"Thursday","memory":[]},{"day":"Friday","memory":[]},{"day":"Saturday","memory":[]}];

 
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
    form.innerHTML = '';

    for ( let i = 0; i < hours.length; i++ ) {

        time = document.createTextNode(hours[i])

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

        let obj = {
            "time" : hours[i],
            "task" : ""
        }

        day.memory.push(obj)

        btn.addEventListener('click', () => {
            obj.task = input.value
            console.log(dayJSON)
            saveData()
        })

        
    }

    
}

const saveData = (data, h, t) => {


    let stringData = JSON.stringify(dayJSON)
    localStorage.setItem('storage', stringData)
    
    let grabData = localStorage.getItem('storage');
    let parseData = JSON.parse(grabData);
    dayJSON = parseData
    console.log(parseData)


    
}




const app = new App(dayJSON)
app.init()





