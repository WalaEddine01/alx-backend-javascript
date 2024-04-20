export default function getListStudentIds(arg) {
  const id = [];
  if (typeof arg !== 'object') {
    return id;
  }
  for (const a of arg) {
    id.push(a.id);
  }

  return id;
}
