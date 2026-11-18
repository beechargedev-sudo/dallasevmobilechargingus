// Writes the IndexNow key file into /public before build (key comes from env, never committed).
import { readdirSync, unlinkSync, writeFileSync } from 'node:fs';

const key = (process.env.INDEXNOW_KEY || '').trim();
for (const f of readdirSync('public')) if (/^[a-f0-9]{32,128}\.txt$/.test(f) && f !== `${key}.txt`) unlinkSync(`public/${f}`);
if (key) {
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error('INDEXNOW_KEY must be 8-128 chars [a-zA-Z0-9-]');
  writeFileSync(`public/${key}.txt`, key);
  console.log(`IndexNow key file written: public/${key}.txt`);
}
