export default function taskBlock (trueOrFalse) {
  const task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    var task2 = false;
  }

  return [task, task2];
}
