/* 

    GOALS 

    MAKE A WEB APPLICATION THAT
    
    - THE DAY THAT IT IS CURRENTLY WILL DISPLAY FIRST
    - THE USER HAVES THE OPTION TO GO OTHER DAYS
    - THE DAY THAT'S OPEN THE USER SEES TIME BLOCK FOR 
        EACH HOUR FROM 9AM -> 5PM
    - THE OPTION TO SAVE THE EVENT IN MEMEORY AND PERSIST
    - THREE DIFFERENT COLOR TO TELL THE USER IF THE EVENT 
        WAS IN THE PAST, PRESENT, FUTURE
    -

*/

// HTML QUERY SELECTED ELEMENTS

let btnCont = document.querySelector('.btns');
let form = document.querySelector('.form');
let today = document.querySelector('.today');

today.innerHTML = moment().format('l'); 


// ARRAY FOR DATA TO BE ALLOCATED

const initMem = () => {
    /* ARRAYS */
    let dataJSON = [];
    let dayJSON = ["monday","tuesday","wednesday","thurday","friday","saturday","sunday"];
    let timeJSON = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
    /* ALLOCATE DAYS IN MEMORY OBJECT */
    for( let i = 0; i < dayJSON.length; i++ ) {
        let obj = {
            "day" : dayJSON[i],
            "memory" : []
        }
        dataJSON.push(obj)
        /* CONSTRUCT SLOTS */
        for (let j = 0; j < timeJSON.length; j++ ) {
            let slot = {
                "time" : timeJSON[j],
                "task" : '',
                "complete": false
            }
            dataJSON[i].memory.push(slot)
        }
    } 
    return dataJSON
}

let memory = initMem();

window.onload = () => {
    if(localStorage.getItem('localDrive') != null ) {
        dataJSON = JSON.parse(localStorage.getItem('localDrive'))
        /* FUNCTION TO HASH MEMORY IN HTML*/
        readJSON(dataJSON)
        console.log(dataJSON)
    } else {
        /* FUNCTION TO BUILD APP */
        readJSON(memory)
    }
}

const readJSON = (data) => {

    for ( let key in data ) {
        buildBtns(data[key].day, data[key].memory, key, data)
    }
  
}

const buildBtns = (day, storage, index, arr) => {
    let btn = document.createElement('button');
    let btnText = document.createTextNode(day);

    btnCont.appendChild(btn)
    btn.appendChild(btnText)
    btn.addEventListener('click', () => {
        console.log( day + ' was inited')
        form.innerHTML = '';
        for(let i in storage) {
            buildForm(storage[i], index, i, arr)
        }
    })
}

const buildForm = (data, index, obj, array) => {

    let div = document.createElement('div')
    let time = document.createTextNode(data.time)

    form.appendChild(div)
    div.appendChild(time)

    let input = document.createElement('input');
    input.placeholder = array[index].memory[obj].task
    div.appendChild(input)
    
    let btn = document.createElement('button');
    let btnText = document.createTextNode('submit');
    
    btn.appendChild(btnText);
    div.appendChild(btn);

    btn.addEventListener('click', () => {
        array[index].memory[obj].task = input.value
        let dataJSON = JSON.stringify(array)
        console.log(dataJSON)
        localStorage.setItem('localDrive', dataJSON)
        
    })

}




