const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

function initFirebase(serviceAccountPath) {
  let cred;
  if (serviceAccountPath) {
    const p = path.isAbsolute(serviceAccountPath) ? serviceAccountPath : path.join(process.cwd(), serviceAccountPath);
    if (!fs.existsSync(p)) {
      console.error('service account file not found at', p);
      process.exit(2);
    }
    cred = JSON.parse(fs.readFileSync(p, 'utf8'));
  } else if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    cred = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  } else if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
    const p = path.isAbsolute(process.env.FIREBASE_SERVICE_ACCOUNT_PATH)
      ? process.env.FIREBASE_SERVICE_ACCOUNT_PATH
      : path.join(process.cwd(), process.env.FIREBASE_SERVICE_ACCOUNT_PATH);
    if (!fs.existsSync(p)) {
      console.error('service account file not found at', p);
      process.exit(2);
    }
    cred = JSON.parse(fs.readFileSync(p, 'utf8'));
  } else {
    console.error('No Firebase service account provided. Pass path or set FIREBASE_SERVICE_ACCOUNT_PATH / FIREBASE_SERVICE_ACCOUNT_JSON.');
    process.exit(2);
  }

  let dbUrl = process.env.FIREBASE_DATABASE_URL;
  if (!dbUrl && cred && cred.project_id) {
    dbUrl = `https://${cred.project_id}.default-rtdb.firebaseio.com`;
  }

  if (!dbUrl) {
    console.error('No Realtime Database URL available. Set FIREBASE_DATABASE_URL or pass service account with project_id.');
    process.exit(2);
  }

  admin.initializeApp({ credential: admin.credential.cert(cred), databaseURL: dbUrl });
  console.log('Firebase initialized with databaseURL:', dbUrl);
}

async function readPath(rtdbPath, timeoutMs = 10000) {
  try {
    console.log('Reading RTDB path:', rtdbPath);
    const getPromise = admin.database().ref(rtdbPath).get();
    const snap = await Promise.race([
      getPromise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('RTDB_TIMEOUT')), timeoutMs)),
    ]);
    if (!snap || !snap.exists()) {
      console.log('No snapshot exists at path');
      return;
    }
    const val = snap.val();
    console.log('Snapshot value:');
    console.log(JSON.stringify(val, null, 2));
  } catch (err) {
    console.error('RTDB read error:', err && err.message ? err.message : err);
  }
}

async function main() {
  const argPath = process.argv[2];
  if (!argPath) {
    console.error('Usage: node scripts/read-rtdb.js <path> [serviceAccountPath]');
    process.exit(2);
  }
  const serviceAccountPath = process.argv[3] || 'src/assets/firebase-service.json';
  initFirebase(serviceAccountPath);
  await readPath(argPath, Number(process.env.RTDB_READ_TIMEOUT_MS ?? 10000));
  process.exit(0);
}

main();
