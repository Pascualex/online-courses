import { Teacher } from '../model/Teacher';

export function bySearch(teachers: Teacher[], search: string): Teacher[] {
  if (!search) return teachers;
  const words: string[] = search.toLowerCase().split('-');
  return teachers.filter((teacher) => {
      const formattedName: string = teacher.name.toLowerCase();
      for (const word of words) { if (!formattedName.includes(word)) return false; }
      return true;
  });
}