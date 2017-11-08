import {List} from './list';
import * as initialdata from '../../initialdata.json';

// сервис для листа с задачами
// получает данные из json файла, при использвании внешнего источника для загрузки данных использовать метод ngOnInit()
export class ListService {

  private data: List[] = [];

  // инициализация сервиса, для долгой загрузки данных используется ngOnInit()
  constructor() {
    for (const i in initialdata) {
      const listObj = initialdata[i];
      const list = new List(listObj.title, parseInt(i, 10) + 1);
      for (const j in listObj.data){
        const taskObj = listObj.data[j];
        list.addTask(taskObj.title, taskObj.description, new Date(taskObj.date));
      }
      this.data.push(list);
    }
  }

  // возвращает список листов
  getLists(): List[] {

    return this.data;
  }

  // добавление нового листа в список
  addList(title: string) {
    this.data.push(new List(title, (this.data.length + 1)));
  }

  // удаление листа по его id
  deleteList(id: number) {
    const index = this.data.findIndex((obj) => {
      return obj.order_id === id;
    });
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}
