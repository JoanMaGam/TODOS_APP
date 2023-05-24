const ulTask = document.querySelector('#ulTask');
ulTask.className = 'row gap-1 bg-dark p-0 m-0';

// const defaultLi = `<li id="noTasks" class="liTaskCSS bg-light">
//                         <p class="pCSS">NO HAY TAREAS</p>
//                    </li>`;

// ulTask.innerHTML = defaultLi;
// printTasks(taskList, ulTask);

const form = document.querySelector('#form');
form.addEventListener('submit', getDataForm);

const selectTask = document.querySelector('#selectTask');
selectTask.addEventListener('change', selectOption);

const sT = document.querySelector('#searchTask')
sT.addEventListener('keyup', getSearch);