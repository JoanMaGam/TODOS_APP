
function printTasks(pList, pDom) {
    pDom.innerHTML = '';
    pList.forEach(task => printOneTask(task, pDom));
}

{/* <li class="liTaskCSS">
    <p id="task" class="pCSS">Lorem ent incidunt corrupti quos nesciunt.</p>
    <button id="btnDelete" class="btnCSS">Eliminar</button>
</li>  */}

function printOneTask(pTask, pDom) {
    console.log(pTask.title);
    const li = document.createElement('li');
    li.classList.add('liTaskCSS');

    const p = document.createElement('p');
    p.id = 'task';
    p.classList.add('pCSS');
    p.textContent = pTask.title;


    const btnDel = document.createElement('button');
    btnDel.id = 'btdDelete';
    btnDel.classList.add('btnCSS');
    btnDel.textContent = 'Eliminar';

    li.append(p, btnDel);

    pDom.appendChild(li);

}