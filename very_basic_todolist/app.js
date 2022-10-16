
let taskBtn = document.querySelector('.add-btn').addEventListener('click', onClick)

function onClick(e) {
    val = e
    let taskInput = document.querySelector('#userinput').value;
    let tasks = [];
    if (localStorage.getItem('tasks') === null) {

        tasks = [];

    } else {

        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(taskInput);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Tasks saved.')
    

    
    location.reload();
}

let tasks = JSON.parse(localStorage.getItem('tasks'));

var str = '<ul>'
tasks.forEach(function(slide) {
    str += '<li>'+ slide + '<a class="del" href="">X</a></li>';
  }); 

str += '</ul>';
document.getElementById("todolist").innerHTML = str;
console.log(tasks);


// Delete button









