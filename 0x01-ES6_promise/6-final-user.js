import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserP = signUpUser(firstName, lastName);
  const uploadPhotoP = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserP, uploadPhotoP]).then((result) => {
    const results = [];
    result.forEach((i) => {
      if (i.status === 'fulfilled') {
        results.push({ status: i.status, value: i.value });
      } else {
        results.push({ status: i.status, value: `${i.reason}` });
      }
    });
    return results;
  });
}
