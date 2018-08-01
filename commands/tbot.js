exports.run = function(client, message, args) {

  var embed = {
    "color": 1411522,
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
