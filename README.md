# todolist
Making a todo list app

The todos will be objects that contain:
    1-a title
    2-description
    3-due date
    4-priority of (high-red neutral-blue low-green)
    5-project it belong to

They will have following actions:
    1- edit
    2- delete
    3- done
    4- project change

Projects will be objects that contain:
    1-name
    2-description
    3-due date
    4-priority of (high-magenta neutral-yellow low-cyan)
They will have actions:
    1-edit
    2-delete
    3-clear all
    4-done

The different modules of this project are:
1-create todo objects from local storage
2-create new todo objects
3-create new project
4-create projects from local storage
5-actions of todos
6-actions of projects
7-main
Each module will have a logic part and a DOM part, first will complete all the logic part.

The UI will be 4 columns(like masonry layout):
    1-Left most will be the default project or the collection of todos without any project. It will contain 3 containers of high, neutral and low priority. It will be fixed to left. 2/3 wide
    2- High priority projects -4 wide
    3- neutral priority projects- 3 wide
    4- low priority projects - 2 wide

Each project will contain 3 inner divs for different priorities. Inside each they will be sorted based on the ascending order of time left. For that I will be using the 'date-fns' library.

Local storage will be implemented as second part. First will be without local storage.

LOG:
17 April 2025
1 pm - created the plan