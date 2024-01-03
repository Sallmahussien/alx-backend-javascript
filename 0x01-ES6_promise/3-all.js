import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;

  uploadPhoto().then((photoResponse) => {
    body = photoResponse.body;

    return createUser();
  }).then((userResponse) => {
    console.log(`${body} ${userResponse.firstName} ${userResponse.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
