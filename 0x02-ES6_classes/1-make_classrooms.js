import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classroom = [];

  for (let i = 0; i < 3; i += 1) {
    if (i !== 2) classroom[i] = new ClassRoom(18 + i + 1);
    else classroom[i] = new ClassRoom(18 + i + 14);
  }
  return classroom;
}
