import {Component, Input, ViewChild, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {Task} from './task';
import {List} from '../list/list';
import * as moment from 'moment';

// компонент для отображение задачи
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent extends ModalDirective implements OnInit {
  @Input() task: Task; // задача - входной параметр
  @Input() list: List; // лист входной параметр
  @ViewChild('datepicker') public datepicker; // датапикер

  // параметры для datapicker
  formatShort = 'HH:mm D MMMM';
  formatFull = 'HH:mm D MMMM YYYY';
  dateOptions = {
    sideBySide: true,
    stepping: 10,
    format: this.formatShort,
    focusOnShow: true,
    icons:  {
      up: 'fa fa-angle-up',
      down: 'fa fa-angle-down',
      previous: 'fa fa-angle-left',
      next: 'fa fa-angle-right',
    }
  };
  currentDate = new Date();
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      'title': new FormControl(this.task ? this.task.title : '', Validators.required),
      'description': new FormControl(this.task ? this.task.description : ''),
      'date': new FormControl(this.task ? moment(this.task.date) : '', Validators.required)
    });
  }

  // отображение дат при выборе другого года
  changeDate() {
    if (this.form.value['date']) {
      this.datepicker.dpObject.format(
        this.form.value['date'].year() === this.currentDate.getFullYear() ? this.formatShort : this.formatFull
      );
    }
  }

  // сохранение задачи
  saveTask() {
    if (this.task) {
      this.task.title = this.form.value['title'];
      this.task.description = this.form.value['description'];
      this.task.date = this.form.value['date']._d;
    } else {
      this.list.addTask(
        this.form.value['title'], this.form.value['description'], this.form.value['date']._d
      )
    }
    this.hide()
  }

  // улаление задачи
  deleteTask() {
    this.list.deleteTask(this.task.order_id);
    this.hide();
  }

  // закрытие модального окна
  hide() {
    this.onHidden.emit();
  }
}
