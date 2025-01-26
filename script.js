document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskName = document.getElementById('taskName').value;
    const taskLabel = document.getElementById('taskLabel').value;
    const taskList = document.getElementById('taskList');

    if (taskName) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <span>${taskName} - <strong>${taskLabel}</strong></span>
            <button class="completeBtn">Concluir</button>
            <span class="date">Criado em: ${new Date().toLocaleDateString()}</span>
        `;
        
        taskList.appendChild(taskDiv);
        
        // Add event listener for the complete button
        taskDiv.querySelector('.completeBtn').addEventListener('click', function() {
            taskDiv.classList.toggle('completed');
        });

        // Clear input fields
        document.getElementById('taskName').value = '';
        document.getElementById('taskLabel').value = '';
    }
});
