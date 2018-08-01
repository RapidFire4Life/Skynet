const Discord = require('discord.js');
exports.run = function(client, message, args) {

  let shitPoster = message.mentions.members.first();
  var id = shitPoster.id.toString();
  var name = shitPoster.username;

  if (!client.sPRanks.has(id)) {
    client.sPRanks.set(id, client.newUser);
  }
  const userStats = client.sPRanks.get(id);

  const embed = new Discord.RichEmbed()
    .setTitle(`__***${shitPoster.user.username}***__`)
    .setColor(9201458)
    .addField("Shitposting", `\n Reputation: ${userStats.uRep}     Rank: ${client.LevelTitle[userStats.uRank]}`)
    .addField("Sick Burns", `\n Reputation: ${userStats.burns}     Rank: N/A`)
    .addField("Good Boy Points", `\n Points: ${userStats.gbp}              Tendie Value: N/A`);

  message.channel.send({ embed });
}
