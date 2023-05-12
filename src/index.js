//Data Display:
let content = document.querySelector('.content')

function createTasks(){
    content.textContent = '';
    for(let task of taskList){
        let div = document.createElement('div');
        div.classList.add('task');
        
        //Title
        let hTitle = document.createElement('h1');
        hTitle.innerText = task.title;
        div.appendChild(hTitle);

        //Description
        let pDescription = document.createElement('p');
        pDescription.innerText = task.description;
        div.appendChild(pDescription);

        //Date
        let h2Date = document.createElement('h2');
        h2Date.innerText = task.day;
        div.appendChild(h2Date);
        
        content.appendChild(div);
        console.log(task);    
    }
}

//Modal Mechanism:
let taskModal = document.querySelector('.modal-generator');
let modal = document.querySelector('.modal')
let modalContent = document.querySelector('.modal-content')

taskModal.addEventListener('click', ()=>{
    modal.style.display = "block";
});

modal.addEventListener('click', (e)=>{
    if(e.target.id === 'close'){
        modal.style.display = "none";
    }
});

//Data Storage:
let Title = document.querySelector('.title')
let Description = document.querySelector('.description')
let Day = document.querySelector('.date')
let taskList;

let storedNames = JSON.parse(localStorage.getItem('list'));
taskList = storedNames || []   //Check for null
createTasks()

function taskFactory(title, description, day){
    this.title = title;
    this.description = description;
    this.day = day;
}

function storeData(){
    taskList.push(new taskFactory(Title.value, Description.value, Day.value))
    if(taskList.length !== 0){
        localStorage.setItem('list', JSON.stringify(taskList))
    }
    storedNames = JSON.parse(localStorage.getItem('list'));
    console.log(storedNames)
    console.log(taskList)
}

//Data Obtention:
let form = document.querySelector('.form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    storeData()
    createTasks()
})


//Other Actions:

let trash = document.querySelector('.fa-trash-can');

trash.addEventListener('click', (e)=>{
    if(confirm('Are you sure you want to delete local storage?')){
        localStorage.clear();
        taskList = [];
        createTasks()
    }
})