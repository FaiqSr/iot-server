const { Client } = require('pg');

(async () => {
  if (!process.env.DATABASE_URL) {
    console.log('DATABASE_URL_NOT_SET');
    process.exit(2);
  }

  const client = new Client({ connectionString: process.env.DATABASE_URL });
  try {
    await client.connect();
    const res = await client.query('SELECT 1 as ok');
    console.log('DB_OK');
    await client.end();
  } catch (err) {
    console.error('DB_ERR', err && err.message ? err.message : err);
    try { await client.end(); } catch {};
    process.exit(1);
  }
})();
