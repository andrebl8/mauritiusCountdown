/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { FirebaseProvider } from 'solid-firebase';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

const firebaseConfig = {}; // Add your Firebase configuration here

render(() => <FirebaseProvider config={firebaseConfig}>
  <App /></FirebaseProvider>, root!);
