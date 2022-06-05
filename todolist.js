const inputText = document.querySelector('.text-input');
const inputButton = document.querySelector('.add_button');
const list = document.querySelector('.todo-container ul');

inputButton.addEventListener('click', (insertevent) => {
    if (inputText.value === "") {

    alert("Por favor, digite uma tarefa para ser adicionada à lista.");

}  else if (inputText.value != "") {
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
    inputText.value = "";
    }
}
});