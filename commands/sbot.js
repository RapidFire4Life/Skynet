exports.run = function(client, message, args) {

    var embed = {
      "color": 1411522,
      "fields": [
        {
          "name": "+rep @[Username] [Any message you want to tac on]",
          "value": "*Description:* This will increase the mentioned users reputation by 1. \n*Example:* +rep @Angrifying#7998 Wew lad that was a top tier shitpost!"
        },
        {
          "name": "+stats @[Username]",
          "value": "*Description:* This will return the name, reputation, and rank of a user. \n*Example:* Example: +stats @Angrifying#7998"
        },
        {
          "name": "+gbp @[Username]",
          "value": "*Description:* Gives a user one Good Boy Point for useful or interesting posts. \n*Example:* Example: +gbp @Angrifying#7998"
        },
        {
          "name": "+burn @[Username]",
          "value": "*Description:* Gives a user reputation for burning another user. \n*Example:* Example: +burn @Angrifying#7998"
        },
        {
          "name": "+pull",
          "value": "*Description:* While Roulette is active pull the trigger for a chance to win/lose good boy points.  Can't be done twice in a row. \n*Example:* Example: +pull"
        },
        {
          "name": "+tbot",
          "value": "*Description:* List the commands that are available from Tatsumaki-Bot \n*Example:* +tbot"
        },
        {
          "name": "+sbot",
          "value": "*Description:* List the commands that are available from Skynet-Bot \n*Example:* +sbot"
        }
      ]
    };

    message.channel.send({ embed });
}
