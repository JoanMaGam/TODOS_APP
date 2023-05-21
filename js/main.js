const ulTask = document.querySelector('#ulTask');
ulTask.className = 'row gap-1 bg-dark p-0 m-0';

const defaultLi = `<li id="noTasks" class="liTaskCSS bg-light">
                        <p class="pCSS">NO HAY TAREAS</p>
                   </li>`;

printTasks(taskList, ulTask);

const form = document.querySelector('#form');
form.addEventListener('submit', getDataForm);