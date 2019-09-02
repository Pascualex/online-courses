import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-top',
  templateUrl: './section-top.component.html',
  styleUrls: ['./section-top.component.scss']
})
export class SectionTopComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  admin: boolean = false;

  @Input()
  creatingNew: boolean = false;

  @Input()
  connectionSucceed: boolean = false;

  @Output()
  setAdminEvent: EventEmitter<boolean> = new EventEmitter();

  @Output()
  createNewEvent: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) { }

  public ngOnInit(): void { }

  public setAdmin(admin: boolean): void {
    if (!this.connectionSucceed) { return; }
    this.setAdminEvent.emit(admin);
  }

  public createNew(): void {
    this.createNewEvent.emit();
  }
}
