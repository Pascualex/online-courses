import { CourseLevel } from 'src/app/models/CourseLevel';
import { Teacher } from './Teacher';

export class Course {

  constructor(
    public readonly title: string,
    public readonly level: CourseLevel,
    public readonly hours: number,
    public active: boolean,
    public readonly teacher: Teacher,
    public readonly id: number = -1
  ) { }
}
