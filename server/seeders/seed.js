
import db from '../config/connection.js';
import {Bosses} from '../models/index.js';
import {Cards} from '../models/index.js'
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const bossSeeds = require("./bossSeeds.json");
const cardSeeds = require('./cardSeeds.json');
db.once('open', async () => {
  try {
    await Bosses.deleteMany({});
    await Bosses.create(bossSeeds);
    await Cards.deleteMany({});
    await Cards.create(cardSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});