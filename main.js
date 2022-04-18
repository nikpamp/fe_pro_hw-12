class TodoList {
    items = []

    completeAll() {
        this.items.forEach((item) => item.done = true);
    }

    add(id, title, description, done) {
        let newTodoItem = new TodoItem(id, title, description, done);
        this.items.push(newTodoItem);
    }
}

class TodoItem {
    constructor(id, title, description, done) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done;
    }
}

let list = new TodoList();
list.add(1, "title1", "description1", false);
list.add(12, "title12", "description12", false);
list.add(123, "title123", "description123", true);