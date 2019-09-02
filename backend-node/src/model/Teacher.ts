export class Teacher {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly courseCount: number
  ) { }
}

export interface TeacherRow {
  id: number,
  name: string,
  course_count: number
}

export function bodyToTeacher(body: any): Teacher {
  if (typeof body.name !== 'string' || body.name.length < 3) return;
  if (typeof body.id === 'number' && body.id > 0) {
    return new Teacher(body.id, body.name, undefined);
  } else {
    return new Teacher(undefined, body.name, undefined);
  }
}

export function rowToTeacher(row: TeacherRow) {
  return new Teacher(row.id, row.name, row.course_count);
}