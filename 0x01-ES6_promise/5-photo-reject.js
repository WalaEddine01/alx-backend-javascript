export default function uploadPhoto(filename) {
  return new Promise.reject(Error(`${filename} cannot be processed`));
}
