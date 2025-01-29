const tasks = [];

// Load initial tasks
function loadInitialTasks() {
    tasks.push(
        { name: "Implementar tela de listagem de tarefas", label: "frontend", completed: false },
        { name: "Criar endpoint para cadastro de tarefas", label: "backend", completed: false },
        { name: "Implementar protótipo da listagem de tarefas", label: "ux", completed: false }
    );
}

// Render tasks to the DOM
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
}

// Create a task element
function createTaskElement(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
        <div class="task-content">
            <span class="${task.completed ? 'completed' : ''}">${task.name}</span>
            <div class="task-details">
                <div class="label">${task.label}</div>
                <div class="date">Criado em: ${new Date().toLocaleDateString()}</div>
            </div>
            <div class="task-actions">
                ${!task.completed ? '<button class="completeBtn">Concluir</button>' : ''}
                <span class="checkIcon" style="display: ${task.completed ? 'flex' : 'none'};">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16.5" r="16" fill="#00D8A7"/>
                        <path d="M10.6667 17.1666L14 20.5L21.3334 13.1666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
        </div>
    `;

    const completeBtn = taskDiv.querySelector('.completeBtn');
    if (completeBtn) {
        completeBtn.addEventListener('click', () => {
            task.completed = true;
            renderTasks(); // Re-render tasks to reflect the updated state
            updateTaskCounter();
        });
    }

    return taskDiv;
}

// Update task counter
function updateTaskCounter() {
    const completedTasks = tasks.filter(task => task.completed).length;
    document.getElementById('taskCounter').innerText = `${completedTasks} tarefa(s) concluída(s)`;
}

// Add new task
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskName = document.getElementById('taskName').value;
    const taskLabel = document.getElementById('taskLabel').value;

    if (taskName) {
        tasks.push({ name: taskName, label: taskLabel, completed: false });
        renderTasks();
        document.getElementById('taskName').value = '';
        document.getElementById('taskLabel').value = '';
        updateTaskCounter();
    }
});

// Initialize tasks and render on page load
loadInitialTasks();
renderTasks();
