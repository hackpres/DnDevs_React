
const db = require('../config/connection');
const {Bosses} = require('../models/index');
const bossSeeds = require('./bossSeeds.json');

db.once('open', async () => {
  try {
    await Bosses.deleteMany({});
    await Bosses.create(bossSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});