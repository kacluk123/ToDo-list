document.addEventListener('DOMContentLoaded', function(){
var addTask = document.querySelector('#addTaskButton');
var taskInput = document.querySelector('#taskInput');
var remove = document.querySelector('#removeFinishedTasksButton');
var taskList = document.querySelector('#taskList');
var counterInner = document.querySelector('.counter');
var counter = 0;

addTask.addEventListener('click', function(){
    var inP = taskInput.value;
    taskInput.value = "";

    if (inP.length >= 5 && inP.length <= 50)
    {
        counter++;
        counterInner.innerText =parseInt(counter);

        var newLi = document.createElement('li');
        newLi.innerHTML = "<h1>" + inP + "</h1><div><button>Delete</button> <button>Complete</button></div>"
        taskList.appendChild(newLi);
        var btns = newLi.querySelectorAll('button');

        btns[1].addEventListener('click', function () {
            if (newLi.style.backgroundColor === 'red') {
                newLi.style.backgroundColor = null;
                counter++

                counterInner.innerText = parseInt(counter);
            } else {
                newLi.style.backgroundColor = 'red';
                counter--

                counterInner.innerText = parseInt(counter);
            }

        })
        btns[0].addEventListener('click', function () {
            this.parentElement.parentElement.parentElement.removeChild(newLi);
            if (newLi.style.backgroundColor === 'red'){
                counter = counter;
            } else {
                counter--
                counterInner.innerText =parseInt(counter);
            }


        })

    } else {
        alert('Number of characters must be longer than 5 and shorther than 50!')
    }


})
remove.addEventListener('click', function(){
    var taskListChildren = taskList.querySelectorAll('li');
    for (var i = 0; taskListChildren.length > i; i++){
       if (taskListChildren[i].style.backgroundColor === 'red'){
           taskListChildren[i].parentElement.removeChild(taskListChildren[i]);

       }
    }


})





})
