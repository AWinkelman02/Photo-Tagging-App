#! /usr/bin/env node

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Object = require("./models/object");
const Leaderboard = require("./models/leaderboard");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createObjects();
  await createLeaderboards();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}
  
async function createObjects() {
  console.log("Adding objects");
  await Promise.all([
    objectCreate(0, "Luigi", 966, 1917, false, "Mario-Castle"),
    objectCreate(1, "Blue Toad", 1079, "710", false, "Mario-Castle"),
    objectCreate(2, "Super Leaf", 129, "744", false, "Mario-Castle"),
    objectCreate(3, "Jake the Dog", 2754, 5633, false, "Cyber-City"),
    objectCreate(4, "Stewie Griffin", 3767, 3742, false, "Cyber-City"),
    objectCreate(5, "Ash Ketchem", 118, 5456, false, "Cyber-City"),
    objectCreate(6, "Ice King", 67, 440, false, "Space-Party"),
    objectCreate(7, "Dimple", 1337, 2119, false, "Space-Party"),
    objectCreate(8, "Six", 830, 3391, false, "Space-Party"),
  ]);
}

async function createLeaderboards() {
  console.log("Adding leaderboards");
  await Promise.all([
    leaderboardCreate(0, "Alec", "00:07:05", "Mario-Castle"),
    leaderboardCreate(1, "Alec", "00:06:99", "Cyber-City"),
    leaderboardCreate(2, "Alec", "00:07:32", "Space-Party"),
  ]);
}

async function objectCreate(index, object, x, y, found, game) {
  const objects = new Object({ 
    index:index, 
    object:object, 
    x:x, 
    y:y, 
    found:found, 
    game:game
  });

  await objects.save();
  console.log(`Added object: ${object}`);
}
  
async function leaderboardCreate(index, name, time, game) {
  const record = new Leaderboard({
    name:name,
    time:time,
    game:game,
  });

  await record.save();
  console.log(`Added leaderboard: ${name} ${time}`);
}