export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    let result = '';
    for (const setElem of set) {
      if (setElem && setElem.startsWith(startString)) {
        result = result === ''
          ? setElem.slice(startString.length)
          : `${result}-${setElem.slice(startString.length)}`;
      }
    }
    return result;
  }
  return '';
}
