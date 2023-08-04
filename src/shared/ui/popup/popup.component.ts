import { Component, Input } from '@angular/core';
import { PopupsService } from 'app/services/popups.service';
import { BehaviorSubject } from 'rxjs';

// TODO добавить закрытие по клику на window

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() name: string;

  private readonly _isShow$ = new BehaviorSubject<boolean>(false);
  readonly isShow$ = this._isShow$.asObservable();

  constructor(private readonly _popupsService: PopupsService) {
    _popupsService.popupsStatuses$.subscribe((value) => {
      const isOpen = value[this.name]?.isOpen;
      if (isOpen !== this._isShow$.value) {
        this._isShow$.next(isOpen);
      }
    });
  }
}
