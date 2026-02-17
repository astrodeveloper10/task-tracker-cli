let id = 0;

function addTask(details) {
    try {
        if (details.length > 1) {
            throw new Error(
                `Too many arguments. Received ${details.length}, Expected: 1`,
            );
        }

        const [description] = details;

        if (!description) {
            throw new Error(
                "Description cannot be empty. Received an empty value",
            );
        }

        const task = {
            id: id + 1,
            description: description,
            status: "todo",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
    } catch (error) {
        console.error(error.message);
    }
}

function updateTask(...details) {}

function deleteTask(...details) {}

function listTasks() {}

function listDoneTasks() {}

function listInProgressTasks() {}

function listIncompleteTasks() {}

function markTaskToDone() {}

function markTaskToInProgress() {}

export {
    addTask,
    updateTask,
    deleteTask,
    listTasks,
    listDoneTasks,
    listInProgressTasks,
    listIncompleteTasks,
    markTaskToDone,
    markTaskToInProgress,
};
