import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BsDropdownModule, ModalModule, SortableModule, ButtonsModule} from 'ngx-bootstrap';
import {SqDatetimepickerModule} from 'ngx-eonasdan-datetimepicker';
import {SortablejsModule} from 'angular-sortablejs';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {TaskComponent} from './task/task.component';
import {ClickOutsideDirective} from './directives/clickOutside.directive';
import {BlurOnEnterDirective} from './directives/bluronenter.directive';
import {AutoresizeDirective} from './directives/autoresize.directive';
import {TruncstrPipe} from './pipes/truncstr.pipe';
import {ListService} from './list/list.service';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
/* модуль проекта
* declarations - используемые внутренние компоненты и директивы
* imports - все импортируемые библиотеки
* providers - используемые сервисы
* bootstrap - первый загружаемый компонент
*/
@NgModule({
  declarations: [
    AppComponent, ListComponent, TaskComponent, ClickOutsideDirective,
    BlurOnEnterDirective, AutoresizeDirective, TruncstrPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, SqDatetimepickerModule, SortablejsModule, ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(), ModalModule.forRoot(), SortableModule.forRoot(), ConfirmationPopoverModule.forRoot(),
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
