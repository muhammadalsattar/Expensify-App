// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, remove, update, onValue, get, off, push, child, onChildRemoved } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
// import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
const db = getDatabase();

const provider = new GoogleAuthProvider();

export {provider, db as default}


// get(ref(db, 'expenses', '-Mrq4sS7vStiSx5lwkTM')).then((snapshot)=>{
//   console.log(snapshot.val())
// })

// // listen for child deletion
// onChildRemoved(ref(db, 'notes'), (snapshot)=>{console.log(snapshot.val())})


// add an item to a list 
// update(ref(db), {
//   expenses: {}
// })

// set(push(ref(db, 'expenses')), {
//     description: 'Groceries',
//     amount: 22,
//     note: 'I got months groceries',
//     createdAt: 0
// });


// // delete array items
// get(ref(db, 'notes')).then((snapshot)=>{
//     snapshot.forEach((expense)=> {
//         remove(ref(db, `notes/${expense.key}`))
//     })
// })


// read data from database - listening for data changes
// onValue(ref(db), (snapshot)=> {
//     console.log(snapshot.val())
// })
// we can add ,{onlyOnce: true}); to return cached value instead of requesting data from db over and over 

// If you need the data only once, you can use get() to get a snapshot of the data from the database.
// get(ref(db, 'expenses')).then((snapshot)=> {console.log(snapshot.val())})

// write to and update database
// set(ref(db),
// {
//     name: 'Muhammad Abd-Elsattar',
//     age: 22,
//     job: 'Sofware Developer',
//     location: {
//         city: 'Albuhaiyrah',
//         country: 'Egypt'
//     },
//     mood: 'temper'
// }).then(()=>{console.log('fdfsdfsfs')})

// remove data from database
// const removeData = () => remove(ref(db, 'mood'))
// setTimeout(removeData, 2000)

// // update database
// setTimeout(()=>update(ref(db), {job: 'Full stack Engineer'}), 3000)

// // detach listeners
// setTimeout(()=> off(ref(db), 'value'), 3500)

// // update database
// setTimeout(()=>update(ref(db), {job: 'Full stack Developer'}), 4000)