export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const idx of array) {
    const value = appendString + idx;
    array[i] = value;
    i++;
  }

  return array;
}
