document.getElementById('addCheckBox').addEventListener("click", function(){
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox' + new Date().getTime();

    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id);

    const labelText = prompt("Qual sua nova tarefa?");
    label.textContent = labelText;

    const container = document.createElement('div');
    container.appendChild(checkbox);
    container.appendChild(label);

    document.getElementById('checkbox-container').appendChild(container);

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            const checkedContainer = document.createElement('div');
            checkedContainer.textContent = labelText;
            document.getElementById('checkbox-container').appendChild(checkedContainer);
            container.remove();
        }
    });
});