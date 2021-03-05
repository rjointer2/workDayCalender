
// HTML QUERY SELECTED ELEMENTS

let btnCont = document.querySelector('.btns');
let form = document.querySelector('.form');
let tdy = document.querySelector('.today');

// ARRAY FOR DATA TO BE ALLOCATED

const initMem = () => {
    /* ARRAYS */
    let dataJSON = [];
    let dayJSON = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let timeJSON = ['09am','10am','11am','12pm','1pm‏‏‎ ‎‏‏‎ ‎','2pm ‎‏‏‎ ‎','3pm ‎‏‏‎ ‎','4pm ‎‏‏‎ ‎','5pm ‎‏‏‎ ‎'];
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
                "complete": 'pending',
                "daySaved": ''
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
    } else {
        /* FUNCTION TO BUILD APP */
        readJSON(memory)
    }
}

const readJSON = (data) => {
    // SEND THE JSON OBJECT'S DAY, MEMORY, AND THE INDEX OF THE ARRAY
    // AND THE ARRAY ITSELF
    for ( let key in data ) {
        buildBtns(data[key].day, data[key].memory, key, data)
    }
}

const buildBtns = (day, storage, index, arr) => {
    let btn = document.createElement('button');
    let btnText = document.createTextNode(day);

    let tdy = moment().format('dddd');
    
    // THE CODE DOES REPEAT IT BELOW
    // MAY FIX THIS LATER

    if( tdy == day ) {
        btn.style.backgroundColor = 'gray';
        console.log( day + ' was inited')
        form.innerHTML = '';
        for(let i in storage) {
            buildForm(storage[i], index, i, arr)
        }
    }

    btnCont.appendChild(btn)
    btn.appendChild(btnText)
    btn.addEventListener('click', () => {
        console.log( day + ' was inited');
        form.innerHTML = '';
        for(let i in storage) {
            buildForm(storage[i], index, i, arr)
        }
    })
}

const buildForm = (data, index, obj, array) => {

    let dateToday = moment().format("MMMM Do YYYY");  

    // CREATES HTML ELEMENTS

    let dateHTML = document.querySelector('.tdyDate')
    dateHTML.innerHTML = 'Today is ' + dateToday + '<br><br>' + 'Plan your ' + array[index].day;

    let div = document.createElement('div')
    let time = document.createTextNode(data.time)

    form.appendChild(div)
    div.appendChild(time)

    let input = document.createElement('textarea');
    input.placeholder = "Write Task Here"

    div.appendChild(input)
    
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Save Task');
    
    btn.appendChild(btnText);
    div.appendChild(btn);

    let taskCont = document.createElement('div');
    let taskInput = document.createElement('textarea');
    let taskText = document.createTextNode('Task ‎‏‏‎ ');
    taskCont.setAttribute('class', 'item')

    div.appendChild(taskCont);
    taskCont.appendChild(taskText);
    taskCont.appendChild(taskInput);
    taskInput.placeholder = 'Task will be saved here'
    taskInput.value = array[index].memory[obj].task;

    let taskBtn = document.createElement('button');
    taskBtn.textContent = 'Completed?';
    taskCont.appendChild(taskBtn)

    // CHECKS THE DAY'S DIFFERENCE FROM CREATED TO TODAY
    // IF A WEEK PASSED, THE TASK IS IMCOMPLETE


    let checkStatus = (day) => {

        let nowTdy = moment().format('L');

        let sd = new Date(day);
        let td = new Date(nowTdy);

        let dif = td.getTime() - sd.getTime();

        let mid = 1000 * 3600 * 24;

        return dif/mid
    }

    // CHANGES THE BUTTONS COLORS DEPENDING ON THE TASK'S STATUS

    if( checkStatus(array[index].memory[obj].daySaved) === 7 ) {
        array[index].memory[obj].complete = false
    }

    if( array[index].memory[obj].complete == 'pending' ) {
        taskBtn.style.backgroundColor = 'none';
    } else if( array[index].memory[obj].complete === true )  {
        taskBtn.textContent = 'Completed!'
        taskBtn.style.backgroundColor = 'green'
    } else {
        taskBtn.textContent = 'Not Complete!'
        taskBtn.style.backgroundColor = 'red'
    }

    /* LOGS THE TIME CREATED */

    let whenSaved = () => {
        let time = moment().format('LT'); 
        let date = moment().format('LL');

        let status = ' : task created at ' + time + ', ' + date;

        return status
    }

    // SAVE THE DATE AND ALLOCATES TO LOCAL STORAGE

    btn.addEventListener('click', () => {
        array[index].memory[obj].daySaved = moment().format('L');
        array[index].memory[obj].task = input.value + whenSaved();
        array[index].memory[obj].complete = 'pending';
        taskInput.placeholder = 'Task saved: ' + input.value;
        let dataJSON = JSON.stringify(array)
        console.log(dataJSON)
        localStorage.setItem('localDrive', dataJSON)
        
    })

    // IF USER CLICKS THEN THE TASK IS COMPLETED

    taskBtn.addEventListener('click', () => {
        taskBtn.style.backgroundColor = 'green'
        array[index].memory[obj].complete = true
        let dataJSON = JSON.stringify(array)
        console.log(dataJSON)
        localStorage.setItem('localDrive', dataJSON)
    })
    
}
