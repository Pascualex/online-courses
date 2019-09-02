import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TeacherService } from 'src/app/services/teacher-service/teacher.service';
import { Teacher } from 'src/app/models/Teacher';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-new-teacher',
  templateUrl: './dialog-new-teacher.component.html',
  styleUrls: ['./dialog-new-teacher.component.scss']
})
export class DialogNewTeacherComponent implements OnInit {

  public formControl: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('[^\\s]+([\\s][^\\s]+)*')
    ])
  });

  constructor(private dialogRef: MatDialogRef<DialogNewTeacherComponent>,
              private teacherService: TeacherService) {}

  public ngOnInit(): void { }

  public onNoClick(): void {
    this.dialogRef.close(false);
  }

  public createTeacher(): void {
    if (this.formControl.invalid) { return; }

    const name: string = this.formControl.get('name').value;
    const teacher: Teacher = new Teacher(name);

    this.teacherService.addTeacher(teacher).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
