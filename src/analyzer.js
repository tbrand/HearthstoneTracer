// Raw data
// [
//   {
//     trace_id: 'xxx',
//     timestamp: 0,
//     user_id: 'hello',
//     deck_id: 'yyy',
//     deck_name: 'big demon hunter',
//     result: 1,
//     hero_id: 'demon_hunter',
//     opponent_hero_id: 'mage',
//   }
// ]
//

export const extractDeck = (data, deckId) => {
  return data.filter(d => d.deck_id == deckId);
};

export const countPlays = (deckData, opponentHeroId) => {
  return deckData
    .map((d) => {
      return d.opponent_hero_id === opponentHeroId ? 1 : 0;
    })
    .reduce((prev, curr, i) => {
      return prev + curr;
    });
};

export const countWinLoose = (deckData, opponentHeroId) => {
  let win = 0;
  let loose = 0;

  deckData.forEach(d => {
    if (d.opponent_hero_id !== opponentHeroId) return;
    if (d.result) { win += 1; } else { loose += 1; }
  });

  return [win, loose];
};

export const winRatio = (win, loose) => {
  const rawRatio = win / (win + loose);
  return (Math.floor(rawRatio * Math.pow(10, 2)) / Math.pow(10, 2)) * 100;
};
