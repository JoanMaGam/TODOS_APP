function printTasks(pList, pDom) {
    pList.innerHTML = '';
    pList.forEach(task => printOneTask(task, pDom));
}