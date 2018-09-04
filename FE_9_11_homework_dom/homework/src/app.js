// Create a new list item when clicking on the "Add" button

function addTask() {
    const limitValue = 10;
    let li = document.createElement('li');
    let inputValue = document.getElementById('task').value;
    let taskText = document.createTextNode(inputValue);
    li.appendChild(taskText);
    if (inputValue === '') {
        alert('Write something!');
    } else if (document.getElementById('tasks').getElementsByTagName('li').length >= limitValue) {
        setLimit();
    } else {
        document.getElementById('tasks').appendChild(li);
    }
    document.getElementById('task').value = '';

    let removeButton = document.createElement('button');
    let removeIcon = document.createElement('i');
    let removeTxt = document.createTextNode('delete');
    removeIcon.appendChild(removeTxt);
    removeButton.appendChild(removeIcon);
    removeIcon.className = 'material-icons';
    removeButton.className = 'remove';

    li.appendChild(removeButton);

    li.className = 'movable';

    li.setAttribute('draggable', 'true');
    li.setAttribute('ondragstart', 'dragStarted(event)');
    li.setAttribute('ondragover', 'draggingOver(event)');
    li.setAttribute('ondrop', 'dropped(event)');

    removeButton.onclick = removeTask;

}

// Click on a delete button to remove the current list item

function removeTask(e) {
    e.currentTarget.parentNode.remove();
}


// Add 'checked' class when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.add('checked');
    }
}, false);

// Limit the number of tasks to 10

function setLimit() {
    const index = 1;
    let root = document.querySelector('#root');
    let warning = document.createElement('p');
    let warningTxt = document.createTextNode('Maximum items per list are created');
    let taskInput = root.children[index];
    warning.appendChild(warningTxt);
    root.insertBefore(warning, taskInput);

    document.getElementById('task').disabled = true;
    document.getElementById('add').disabled = true;

    return warning;

}

// drag&drop functions

let source;

function dragStarted(e) {
    source = e.target;
    e.dataTransfer.setData('text/plain', e.target.innerHTML);
    e.dataTransfer.effectAllowed = 'move';
}

function draggingOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function dropped(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.localName === 'li') {
        source.innerHTML = e.target.innerHTML;
        e.target.innerHTML = e.dataTransfer.getData('text/plain');
    }
}