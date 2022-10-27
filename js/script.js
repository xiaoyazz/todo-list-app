/* To-Do List Javascript File
** Created by Xiaoya Zou
** Created on Oct 27, 2022
*/ 
let task = document.getElementById('task').value;
let ctr = 0;
let btn = document.getElementById('add');

btn.addEventListener('click', () => {
    for (let i = 0; i < ctr+1; i++){
        localStorage.setItem('task' + i, task);
    }
    ctr++;
})