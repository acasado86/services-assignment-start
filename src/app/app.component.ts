import { CounterService } from './counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  actives: number;
  inactives: number;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.actives = this.counterService.inactiveToActive;
    this.inactives = this.counterService.activeToInactive;
    this.counterService.updateEvent.subscribe(
      (status: string) => {
        alert(status);
        this.actives = this.counterService.inactiveToActive;
        this.inactives = this.counterService.activeToInactive;
      }
    );
  }

}
