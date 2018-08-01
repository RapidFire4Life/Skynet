exports.run = function(client, message, args) {

  let shitPoster = message.mentions.members.first();
  var id = shitPoster.id.toString();

  if (shitPoster == message.member) return;
  else{
    if (!client.sPRanks.has(id)) {
      client.sPRanks.set(id, client.newUser);
    }
    const userStats = client.sPRanks.get(id);

    message.channel.send(`Shitpost detected! Increasing ${shitPoster.user.username}\'s reputation!`);

    userStats.uRep = userStats.uRep + 1;

    if (userStats.uRep >= client.LevelXP[userStats.uRank]) {
      userStats.uRank = userStats.uRank + 1;
      message.channel.send(`${shitPoster} has achieved a new shitposting rank.  New Rank: ${client.LevelTitle[userStats.uRank]}`)
    }
    client.sPRanks.set(id, userStats);
  }
}
