import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAQG8CbrMQkK2ArUETJCrIj78k88j4c9eY",
    authDomain: "webmindz-87d42.firebaseapp.com",
    projectId: "webmindz-87d42",
    storageBucket: "webmindz-87d42.appspot.com",
    messagingSenderId: "1091374651304",
    appId: "1:1091374651304:web:d9df243f637a481666ef9d"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = app.auth();
export default app;
export { auth };