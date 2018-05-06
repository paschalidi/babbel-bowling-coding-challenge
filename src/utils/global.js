export const getIndexFromId = (players, id) =>
  parseInt(Object.keys(players).findIndex((index) => {
    return players[index].id === id;
  }));
