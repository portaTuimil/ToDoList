/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//Data Display:\r\nlet content = document.querySelector('.content')\r\n\r\nfunction createTasks(){\r\n    content.textContent = '';\r\n    for(let task of taskList){\r\n        let div = document.createElement('div');\r\n        div.classList.add('task');\r\n        \r\n        //Title\r\n        let hTitle = document.createElement('h1');\r\n        hTitle.innerText = task.title;\r\n        div.appendChild(hTitle);\r\n\r\n        //Description\r\n        let pDescription = document.createElement('p');\r\n        pDescription.innerText = task.description;\r\n        div.appendChild(pDescription);\r\n\r\n        //Date\r\n        let h2Date = document.createElement('h2');\r\n        h2Date.innerText = task.day;\r\n        div.appendChild(h2Date);\r\n        \r\n        content.appendChild(div);\r\n        console.log(task);    \r\n    }\r\n}\r\n\r\n//Modal Mechanism:\r\nlet taskModal = document.querySelector('.modal-generator');\r\nlet modal = document.querySelector('.modal')\r\nlet modalContent = document.querySelector('.modal-content')\r\n\r\ntaskModal.addEventListener('click', ()=>{\r\n    modal.style.display = \"block\";\r\n});\r\n\r\nmodal.addEventListener('click', (e)=>{\r\n    if(e.target.id === 'close'){\r\n        modal.style.display = \"none\";\r\n    }\r\n});\r\n\r\n//Data Storage:\r\nlet Title = document.querySelector('.title')\r\nlet Description = document.querySelector('.description')\r\nlet Day = document.querySelector('.date')\r\nlet taskList;\r\n\r\nlet storedNames = JSON.parse(localStorage.getItem('list'));\r\ntaskList = storedNames || []   //Check for null\r\ncreateTasks()\r\n\r\nfunction taskFactory(title, description, day){\r\n    this.title = title;\r\n    this.description = description;\r\n    this.day = day;\r\n}\r\n\r\nfunction storeData(){\r\n    taskList.push(new taskFactory(Title.value, Description.value, Day.value))\r\n    if(taskList.length !== 0){\r\n        localStorage.setItem('list', JSON.stringify(taskList))\r\n    }\r\n    storedNames = JSON.parse(localStorage.getItem('list'));\r\n    console.log(storedNames)\r\n    console.log(taskList)\r\n}\r\n\r\n//Data Obtention:\r\nlet form = document.querySelector('.form');\r\n\r\nform.addEventListener('submit', (e)=>{\r\n    e.preventDefault();\r\n    storeData()\r\n    createTasks()\r\n})\r\n\r\n\r\n//Other Actions:\r\n\r\nlet trash = document.querySelector('.fa-trash-can');\r\n\r\ntrash.addEventListener('click', (e)=>{\r\n    if(confirm('Are you sure you want to delete local storage?')){\r\n        localStorage.clear();\r\n        taskList = [];\r\n        createTasks()\r\n    }\r\n})\n\n//# sourceURL=webpack://webpagetemplate/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;