import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const all = [createUser(), uploadPhoto()];

  return Promise.all(all)
    .then(([user, photo]) => console.log(`${photo.body} ${user.firstName} ${user.lastName}`))
    .catch(() => console.error('Signup system offline'));
}
