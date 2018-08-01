exports.run = function(client, message, args) {

  let shitPoster = message.mentions.members.first();
  var id = shitPoster.id.toString();

  if (shitPoster == message.member) return;
  else{
    if (!client.sPRanks.has(id)) {
      client.sPRanks.set(id, client.newUser);
    }
    const userStats = client.sPRanks.get(id);

    message.channel.send(`Quality content detected ${shitPoster.user.username} has been awarded one Good Boy point`);

    userStats.gbp = userStats.gbp + 1;

    // Place to increase rank later

    client.sPRanks.set(id, userStats);
  }
}
