const taskList = [
    // {
    //     'id': 1,
    //     'title': 'Estudiar JavaScript',
    //     'priority': 'urgente',
    // },
    // {
    //     'id': 2,
    //     'title': 'Buscar ofertas de empleo',
    //     'priority': 'diaria',
    // },
    // {
    //     'id': 3,
    //     'title': 'Hacer un proyecto propio y subirlo a GitHub',
    //     'priority': 'mensual',
    // }
]

let id = (localStorage.getItem('id')) ? JSON.parse(localStorage.getItem('id')) : 1;
localStorage.setItem('id', JSON.stringify(id));
