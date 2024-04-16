import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const p = await uploadPhoto();
    const u = await createUser();

    return { photo: p, user: u };
  } catch (error) {
    return { photo: null, user: null };
  }
}
