const inputText = document.querySelector('.text-input');
const inputButton = document.querySelector('.add_button');
const list = document.querySelector('.todo-container ul');

inputButton.addEventListener('click', (insertevent) => {
    if (inputText.value === "") {

    alert("Por favor, digite uma tarefa para ser adicionada à lista.");

    }   else if (inputText.value != "") {
        insertevent.preventDefault();
        const add_item = document.createElement('li');
        add_item.innerHTML = inputText.value;
        list.appendChild(add_item);
        
        const one_span = document.createElement ('span');
        one_span.innerHTML = 'x';
        add_item.appendChild(one_span);
    
        const erase_item = document.querySelectorAll ('span')
        for (let i = 0; i < erase_item.length; i++) {
            erase_item[i].addEventListener('click', () => {
            erase_item[i].parentElement.style.display = "none";
        });
            
        const two_span = document.createElement ('checkbox');
        two_span.innerHTML = '✓';
        add_item.appendChild(two_span);

        const check_item = document.querySelectorAll ('checkbox')   
        for (let i = 0; i < check_item.length; i++) { 
        check_item[i].addEventListener('click', () => {
            document.getElementById("checkbox").checked = true;
            check_item[i].parentElement.style.textDecoration = "line-through";
            check_item[i].parentElement.style.color = "red";
        for (let i = 0; i < check_item.length; i++) {
        check_item[i].addEventListener('click', () => {
            document.getElementById('checkbox').checked = false;
            check_item[i].parentElement.style.textDecoration = "none";
            check_item[i].parentElement.style.color = "black";
        });
    }
});
}
        }
    }

    inputText.value = ""});
