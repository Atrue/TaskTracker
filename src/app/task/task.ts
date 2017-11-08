// класс задачи
export class Task {
    // конструктор принимает название, описание, дату до и ид задачи
    constructor(public title: string, public description: string, public date: Date, public order_id: number) {
    };
    // возвращает время в секундах
    getTime(): number {
      return this.date.getTime();
    }
}
