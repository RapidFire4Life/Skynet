exports.run = function(client, message, args) {

  let isAdmin = message.member.hasPermission("ADMINISTRATOR")

  if(!isAdmin) {
    message.reply('UNAUTHORIZED USER');
  }else {
    var embed = {
      "title": "Server Purge and Bots",
      "description": "So Skynet 2.0 is up and running on my new Raspberry Pi 3 and I have decided to purge all the channels and start fresh since there was shitposting in general chat, general chat in shitposting, and NSFW just everywhere.\n\n So with everything purged and fresh try to post in the appropriate chat when possible.\n\n I don't mind some crossover between general and shitposting, its to be expected.  However, please really try to keep NSFW content in the NSFW channel.",
      "color": 1411522,
      "author": {
        "name": "RapidFire4Life",
        "url": "https://discordapp.com",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
      },
      "fields": [
        {
          "name": "General Chat",
          "value": "For all general conversation, useful information, or anything else that isn’t memeing and shitposting"
        },
        {
          "name": "Shitposting ",
          "value": "For posting all those dank maymays and whatever other shitpost you come across that could be considered safe for work."
        },
        {
          "name": "Blackjack and Hookers ",
          "value": "For all NSFW (Not safe for work) content, be it shit posts or otherwise."
        }
      ]
    };

    message.channel.send({ embed });

    var embed = {
      "title": "Skynet (Shitpost) Bot",
      "description": "Skynet 2.0 Bot is now live his functions are limited right now but he has his base functionality in place.\n\n With this we can give each other reputation and the more reputation you earn the higher your shitposting rank will rise.  There are 6 ranks based on 1000 points, though I may adjust this later.\n\n Skynet 2.0's Commands are...",
      "color": 1411522,
      "author": {
        "name": "RapidFire4Life",
        "url": "https://discordapp.com",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
      },
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

    var embed = {
      "title": "Tatsumaki Bot",
      "description": "We also have another bot that I found online that I’m going to keep because it has some fun functionality.\n\n The commands for Tatsumaki are…",
      "color": 1411522,
      "author": {
      "name": "RapidFire4Life",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
      },
      "fields": [
        {
          "name": "!8ball [question]",
          "value": "*Description:* Ask the magic 8 ball. \n*Example:* !8ball Is the 8ball magical?"
        },
        {
          "name": "!choose <option > | <option > | [option ] | [ ... ]",
          "value": "*Description:* Makes a choice for you. \n*Example:* !choose Sleep | Discord"
        },
        {
          "name": "!coin",
          "value": "*Description:* Flip a coin. Heads or tails. \n*Example:* !coin 12"
        },
        {
          "name": "!dice [(rolls) d(sides)]",
          "value": "*Description:* Roll a dice with 6 sides or as specified. \n*Example:* !dice 2d12"
        },
        {
          "name": "!ratewaifu <waifu>",
          "value": "*Description:* Have Tatsumaki rate somebody based on their wifely qualities. \n*Example:* !ratewaifu Tatsumaki"
        },
        {
          "name": "!psychopass <@user>",
          "value": "*Description:* Have the Sibyl System check someone's crime coefficient. \n*Example:* !psychopass @dat boi"
        },
        {
          "name": "!image <subreddit > [--nsfw] [--day | --week | --month | --year | --all]",
          "value": "*Description:* Get a random subreddit image. \n*Example:* !image awwnime –month"
        }
      ]
    };

    message.channel.send({ embed });

    var embed = {
      "color": 1411522,
      "fields": [
        {
          "name": "!youtube <Search Terms>",
          "value": "*Description:* Search Youtube and return the top result. \n*Example:* !youtube aussie man reviews"
        },
        {
          "name": "!google <search terms>",
          "value": "*Description:* Search Google and return the top result. \n*Example:* !google potato soup recipe"
        },
        {
          "name": "!wiki <Search Terms>",
          "value": "*Description:* Search Wikipedia and return the top article. \n*Example:* !wiki chickens"
        },
        {
          "name": "!urban <Search Terms >",
          "value": "*Description:* Search Urban Dictionary and return a random result. \n*Example:* !urban Obama"
        },
        {
          "name": "!todo [ add | remove | clear | list ]",
          "value": "*Description:* Personal to-do list. \n*Example:* !todo add Go outside"
        },
        {
          "name": "!remindme <reminder> in <[0 days] [00 hours] [00 minutes]> | remove | list",
          "value": "*Description:* Set personal reminders. \n*Example:* !remindme to get dailies in 1 day 2 hours and 32 minutes"
        },
        {
          "name": "!vote <start | check | end> [t:<topic >] | <option 1 > | <option 2 > | [ ... ]",
          "value": "*Description:* Start a vote on something. \n*Example:* !vote start t:Doge is laif | Yes | No"
        },
        {
          "name": "!math <expression>",
          "value": "*Description:* Solve simple or complex math equations. \n*Example:* !math round(sqrt(log10(2)))"
        },
        {
          "name": "!converter [ temperature | distance | mass | volume | speed | timezone | help ] <amount> <format>",
          "value": "*Description:* Convert values ( temperature | distance | mass | volume | speed | timezone ) from one format to another. \n*Example:* !converter temperature 250 F"
        },
        {
          "name": "!strawpoll <option 1 | option 2 [...]>",
          "value": "*Description:* Create a Strawpoll. \n*Example:* !strawpoll chicken | dog | cat"
        },
        {
          "name": "!anime <Search Terms>",
          "value": "*Description:* Get info on an anime from MAL. \n*Example:* !Steins;Gate"
        },
        {
          "name": "!manga <Search Terms>",
          "value": "*Description:* Get info on a manga from MAL. \n*Example:* !manga Black Lagoon"
        }
      ]
    };

    message.channel.send({ embed });
  }
}
