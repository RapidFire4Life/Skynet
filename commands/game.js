exports.run = function(client, message, args) {

  let isAdmin = message.member.hasPermission("ADMINISTRATOR")

  if(!isAdmin) {
    message.reply('UNAUTHORIZED USER');
  }else {
    let playGame = message.content.slice(6, message.content.length);
    client.user.setGame(playGame);
  }
}
