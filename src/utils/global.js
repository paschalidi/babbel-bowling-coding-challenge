export const getIndexFromId = (players, id) => parseInt(Object.keys(players).findIndex((index) => players[index].id === id), 10);
