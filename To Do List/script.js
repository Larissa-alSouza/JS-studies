let taskCounter = 0;

document.getElementById('addCheckBox').addEventListener("click", function() {
    const labelText = prompt("Qual sua nova tarefa?");
    if (!labelText) return;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox' + taskCounter++;

    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id);
    label.textContent = labelText;

    const container = document.createElement('div');
    container.appendChild(checkbox);
    container.appendChild(label);

    document.getElementById('checkbox-container').appendChild(container);

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            document.getElementById('checked-container').appendChild(container);
            checkbox.disabled = true;
        } else {
            document.getElementById('checkbox-container').appendChild(container);
            checkbox.disabled = false;
        }
    });
});
