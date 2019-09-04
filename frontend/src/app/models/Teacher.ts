export class Teacher {
  constructor(
    public readonly name: string,
    public readonly courseCount: number = -1,
    public readonly id: number = -1
  ) { }
}
