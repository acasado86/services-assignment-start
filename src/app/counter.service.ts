import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;
  updateEvent = new EventEmitter<string>();

  constructor() { }

  changeToInactive() {
    this.activeToInactive++;
    this.updateEvent.emit('inactive');
  }

  changeToActive() {
    this.inactiveToActive++;
    this.updateEvent.emit('active');
  }
}
