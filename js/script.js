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

    // Display current task data from localStorage
    for (let i = 0; i < len; i++){
        // Create new task item
        let p = document.createElement('p');
        p.classList.add('list-item');

        // Create new delete button
        let btnDelete = document.createElement('button');
        btnDelete.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
        btnDelete.classList.add('btn-delete');
        btnDelete.addEventListener('click', function () {
            taskArr.splice(i, i+1);
            localStorage.setItem('tasks', JSON.stringify(taskArr));
            location.reload();
        })

        // Create new complete button
        let btnComplete = document.createElement('button');
        btnComplete.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
        btnComplete.classList.add('btn-complete');
        btnComplete.addEventListener('click', function () {
            p.style.textDecoration = 'line-through 2px'; // Need to be updated. Currently the text decoration will disapear after page reload
            p.style.color = '#43aa8b';
        })

        //console.log(taskArr[i]);
        p.innerHTML = JSON.stringify(taskArr[i]).replace(/\"/g, "");;
        div.appendChild(p);
        p.appendChild(btnDelete);
        p.appendChild(btnComplete);
    }
        listContent.appendChild(div);

    // A function to create new task and display
    createTask = () => {
        // Save input into task array
        let taskInput = document.getElementById('task');

        if (taskInput.value === '') { // Prevent from entering empty task
            alert('Please enter valid task.'); // Will update the alert with a modal
            return false;
        } else {
            taskArr.push(taskInput.value);
            localStorage.setItem('tasks', JSON.stringify(taskArr));
            let len = taskArr.length;

            //Get the new array element value from localStorage and display on the index page
            let taskDiv = document.createElement('div');
            let taskItem = document.createElement('p');
            taskItem.textContent = taskArr[len - 1];
            taskDiv.appendChild(taskItem);
            listContent.appendChild(taskDiv);

            // Add style to new task
            taskItem.classList.add('list-item');

            // Clear text input
            taskInput.value = ' ';            
        }
    }

    // A function to clear the task list
    clearList = () => {
        localStorage.clear();
        // Reload the page
        location.reload();
    }
}