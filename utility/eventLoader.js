const reqEvent = (event) => require(`../events/${event}`)

module.exports = client => {
  //Events go here Add remove and all that shit
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
};
