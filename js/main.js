const ulTask = document.querySelector('#ulTask');
ulTask.className = 'row gap-1 bg-dark p-0 m-0';

printTasks(taskList, ulTask)

const form = document.querySelector('#form');
form.addEventListener('submit', getDataForm);