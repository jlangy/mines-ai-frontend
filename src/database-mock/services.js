// This file is a mockup of functionality to retrieve mines by name or permitter
// In a real application, this could be extracted to an additional reusable API
// For requesting mine information by fields.

import mines from './mines.json';

export const findMineByName = name => {
  const mine = mines.find(mine => mine.mine_name === name);
  return mine || null;
}

export const findMinesByPermittee = permittee => {
  const permiteeMines = mines.filter(mine => mine.permittee_name === permittee);
  return permiteeMines.length > 0 ? mines : null;
}