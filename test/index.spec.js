// // importamos la funcion que vamos a testear
// import { loginWithEmail, signUp } from '../src/firebaseFile.js';
// const firebaseMock = require('firebase-mock');

// const mockAuth = new firebaseMock.MockFirebase();
// mockAuth.autoFlush();
// global.firebase = firebaseMock.MockFirebaseSdk(
//   // use null if your code does not use RTDB
//   () => null,
//   () => mockAuth,
// );


// describe('signUp', () => {
//   it('debería crear nueva cuenta', () => signUp(mockAuth,'hola@gmail.com','123456')
//   .then((user)=>{
//     console.log(user);
//     expect(user.email).toBe('hola@gmail.com');
//   })) 
// });
