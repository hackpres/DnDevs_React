
const db = require('../config/connection');
const {Bosses} = require('../models/index');
const {Cards} = require('../models/index')
const bossSeeds = require('./bossSeeds.json');
const cardSeeds = require('./cardSeeds.json');
db.once('open', async () => {
  try {
    await Bosses.deleteMany({});
    await Bosses.create(bossSeeds);
    await Cards.deleteMant({});
    await Cards.create(cardSeeds);
    
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});