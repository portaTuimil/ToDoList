//Data Display:
let content = document.querySelector('.content')

function createTasks(){
    content.textContent = '';
    taskList = taskList.filter(t => t.title!=='');
    for(let i = 0; i< taskList.length; i++){
        task = taskList[i];
        let div = document.createElement('div');
        div.classList.add('task');
        
        //Title
        let hTitle = document.createElement('h1');
        hTitle.innerText = task.title;
        div.appendChild(hTitle);
        //Date
        let h2Date = document.createElement('h2');
        h2Date.innerText = task.day;
        div.appendChild(h2Date);

        //Description
        let descBtn = document.createElement('div');
        descBtn.innerText = 'Read Description';
        div.appendChild(descBtn);
        descBtn.addEventListener('click', ()=>{
            let Desc =document.querySelector('.desc');
            let modalDesc = document.querySelector('.modal-desc');
            Desc.style.display = "block";

            Desc.addEventListener('click', (e)=>{
                if(e.target.id !== 'close'){
                    Desc.style.display = "none";
                
            }});

            let descp = document.createElement('p');
            let h4title = document.createElement('h4');
            modalDesc.innerText = '';
            h4title.innerText = 'Description:';
            descp.innerText = taskList[i].description;
            modalDesc.appendChild(h4title);
            modalDesc.appendChild(descp);
        })  

        //Erase
        let eraseBtn = document.createElement('section');
        eraseBtn.classList.add(`erase`)
        eraseBtn.setAttribute("id", `erase${i}`)
        eraseBtn.innerHTML =  `<i class="fa-solid fa-trash-can fa-2x" id="erase${i}"></i>`;
        div.appendChild(eraseBtn);    

        eraseBtn.addEventListener('click', (e)=>{
            taskList.splice(e.target.id[5],1);
            localStorage.setItem('list_ToDoList_TheOdinProject', JSON.stringify(taskList));  
            createTasks(); 
        })  
        
        content.appendChild(div);
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

let storedNames = JSON.parse(localStorage.getItem('list_ToDoList_TheOdinProject'));
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
        localStorage.setItem('list_ToDoList_TheOdinProject', JSON.stringify(taskList))
    }
    storedNames = JSON.parse(localStorage.getItem('list_ToDoList_TheOdinProject'));

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