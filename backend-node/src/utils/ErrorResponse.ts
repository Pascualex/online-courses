export class ErrorResponse {
  constructor(
    public readonly error: string,
    public readonly details: any = undefined
  ) { }
}