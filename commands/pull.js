exports.run = function(client, message, args) {

  let player = message.member;
  var id = player.id.toString();

  if (!client.sPRanks.has(id)) {
    client.sPRanks.set(id, client.newUser);
  }

  const userStats = client.sPRanks.get(id);

  if(client.RussianRoulette == true){
    if(id !== client.lastPlayerRR){
      if(client.currentChamber !== client.loadedChamber){
        userStats.gbp = userStats.gbp + 5;
        client.sPRanks.set(id, userStats);
        client.currentChamber = client.currentChamber + 1;
        client.lastPlayerRR = id;
        message.channel.send(`${player.user.username} has survived a round and been awarded 5 extra good boy points!`);
        return;
      }
      else if(client.currentChamber == client.loadedChamber){
        userStats.gbp = userStats.gbp - 10;
        client.sPRanks.set(id, userStats);
        client.RussianRoulette = false;
        client.lastPlayerRR = 0;
        message.channel.send(`${player.user.username} has become an hero and lost 10 gbp in the process!  The game has ended, better luck next time.`);
        return;
      }
    }
    else{
      message.channel.send("Give someone else a turn!");
    }
  }
  else{
    message.channel.send("Roulette is not currently active, try again later!");
  }
}
