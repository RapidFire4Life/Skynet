exports.run = function(client, message, args) {

  let shitPoster = message.mentions.members.first();
  var id = shitPoster.id.toString();

  if (shitPoster == message.member) return;
  else{
    if (!client.sPRanks.has(id)) {
      client.sPRanks.set(id, client.newUser);
    }
    const userStats = client.sPRanks.get(id);

    message.channel.send(`${shitPoster.user.username} that was a sick burn! Increasing burn reputation!`);

    userStats.burns = userStats.burns + 1;

    // Place to increase rank later

    client.sPRanks.set(id, userStats);
  }
}
