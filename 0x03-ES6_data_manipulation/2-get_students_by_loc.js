export default function getStudentsByLocation(argObj, city) {
  if (typeof argObj !== 'object' || argObj === null) {
    return [];
  }
  return argObj.filter((a) => a.location === city);
}
