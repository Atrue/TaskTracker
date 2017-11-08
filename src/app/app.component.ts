import {Component, OnInit} from '@angular/core';
import {ListService} from './list/list.service';

// главный компонент отображения
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ListService] // используемые сервисы
})
export class AppComponent implements OnInit {
  lists: ListService; // сервис листа
  globalFilter = 'All'; // текущий фильтр, не используется

  // конструктор - принимает севрсис листа
  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.lists = this.listService;
  }
}
