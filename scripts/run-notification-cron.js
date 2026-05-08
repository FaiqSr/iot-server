#!/usr/bin/env node
const path = require('path');

async function main() {
  const notifSvc = require('../dist/service/notificationService');
  const cron = require('../dist/cron/notificationCron');
  const serviceAccountArg = process.argv[2];
  const serviceAccountPath = serviceAccountArg || process.env.FIREBASE_SERVICE_ACCOUNT_PATH || 'src/assets/firebase-service.json';
  console.log('Using service account path:', serviceAccountPath);
  try {
    await notifSvc.initFirebase(serviceAccountPath);
  } catch (err) {
    console.error('initFirebase error:', err);
    process.exit(1);
  }
  try {
    await cron.runNotificationCheck();
  } catch (err) {
    console.error('runNotificationCheck error:', err);
    process.exit(1);
  }
  console.log('Notification cron finished successfully');
  process.exit(0);
}

main();
