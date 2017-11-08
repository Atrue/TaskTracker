import {Component, ViewChild, Input, OnInit} from '@angular/core';
import {SortablejsOptions} from 'angular-sortablejs';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {TaskComponent} from '../task/task.component';
import {ListService} from './list.service';
import {List} from './list';
import {Task} from '../task/task';

// компонент для отображения листа
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @ViewChild('taskModal') public taskModal: TaskComponent; // модальное окно для редактирования задачи
  @ViewChild('confirmDeleteList') public confirmDeleteList: ModalDirective; // модальное окно для удаления листа
  @ViewChild('board') public board; // главный div с листами
  @Input() lists: ListService; // принимает сервис листа

  task: Task; // выбранная задача, передается в компонент задачи
  list: List; // выбранный лист, передается в компонент задачи
  deletingList: List; // лист, помеченный на удаление
  isTaskView = false; // отвечает за отображение модального окна
  warnRange = 3 * 24 * 60 * 60 * 1000; // 3 дня - максимальный срок для подсветки задачи
  sortOptions: SortablejsOptions = { // параметры сортировки задач
    group: 'card',
    animation: 150,
    ghostClass: 'card-active',
  };

  ngOnInit() {
  }

  getDate(): Date {
    return new Date();
  }

  createList() {
    this.lists.addList('NEW LIST');
    console.log(this.board);
    setTimeout(() => {
      this.board.nativeElement.scrollLeft = this.board.nativeElement.scrollWidth - this.board.nativeElement.offsetWidth - 150;
    }, 1);
  }

  askDelete(list: List) {
    this.deletingList = list;
    this.confirmDeleteList.show()
  }

  answerDelete(result: boolean) {
    if (result) {
      this.lists.deleteList(this.deletingList.order_id);
    }
    this.confirmDeleteList.hide();
    this.deletingList = null;
  }


  openTask(list: List, task: Task): void {
    this.task = task;
    this.list = list;
    this.isTaskView = true;
  }

  createTask(list: List): void {
    this.task = null;
    this.list = list;
    this.isTaskView = true;
  }

  // закрывает задачу при закрытии модального окна задачи
  onHidden(): void {
    this.isTaskView = false;
  }

}
