## Web application for managing a task list with the ability to add, edit, delete, and mark tasks as completed

Click link: [ToDo List](https://samokhvalova-nata.github.io/test-task-pr_volt/)

### Main page

- "/" - the main displays a task list.

![Main page](/assets/main.jpg)

## Functionality

### Counter

Counter displays the number of completed and current tasks

![Counter](/assets/counter.jpg)

### Complete task status

Clicking the checkbox marks the task as completed or unmarks it.

![Status](/assets/status.jpg)

### Add new task

Clicking the button "Add task" opens a modal window to create a new task.

Added validation for the field "Title" (the field cannot be empty).

![Add task](/assets/add-task.jpg)

### Filter for tasks by status

Filtering tasks by status (completed/current) is implemented using a select (dropdown) menu.

![Filter](/assets/filter.jpg)

### Edit and delete task

Clicking the button with the "Edit" icon opens a modal window for editing the task.

![Edit](/assets/edit.jpg)

Clicking the button with the "Delete" icon removes the task.

### No tasks

If the task list is empty, a message is displayed to the user.

![Empty](/assets/no-tasks.jpg)


## For start use command:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Technology Stack:

![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![Redux](https://img.shields.io/badge/-Redux-05122A?style=flat&logo=Redux)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
[![wemake-frontend-styleguide](https://img.shields.io/badge/style-wemake-000000.svg?style=flat&logo=style-wemake)](https://github.com/wemake-services/wemake-frontend-styleguide)