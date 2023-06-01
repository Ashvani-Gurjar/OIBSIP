let taskName = document.querySelector('.taskName')

let detail = document.querySelector('.detail')

var arr = [];

function addTodo(){
    

    let todoObj = {
        task : taskName.value,
        detail : detail.value   
    }
    let x = []
    x = JSON.parse(localStorage.getItem('todo')) || [];
    x.push(todoObj);
    taskName.value="";
    detail.value="";


    localStorage.setItem("todo", JSON.stringify(x))

}