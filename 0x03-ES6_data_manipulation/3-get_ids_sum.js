import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const ids = getListStudentIds(students);
  return ids.reduce((a, b) => a + b, 0);
}
