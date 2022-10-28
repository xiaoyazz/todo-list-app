/* To-Do List Javascript File
** Created by Xiaoya Zou
** Created on Oct 27, 2022
*/

loadData = () => {
    // Initialize a task array
    let taskArr = JSON.parse(localStorage.getItem('tasks')) || [];
    let listContent = document.getElementById('todo-list-content');
    let len = taskArr.length;
    let div = document.createElement('div');
    for (let i = 0; i < len; i++){
        let p = document.createElement('p');
        console.log(taskArr[i]);
        p.innerHTML = JSON.stringify(taskArr[i]).replace(/\"/g, "");;
        div.appendChild(p);
        p.classList.add('list-item');
    }
        listContent.appendChild(div);

    // Create new task and display
    createTask = () => {
    // Save input into task array
    //localStorage.clear();
    let taskInput = document.getElementById('task').value;
    taskArr.push(taskInput);
    localStorage.setItem('tasks', JSON.stringify(taskArr));
    let len = taskArr.length;

    //Get array value from localStorage and display on the index page

    let taskDiv = document.createElement('div');
    let taskItem = document.createElement('p');
    taskItem.textContent = taskArr[len - 1];
    taskDiv.appendChild(taskItem);
    listContent.appendChild(taskDiv);

    // Add style to new task
    taskItem.classList.add('list-item');
    // }
    }

}