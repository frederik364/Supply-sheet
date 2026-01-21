
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getDatabase, ref, push, set, onValue, remove } 
    from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

  // → HIER DEINE CONFIG einsetzen!
  const firebaseConfig = {
    apiKey: "DEIN_API_KEY",
    authDomain: "DEIN_DOMAIN",
    databaseURL: "DEINE_DATABASE_URL",
    projectId: "DEIN_PROJECT",
    storageBucket: "DEIN_BUCKET",
    messagingSenderId: "DEIN_MSID",
    appId: "DEIN_APPID"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  window.db = db;
  window.dbRef = ref;
  window.dbPush = push;
  window.dbSet = set;
  window.dbOnValue = onValue;
  window.dbRemove = remove;
</script>
