exports.run = function(client, message, args) {

  const Taylor = {uRep: 3, uRank: 0, gbp: 0, gbRank: 0, burns: 0, bRank: 0};
  const Wes = {uRep: 19, uRank: 1, gbp: 0, gbRank: 0, burns: 0, bRank: 0};
  const Burning = {uRep: 12, uRank: 1, gbp: 0, gbRank: 0, burns: 0, bRank: 0};
  const ChrisM = {uRep: 18, uRank: 1, gbp: 0, gbRank: 0, burns: 0, bRank: 0};
  const ChrisP = {uRep: 20, uRank: 1, gbp: 0, gbRank: 0, burns: 0, bRank: 0};

  client.sPRanks.set("149973188590174208", Taylor);
  client.sPRanks.set("217764557186269185", Wes);
  client.sPRanks.set("194145786563395584", Burning);
  client.sPRanks.set("229416767099895808", ChrisM);
  client.sPRanks.set("321748203685019670", ChrisP);
}
