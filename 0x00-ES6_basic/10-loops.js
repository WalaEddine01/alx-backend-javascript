export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const array2 = [...array];
  for (const idx of array) {
    const value = appendString + idx;
    array2[i] = value;
    i += 1;
  }
  return array2;
}
