const Discord = require('discord.js');
const settings = require('./settings.json');
const PersistentCollection = require('djs-collection-persistent');
const client = new Discord.Client();
const sPRanks = new PersistentCollection({name: "sPRanks"});
const newUser = {uRep: 0, uRank: 0, gbp: 0, gbRank: 0, burns: 0, bRank: 0};

require('./utility/eventLoader')(client);

LevelXP = [10, 50, 100, 250, 500, 1000];
LevelTitle = ["Fucking Normie", "Newfag", "Filthy Casual", "Autistic Shitposter", "Enlightended  Shitposter", "God-Tier Shitposter"];
loadedChamber = 0;
currentChamber = 0;
RussianRoulette = false;
lastPlayerRR = ["0"];

client.login(settings.token);
client.sPRanks = sPRanks;
client.LevelXP = LevelXP;
client.LevelTitle = LevelTitle;
client.newUser = newUser;
client.RussianRoulette = RussianRoulette;
client.loadedChamber = loadedChamber;
client.currentChamber = currentChamber;
client.lastPlayerRR = lastPlayerRR;
