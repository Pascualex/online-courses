export enum CourseLevel {
  Unknown = 'UNKNOWN',
  Basic = 'BASIC',
  Intermediate = 'INTERMEDIATE',
  Advanced = 'ADVANCED'
}

export function parseCourseLevel(source: any): CourseLevel {
  switch (source) {
    case 'BASIC': return CourseLevel.Basic;
    case 'INTERMEDIATE': return CourseLevel.Intermediate;
    case 'ADVANCED': return CourseLevel.Advanced;
    default: return CourseLevel.Unknown;
  }
}