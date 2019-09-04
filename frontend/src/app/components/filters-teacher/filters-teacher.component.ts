import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filters-teacher',
  templateUrl: './filters-teacher.component.html',
  styleUrls: ['./filters-teacher.component.scss']
})
export class FiltersTeacherComponent implements OnInit {

  @Input()
  public initialSearchFilter: string;

  @Output()
  public setFiltersReadyEvent: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public setSearchFilterEvent: EventEmitter<string> = new EventEmitter();

  public searchFormControl = new FormControl();
  private formControlListenersSet: boolean = false;

  constructor() { }

  public ngOnInit(): void {
    this.setInitialFilters();
    this.setFormControlListeners();
    this.setFiltersReady(true);
  }

  public setSearchFilter(searchFilter: string): void {
    this.setSearchFilterEvent.emit(searchFilter);
  }

  private setInitialFilters(): void {
    if (this.initialSearchFilter) {
      this.searchFormControl.setValue(this.initialSearchFilter.replace('-', ' '));
    }
  }

  private setFormControlListeners(): void {
    if (this.formControlListenersSet) { return; }
    this.formControlListenersSet = true;

    this.searchFormControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((input: string) => {
      this.manageSearchFormControlChange(input);
    });
  }

  private setFiltersReady(filtersReady: boolean): void {
    this.setFiltersReadyEvent.emit(filtersReady);
  }

  private manageSearchFormControlChange(input: string): void {
    let formattedInput = input.trim();
    if (formattedInput.length > 0) {
      formattedInput = formattedInput.replace(/\s+/g, '-');
      this.setSearchFilter(formattedInput);
    } else {
      this.setSearchFilter(undefined);
    }
  }
}
