import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public imageTextTop: string;

  @Input()
  public imageTextBottom: string;

  @Input()
  public imageLink: string;

  @Input()
  public admin: boolean = false;

  @Input()
  public activable: boolean = false;

  @Input()
  public active: boolean = true;

  @Output()
  public removeEvent: EventEmitter<void> = new EventEmitter();

  @Output()
  public setActiveEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void { }

  public remove(): void {
    this.removeEvent.emit();
  }

  public setActive(active: boolean): void {
    this.setActiveEvent.emit(active);
  }
}
