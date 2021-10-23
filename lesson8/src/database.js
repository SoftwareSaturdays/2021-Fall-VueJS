import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    // paste your config here...
}

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
