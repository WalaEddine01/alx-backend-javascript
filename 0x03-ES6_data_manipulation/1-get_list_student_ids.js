export default function getListStudentIds(arg) {
  if (typeof arg !== 'object' || arg === null) {
    return [];
  }
  return arg.map((arg) => arg.id);
}
