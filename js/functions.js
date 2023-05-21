
function printTasks(pList, pDom) {
    pDom.innerHTML = '';
    pList.forEach(task => printOneTask(task, pDom));
}

{/* <li class="liTaskCSS">
    <p id="task" class="pCSS">Lorem ent incidunt corrupti quos nesciunt.</p>
    <button id="btnDelete" class="btnCSS">Eliminar</button>
</li>  */}

function printOneTask(pTask, pDom) {

    const li = document.createElement('li');
    li.classList.add('liTaskCSS');
    // if (selectPriority.value === 'urgent') {
    //     li.classList.add('.urgent')
    // }
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
    btnDel.addEventListener('click', deleteTask)

    li.append(p, btnDel);

    pDom.appendChild(li);

}

// const selectPriority = document.querySelector('#selectPriority')
// selectPriority.addEventListener('change', aplyPriority)
// console.log(selectPriority.value)
// function aplyPriority(event) {
//     let priority = event.target.value
//     console.log(priority);
//     switch (priority) {
//         case 'defaultOption':
//             return alert('Elige una prioridad')
//             break;
//         case 'urgent':
//             return '.urgente'
//             break;
//         case 'daily':
//             return '.diaria'
//             break;
//         case 'monthly':
//             return '.mensual'
//             break;
//     }
// }

// let priority = aplyPriority(event)

// btnSave.addEventListener('click', addTask);

// console.log(inputTask.value);

// function addTask(event) {
//     const filteredList = {
//         'id': taskList.length + 1,
//         'title': inputTask.value,
//         'priority': selectPriority.value
//     };

//     taskList.push(filteredList);


//     // id++
//     console.log(taskList)
//     printOneTask()
// }
// addTask();

function addTask(pTask, pList) {
    pList.push(pTask);
    printOneTask(pTask, ulTask);
    id++
}



function getDataForm(event) {
    event.preventDefault();

    console.log(event.target.inputTask.value);
    console.log(event.target.selectPriority.value);

    const newTask = {
        id: id,
        title: event.target.inputTask.value,
        priority: event.target.selectPriority.value
    }
    console.log(newTask);
    addTask(newTask, taskList);
    console.log(taskList);

    form.reset();
}

function deleteTask(event) {
    //Borrado interfaz
    const liDel = event.target.parentNode;
    liDel.parentNode.removeChild(liDel);

    console.log(taskList);
    //Borrado array
    let newList = deleteArray(taskList);
    console.log(newList);

}
