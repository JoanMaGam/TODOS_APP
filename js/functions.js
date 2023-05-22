
function printTasks(pList, pDom) {
    pDom.innerHTML = '';
    pList.forEach(task => printOneTask(task, pDom));
}

{/* <li class="liTaskCSS">
    <p id="task" class="pCSS">Lorem ent incidunt corrupti quos nesciunt.</p>
    <button id="btnDelete" class="btnCSS">Eliminar</button>
</li>  */}

function printOneTask(pTask, pDom) {
    //este if() controla que cuando no hay tareas y añadimos una tarea, no se pinte el defaultLi
    if (pDom.innerHTML === defaultLi) {
        pDom.innerHTML = '';
    }

    const li = document.createElement('li');
    li.classList.add('liTaskCSS');

    if (pTask.priority === 'urgente') {
        li.classList.add('urgente');
    } else if (pTask.priority === 'diaria') {
        li.classList.add('diaria');
    } else if (pTask.priority === 'mensual') {
        li.classList.add('mensual');
    }

    const p = document.createElement('p');
    p.id = 'task';
    p.classList.add('pCSS');
    p.textContent = pTask.title;


    const btnDel = document.createElement('button');
    btnDel.id = 'btdDelete';
    btnDel.classList.add('btnCSS');
    btnDel.textContent = 'Eliminar';
    btnDel.addEventListener('click', deleteTask);
    btnDel.dataset.id = pTask.id;

    li.append(p, btnDel);

    pDom.appendChild(li);
}


function addTask(pTask, pList) {
    pList.push(pTask);
    // localStorage.setItem('taskList', JSON.stringify(pList));
    printOneTask(pTask, ulTask);
    id++;
    console.log(pList);
}



function getDataForm(event) {

    event.preventDefault();

    if ((event.target.inputTask.value.length !== 0 && event.target.selectPriority.value === 'defaultOption') || (event.target.inputTask.value === '' || event.target.selectPriority === 'defaultOption') || (event.target.inputTask.value === '' && event.target.selectPriority === 'defaultOption')) {
        form.reset();
        return alert('Los campos no pueden estar vacíos')

    } else {
        console.log(event.target.inputTask.value);
        console.log(event.target.inputTask.value.length);
        console.log(event.target.selectPriority.value);

        const newTask = {
            id: id,
            title: event.target.inputTask.value,
            priority: event.target.selectPriority.value
        }

        addTask(newTask, taskList);

        form.reset();
    }
}

function deleteTask(event) {
    //Borrado interfaz
    const liDel = event.target.parentNode;
    liDel.parentNode.removeChild(liDel);

    //Borrado array
    deleteArray(parseInt(event.target.dataset.id), taskList);
    console.log(taskList);

    //este if() controla que cuando no haya tareas se pinte el defaultLi
    if (taskList.length === 0) {
        ulTask.innerHTML = defaultLi;
    }
    // console.log(event.target.dataset.id);
    // event.target.dataset.id = 0 //es necessario que el id se reinicie desde 0 si borras todas las tareas?
}

function deleteArray(pId, pList) {
    let position = pList.findIndex(task => task.id === pId);
    if (position !== -1) {
        pList.splice(position, 1);
    }
}

function selectOption(event) {
    event.preventDefault();

    switch (event.target.value) {
        case 'urgente':
            filterByPriority(taskList, event.target.value);
            break;
        case 'diaria':
            filterByPriority(taskList, event.target.value);
            break;
        case 'mensual':
            filterByPriority(taskList, event.target.value);
            break;
        default:
            printTasks(taskList, ulTask);
            break;
    }
}


function filterByPriority(pList, pPriority) {
    let results = pList.filter(task => task.priority === pPriority);
    printTasks(results, ulTask);
}

function getSearch(event) {
    let search = event.target.value
    console.log(search);
    let tasks = searchTask(search, taskList)
    console.log(tasks);
    // if (event.key === 'Space') {
    printTasks(tasks, ulTask)


    // }
}
function searchTask(pWord, pList) {
    return pList.filter(task => task.title.toLowerCase().includes(pWord.toLowerCase()));
}
