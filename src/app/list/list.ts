import {Task} from '../task/task';

// класс листа с задачами
export class List {
  // список задач
  public data: Task[] = [];

  // принимает название листа и его id
  constructor(public title: string, public order_id: number) { };

  // возвращает список задач
  getTasks(): Task[] {
    return this.data;
  }

  // добавляет задачу в список
  addTask(title: string, description: string, date: Date): Task {
    const task = new Task(title, description, date, (this.data.length + 1));
    this.data.push(task);
    return task;
  }

  // удаляет задачу из списка по его id
  deleteTask(id: number) {
    const index = this.data.findIndex((obj) => {
      return obj.order_id === id;
    });
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}
