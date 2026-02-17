#!/usr/bin/env node
import {
    updateTask,
    deleteTask,
    listTasks,
    addTask,
    markTaskToDone,
    markTaskToInProgress,
    listDoneTasks,
    listInProgressTasks,
    listIncompleteTasks,
} from "./src/task.js";

function main() {
    const [taskName, ...details] = process.argv.slice(2);

    switch (taskName) {
        case "add":
            addTask(details);
            break;
        case "update":
            updateTask(details);
            break;
        case "delete":
            deleteTask(details);
            break;
        case "list":
            listTasks();
            break;
    }
}

main();
