import get_students_by_loc from './2-get_students_by_loc';

export default function updateStudentGradeByCity(...Objs) {
  const a = get_students_by_loc(Objs);
  console.log(a);
}
