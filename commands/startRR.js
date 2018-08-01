exports.run = function(client, message, args) {

  let isAdmin = message.member.hasPermission("ADMINISTRATOR")
  const embed = {
    "description": "Time for another round of Russian Roulette, the gun is loaded!",
    "image": {
      "url": "https://media.giphy.com/media/3o6Mb2Cq10b0OQRqYU/giphy.gif"
    }
  };

  if(!isAdmin) {
    message.reply('UNAUTHORIZED USER');
  }else {
    client.RussianRoulette = true;
    client.loadedChamber = getRandomInt(1,6);
    client.currentChamber = 1;
    //client.channel.sendMessage({embed});
    client.channels.get('344586172313501699').sendMessage({embed});
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
