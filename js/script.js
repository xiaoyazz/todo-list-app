/* To-Do List Javascript File
** Created by Xiaoya Zou
** Created on Oct 27, 2022
*/

// Initialize a task array
let taskArr = JSON.parse(localStorage.getItem('tasks')) || [];
let listContent = document.getElementById('todo-list-content');

createTask = () => {
    // Save input into task array
    let taskInput = document.getElementById('task').value;
    taskArr.push(taskInput);
    localStorage.setItem('tasks', JSON.stringify(taskArr));
    let len = taskArr.length;

    // Get array value from localStorage and display on the index page

    let taskDiv = document.createElement('div');
    let taskItem = document.createElement('p');
    taskItem.textContent = taskArr[len - 1];
    taskDiv.appendChild(taskItem);
    listContent.appendChild(taskDiv);

    // Add style to new task
    taskDiv.classList.add('list-item');
    // }
}
