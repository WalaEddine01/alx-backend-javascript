export default function updateStudentGradeByCity(list, targetLocation, newGrades) {
  return list
    .filter(({ location }) => location === targetLocation)
    .map((obj) => {
      const xtargetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = xtargetNewGrade.length > 0 ? xtargetNewGrade[0] : {};
      return { ...obj, grade };
    });
}
