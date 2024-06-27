export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [key, val] of map.entries()) {
    if (val === 1) map.set(key, 100);
  }
  return map;
}
